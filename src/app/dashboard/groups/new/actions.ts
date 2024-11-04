"use server";
import { revalidatePath } from "next/cache";
import { schema } from "./schema";
import { redirect } from "next/navigation";

export type FormState = {
  message: string;
  ok?: boolean;
};
export async function createGroup(
  _prevState: FormState,
  formData: FormData,
): Promise<FormState> {
  const data = Object.fromEntries(formData);

  const validate = schema.safeParse({
    ...data,
    isPrivate: data.isPrivate === "on",
  });

  if (!validate.success) return { message: "Invalid data", ok: false };

  revalidatePath("/dashboard", "page");
  redirect("/dashboard");
}
