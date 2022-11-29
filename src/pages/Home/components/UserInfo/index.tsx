import type { FC } from 'react'

import { useAuth } from '@/hooks'

interface Props {}

export const UserInfo: FC<Props> = () => {
  const { user } = useAuth()

  return (
    <section aria-labelledby="personal-information" className="mx-auto mb-8 text-center">
      <h2 className="mb-6 text-3xl font-bold text-gray-900" id="personal-information">
        Your information
      </h2>
      <p className="text-lg text-gray-900">
        Name: <span className="font-bold">{user?.name}</span>
      </p>
      <p className="text-lg text-gray-900">
        Last name: <span className="font-bold">{user?.lastName}</span>
      </p>
      <p className="text-lg text-gray-900">
        Age: <span className="font-bold">{user?.age}</span>
      </p>
    </section>
  )
}
