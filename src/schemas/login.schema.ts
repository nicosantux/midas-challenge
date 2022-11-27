import { z } from 'zod'

export const loginSchema = z.object({
  email: z.string().min(1, 'Email is required').email('Invalid email'),
  password: z
    .string()
    .min(1, 'Password is required')
    .min(8, 'The password must be at least 8 characters long.')
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
      'The password must have at least one uppercase letter, one lowercase letter and one number.',
    ),
})

export type LoginSchema = z.infer<typeof loginSchema>
