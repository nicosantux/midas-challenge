import type { FC } from 'react'
import type { Activity } from '@/types'

import { useMutation, useQueryClient } from '@tanstack/react-query'

import { Button } from '@/components'
import { deleteActivity } from '@/services'
import { useActivityIcon } from '@/hooks'

interface Props {
  activityItem: Activity
}

export const ActivityItem: FC<Props> = ({ activityItem: { activity, participants, type } }) => {
  const activityIcon = useActivityIcon(type)

  const deleteActivityMutation = useMutation({ mutationFn: deleteActivity })

  const queryClient = useQueryClient()

  const handleDeleteActivity = (activity: Activity['activity']) => {
    deleteActivityMutation.mutate(activity, {
      onSuccess: () => queryClient.invalidateQueries(['get-user-activities']),
    })
  }

  return (
    <div
      className="flex flex-col justify-between gap-4 rounded border border-gray-300 p-4 text-gray-900"
      key={activity}
    >
      <div className="flex flex-col gap-2">
        <p className="font-semibold">{activity}</p>
        <div className="flex items-center gap-2">
          {activityIcon}
          <p className="capitalize">{type}</p>
        </div>
        <p>Participants: {participants}</p>
      </div>
      <Button onClick={() => handleDeleteActivity(activity)} variant="error">
        Delete activity
      </Button>
    </div>
  )
}
