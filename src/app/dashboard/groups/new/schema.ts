import { z } from "zod";

export const newGroupSchema = z.object({
  name: z.string().trim().min(1, "required"),
  location: z.string().trim().min(1, "required"),
  isPrivate: z.boolean().default(true).optional(),
});

export type NewGroupSchema = z.infer<typeof newGroupSchema>;
