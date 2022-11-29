import type { FC } from 'react'

import { Button } from '@/components'

export const SkeletonRandomActivity: FC = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="text-md flex animate-pulse flex-col gap-4 rounded border border-gray-300 p-4 text-left text-gray-900">
        <div className="h-6 w-52 rounded bg-gray-300" />
        <div className="flex items-center  gap-2 text-center">
          <div className="h-6 w-6 rounded bg-gray-300" />
          <div className="h-6 w-16 rounded bg-gray-300" />
        </div>
        <div className="h-6 w-32 rounded bg-gray-300" />
      </div>
      <div className="tablet:flex-row flex flex-col-reverse gap-4">
        <Button disabled fullWidth>
          Add activity
        </Button>
        <Button disabled fullWidth variant="secondary">
          Get other activity
        </Button>
      </div>
    </div>
  )
}
