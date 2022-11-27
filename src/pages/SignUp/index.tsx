import type { FC } from 'react'

import { RegisterForm } from './components'

import { Container } from '@/components'

const SignUp: FC = () => {
  return (
    <Container className="grid h-full place-items-center">
      <main className="w-[min(400px,_100%)] rounded-md bg-gray-50 p-8 shadow-sm">
        <h1 className="text-primary-700 mb-8 text-center text-2xl font-bold">Do Something!</h1>
        <RegisterForm />
      </main>
    </Container>
  )
}

export default SignUp
