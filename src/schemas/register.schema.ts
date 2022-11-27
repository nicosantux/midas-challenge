import { z } from 'zod'

import { loginSchema } from '.'

export const registerSchema = loginSchema.extend({
  age: z
    .number({ required_error: 'Age is required', invalid_type_error: 'Age must be a number' })
    .int()
    .positive({ message: 'Age is required' })
    .min(13, 'Age must be older than 13'),
  name: z.string().min(1, 'Name is required').min(2, 'The name must be at least 2 characters long'),
  lastName: z
    .string()
    .min(1, 'Last name is required')
    .min(2, 'The last name must be at least 2 characters long'),
})

export type RegisterSchema = z.infer<typeof registerSchema>
