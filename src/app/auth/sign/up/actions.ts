"use server";
import { type AuthFormState } from "../types";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";
import { createClient } from "@/server/supabase/server";

const SignUpSchema = z.object({
  email: z.string().min(1, "required").email("invalid_email"),
  password: z.string().min(8, "too_short").max(32, "too_long"),
});

export async function signup(prevState: AuthFormState, formData: FormData) {
  const supabase = await createClient();

  const validate = SignUpSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!validate.success) {
    return {
      ok: false,
      errors: validate.error.flatten().fieldErrors,
    };
  }

  const { error } = await supabase.auth.signUp(validate.data);

  if (error) {
    console.error(">>> Sign up action error:", { error });
    return { ok: false, errors: { password: ["oops"] } };
  }

  revalidatePath("/", "layout");
  redirect("/auth/confirm");
}
