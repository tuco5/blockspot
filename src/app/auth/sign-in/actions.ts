"use server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createClient } from "@/server/supabase/server";
import { z } from "zod";

const SignInSchema = z.object({
  email: z.string().min(1, "required"),
  password: z.string().min(1, "required"),
});

export type FormState = {
  ok: boolean;
  errors?: {
    email?: string[];
    password?: string[];
  };
};

export async function signin(prevState: FormState, formData: FormData) {
  const supabase = await createClient();

  const validate = SignInSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!validate.success) {
    return {
      ok: false,
      errors: validate.error.flatten().fieldErrors,
    };
  }

  const { error } = await supabase.auth.signInWithPassword(validate.data);

  if (error?.code === "invalid_credentials") {
    return {
      ok: false,
      errors: { password: [error.code ?? ""], email: [error.code ?? ""] },
    };
  } else if (error) {
    return { ok: false, errors: { password: ["oops"] } };
  }

  revalidatePath("/", "layout");
  redirect("/");
}
/* 
export async function signup(prevState: FormState, formData: FormData) {
  const supabase = await createClient();

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  const { error } = await supabase.auth.signUp(data);

  if (error) {
    return { status: "error", message: error.message };
  }

  revalidatePath("/", "layout");
  redirect("/");
}
 */
