import type { LoginSchema } from '@/schemas'
import type { User, UserWithPassword } from '@/types'

import bcrypt from 'bcryptjs'

export const loginUser = async (credentials: LoginSchema) => {
  const userFromLocalStorage = window.localStorage.getItem('user')

  if (!userFromLocalStorage) {
    return Promise.reject({ status: 404, message: 'There is no account with this credentials' })
  }

  const user = JSON.parse(userFromLocalStorage) as UserWithPassword

  if (user.email !== credentials.email) {
    return Promise.reject({ status: 404, message: 'There is no account with this credentials' })
  }

  const isPasswordMatch = await bcrypt.compare(credentials.password, user.password)

  if (!isPasswordMatch) {
    return Promise.reject({ status: 404, message: 'Email or password is invalid' })
  }

  return { age: user.age, email: user.email, name: user.name, lastName: user.lastName } as User
}
