import type { FC } from 'react'

export const Loading: FC = () => {
  return (
    <div className="before:bg-primary-500 after:bg-primary-500 before:animate-loading-pulse relative h-14 w-14 before:absolute before:inset-0 before:scale-0 before:rounded-full after:absolute after:inset-0 after:scale-0 after:animate-[loading-pulse_1s_linear_infinite_500ms] after:rounded-full">
      <span className="sr-only">Loading</span>
    </div>
  )
}
