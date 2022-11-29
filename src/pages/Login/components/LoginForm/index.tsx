import { type FC, useState, useEffect } from 'react'
import { useForm, type SubmitHandler } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'

import { Button, Input, Link } from '@/components'
import { type LoginSchema, loginSchema } from '@/schemas'
import { loginUser } from '@/services'
import { useAuth } from '@/hooks'

export const LoginForm: FC = () => {
  const {
    watch,
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<LoginSchema>({ resolver: zodResolver(loginSchema) })

  const [error, setError] = useState<string>('')

  const { login } = useAuth()
  const navigate = useNavigate()

  const loginMutation = useMutation({ mutationFn: loginUser })

  const onSubmit: SubmitHandler<LoginSchema> = (data) => {
    loginMutation.mutate(data, {
      onSuccess: (user) => {
        login(user)
        navigate('/', { replace: true })
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
        Login
      </Button>
      <p className="text-center">
        New to Do Something?{' '}
        <Link
          className="text-primary-700 hover:text-primary-500 focus-visible:text-primary-500 focus-ring font-bold hover:underline focus-visible:underline"
          to="/signUp"
        >
          Join now!
        </Link>
      </p>
    </form>
  )
}
