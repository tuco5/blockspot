"use server";
import { type AuthFormState } from "../types";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";
import { createClient } from "@/server/supabase/server";

const SignInSchema = z.object({
  email: z.string().min(1, "required"),
  password: z.string().min(1, "required"),
});

export async function signin(prevState: AuthFormState, formData: FormData) {
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
    console.error(">>> Sign in action error:", { error });
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
