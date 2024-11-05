import { z } from "zod";

export const signInSchema = z.object({
  email: z.string().trim().min(1, "required").email("invalid_email"),
  password: z
    .string()
    .min(1, "required")
    .min(8, "too_short")
    .max(32, "too_long"),
});

export type SignInSchema = z.infer<typeof signInSchema>;
