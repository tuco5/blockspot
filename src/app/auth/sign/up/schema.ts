import { z } from "zod";

export const signUpSchema = z.object({
  name: z.string().trim().min(1, "required"),
  email: z.string().trim().min(1, "required").email("invalid_email"),
  password: z.string().min(8, "too_short").max(32, "too_long"),
});

export type SignUpSchema = z.infer<typeof signUpSchema>;
