import type { RegisterSchema } from '@/schemas'
import type { UserWithPassword } from '@/types'

import bcrypt from 'bcryptjs'

export const registerUser = async ({ password, ...restOfCredentials }: RegisterSchema) => {
  const hashedPassword = await bcrypt.hash(password, 10)

  const userFromLocalStorage = window.localStorage.getItem('user')

  if (!!userFromLocalStorage) {
    const { email } = JSON.parse(userFromLocalStorage) as UserWithPassword

    if (email === restOfCredentials.email)
      return Promise.reject({ status: 404, message: 'There is an user with this email' })
  }

  window.localStorage.setItem(
    'user',
    JSON.stringify({ ...restOfCredentials, password: hashedPassword }),
  )
}
