"use server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createClient } from "@/server/supabase/server";
import { db } from "@/server/db";
import { newHubSchema } from "./schema";

export async function createHub(
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
  const validated = newHubSchema.safeParse({
    ...data,
    isPrivate: data.isPrivate === "on",
  });

  // HANDLING ERRORS:
  if (!validated.success) {
    console.error(">>> Invalid data:", { error });
    return { message: "invalid_data", ok: false };
  }

  // DB MUTATION:
  await db.hub.create({
    data: {
      ...validated.data,
      userId: user.id,
    },
  });

  // REDIRECT:
  revalidatePath("/dashboard", "page");
  redirect("/dashboard");
}
