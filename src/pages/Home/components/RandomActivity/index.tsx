import type { FC } from 'react'

import { Activity } from './components'

export const RandomActivity: FC = () => {
  return (
    <section aria-labelledby="random-activity" className="mx-auto w-[min(500px,100%)] text-center">
      <h2 className="mb-6 text-3xl font-bold text-gray-900" id="random-activity">
        Random activity
      </h2>
      <Activity />
    </section>
  )
}
