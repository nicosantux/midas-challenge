import type { FC } from 'react'
import type { Activity } from '@/types'

import { useActivityIcon } from '@/hooks'

interface Props {
  activity: Activity
}

export const ActivityCard: FC<Props> = ({ activity: { activity, participants, type } }) => {
  const activityIcon = useActivityIcon(type)

  return (
    <div className="text-md flex flex-col gap-4 rounded border border-gray-300 p-4 text-left text-gray-900">
      <p className="font-semibold">{activity}</p>
      <div className="flex items-center  gap-2 text-center">
        {activityIcon}
        <p className="capitalize">{type}</p>
      </div>
      <p>Participants: {participants}</p>
    </div>
  )
}
