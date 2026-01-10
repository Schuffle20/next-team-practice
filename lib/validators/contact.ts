import { z } from "zod";

export const contactSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters").max(128, "Name must not be more than 128 characters"),
    email: z.string().email("Please enter a valid email").max(100, "Email must not be 100 characters"),
    message: z.string().max(225, "Message must not be more than 255 characters")
})

export type ContactFormInputs = z.infer<typeof contactSchema>