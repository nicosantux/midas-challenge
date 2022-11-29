import { z } from 'zod'

export const filterSchema = z.object({
  type: z.enum([
    'recreational',
    'busywork',
    'charity',
    'diy',
    'education',
    'music',
    'relaxation',
    'social',
    'cooking',
  ]),
  participants: z.number().int().positive(),
})

export type FilterSchema = z.infer<typeof filterSchema>
