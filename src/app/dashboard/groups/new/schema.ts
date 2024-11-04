import { z } from "zod";

export const schema = z.object({
  name: z.string().trim().min(1, "required"),
  location: z.string().trim().min(1, "required"),
  isPrivate: z.boolean().default(true).optional(),
});

export type FormSchema = z.infer<typeof schema>;
