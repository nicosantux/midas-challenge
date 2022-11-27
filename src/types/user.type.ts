export type User = {
  age: number
  email: string
  lastName: string
  name: string
}

export type UserWithPassword = User & { password: string }
