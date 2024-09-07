import { z } from 'zod'

export const NewsletterFormSchema = z.object({
  email: z.string().email({ message: 'Please enter a valid email.' }).trim(),
})

export type FormState =
  | {
      errors?: {
        email?: string[]
      }
      message?: string
    }
  | undefined
