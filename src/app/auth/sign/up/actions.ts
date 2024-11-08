"use server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { getTranslations } from "next-intl/server";
import { createClient } from "@/server/supabase/server";
import { signUpSchema } from "./schema";

export async function signup(
  _: FormState,
  formData: FormData,
): Promise<FormState> {
  const t = await getTranslations("Errors");

  const data = Object.fromEntries(formData);
  const validated = signUpSchema.safeParse(data);

  if (!validated.success) {
    return {
      ok: false,
      message: t("invalid_data"),
    };
  }

  const supabase = await createClient();
  const { error } = await supabase.auth.signUp({
    email: validated.data.email,
    password: validated.data.password,
    options: {
      data: {
        name: validated.data.name,
      },
    },
  });

  if (error) {
    console.error(">>> Sign up action: supabase error:", { error });
    return { ok: false, message: t("oops") };
  }

  revalidatePath("/", "layout");
  redirect("/auth/confirm");
}
