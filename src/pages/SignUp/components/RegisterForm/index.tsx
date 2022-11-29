import { type ChangeEvent, type FC, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm, type SubmitHandler } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'

import { Input, Button, Link } from '@/components'
import { registerSchema, type RegisterSchema } from '@/schemas'
import { registerUser } from '@/services'
import { useAuth } from '@/hooks'

export const RegisterForm: FC = () => {
  const {
    watch,
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<RegisterSchema>({ resolver: zodResolver(registerSchema) })

  const [error, setError] = useState<string>('')

  const { login } = useAuth()

  const registerMutation = useMutation({ mutationFn: registerUser })

  const navigate = useNavigate()

  const onSubmit: SubmitHandler<RegisterSchema> = (data) => {
    registerMutation.mutate(data, {
      onSuccess: () => {
        login({ name: data.name, lastName: data.lastName, email: data.email, age: data.age })
        navigate('/')
      },
      onError: (error: any) => setError(error.message as string),
    })
  }

  useEffect(() => {
    const errorSubscription = watch(() => setError(''))

    return () => errorSubscription.unsubscribe()
  }, [watch])

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
      <Input
        aria-invalid={errors.name ? true : false}
        id="name"
        label="First name"
        type="text"
        {...register('name')}
        errorMessage={errors.name?.message}
      />
      <Input
        aria-invalid={errors.lastName ? true : false}
        id="lastName"
        label="Last name"
        type="text"
        {...register('lastName')}
        errorMessage={errors.lastName?.message}
      />
      <Input
        aria-invalid={errors.age ? true : false}
        id="age"
        inputMode="numeric"
        label="Age"
        type="text"
        {...register('age', {
          setValueAs: (age: string) => Number(age),
          onChange: (e: ChangeEvent<HTMLInputElement>) => {
            e.target.value = e.target.value.replace(/[^0-9]/g, '')
          },
        })}
        errorMessage={errors.age?.message}
      />
      <Input
        aria-invalid={errors.email ? true : false}
        id="email"
        label="Email"
        type="email"
        {...register('email')}
        errorMessage={errors.email?.message}
      />
      <Input
        aria-invalid={errors.password ? true : false}
        id="password"
        label="Password"
        type="password"
        {...register('password')}
        errorMessage={errors.password?.message}
      />
      {error && (
        <span className="rounded bg-red-700 p-2 text-center font-bold text-gray-50" role="alert">
          {error}
        </span>
      )}
      <Button className="mt-4 w-full" disabled={isSubmitting} type="submit">
        Register
      </Button>
      <p className="text-center">
        Already on Do Something?{' '}
        <Link
          className="text-primary-700 hover:text-primary-500 focus-ring focus-visible:text-primary-500 font-bold hover:underline focus-visible:underline"
          to="/login"
        >
          Login
        </Link>
      </p>
    </form>
  )
}
