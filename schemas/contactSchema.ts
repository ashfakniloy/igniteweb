import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .min(1, "Name is required")
    .min(3, "Name should be atleast 3 characters longer")
    .max(30, "Name shouyld not be longer than 30 characters"),
  email: z.string().min(1, "Email is required").email("Email is not valid"),
  subject: z
    .string()
    .min(1, "Subject is required")
    .min(3, "Subject should be atleast 3 characters longer"),
  message: z.string().min(1, "Message is required"),
});

export type ContactProps = z.infer<typeof contactSchema>;
