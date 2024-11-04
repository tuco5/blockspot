"use server";
import { schema } from "./schema";

export type FormState = {
  message: string;
  ok?: boolean;
};
export async function createGroup(
  prevState: FormState,
  formData: FormData,
): Promise<FormState> {
  const data = Object.fromEntries(formData);

  const validate = schema.safeParse({
    ...data,
    isPrivate: data.isPrivate === "on",
  });

  if (!validate.success) return { message: "Invalid data", ok: false };

  return { message: "Group created", ok: true };
}
