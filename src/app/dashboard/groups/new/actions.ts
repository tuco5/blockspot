"use server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createClient } from "@/server/supabase/server";
import { db } from "@/server/db";
import { schema } from "./schema";

export type FormState = {
  message: string;
  ok?: boolean;
};
export async function createGroup(
  _prevState: FormState,
  formData: FormData,
): Promise<FormState> {
  const supabase = await createClient();

  // AUTH:
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  if (!user) {
    console.error(">>> Auth error:", { error });
    redirect("/auth/sign/in");
  }

  // PARSING DATA:
  const data = Object.fromEntries(formData);
  const validated = schema.safeParse({
    ...data,
    isPrivate: data.isPrivate === "on",
  });

  // HANDLING ERRORS:
  if (!validated.success) {
    console.error(">>> Invalid data:", { error });
    return { message: "Invalid data", ok: false };
  }

  // DB MUTATION:
  await db.group.create({
    data: {
      ...validated.data,
      userId: user.id,
    },
  });

  // REDIRECT:
  revalidatePath("/dashboard", "page");
  redirect("/dashboard");
}
