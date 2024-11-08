"use server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { getTranslations } from "next-intl/server";
import { z } from "zod";
import { createClient } from "@/server/supabase/server";

const SignInSchema = z.object({
  email: z.string().min(1, "required"),
  password: z.string().min(1, "required"),
});

export async function signin(
  _: FormState,
  formData: FormData,
): Promise<FormState> {
  const t = await getTranslations("Errors");

  const data = Object.fromEntries(formData);
  const validate = SignInSchema.safeParse(data);

  if (!validate.success) {
    console.error(">>> Sign in action validation error:", {
      error: validate.error,
    });
    return {
      ok: false,
      message: t("invalid_data"),
    };
  }

  const supabase = await createClient();
  const { error } = await supabase.auth.signInWithPassword(validate.data);

  if (error?.code === "invalid_credentials") {
    console.error(">>> Sign in action supabase error:", { error });
    return {
      ok: false,
      message: t("invalid_credentials"),
    };
  } else if (error) {
    return { ok: false, message: t("oops") };
  }

  revalidatePath("/", "layout");
  redirect("/dashboard");
}
