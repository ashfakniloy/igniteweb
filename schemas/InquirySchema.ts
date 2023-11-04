import { z } from "zod";

export const inquirySchema = z.object({
  name: z
    .string()
    .min(1, "Name is required")
    .min(3, "Name should be atleast 3 characters longer")
    .max(30, "Name shouyld not be longer than 30 characters"),
  email: z.string().min(1, "Email is required").email("Email is not valid"),
  figma_url: z.string().min(1, "Figma URL is required").url("URL is not valid"),
});

export type InquiryProps = z.infer<typeof inquirySchema>;
