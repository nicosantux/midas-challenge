import type { FC } from 'react'

import { Button } from '@/components'

interface Props {
  error: string
  retry: () => void
}

export const ErrorRandomActivity: FC<Props> = ({ retry, error }) => {
  return (
    <div className="flex flex-col gap-4 ">
      <div className="border-gray300 flex h-32 items-center justify-center rounded border p-4">
        {error ? <p>{error}</p> : <p>Oops! An error has occurred. Please try again later</p>}
      </div>
      <Button onClick={retry}>Try again</Button>
    </div>
  )
}
