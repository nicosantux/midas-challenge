import type { FC } from 'react'

import { useQuery } from '@tanstack/react-query'

import { ActivityItem } from '../ActivityItem'

import { Loading } from '@/components'
import { getUserActivities } from '@/services'

export const ActivityList: FC = () => {
  const { data: activityList, isLoading } = useQuery({
    queryKey: ['get-user-activities'],
    queryFn: getUserActivities,
  })

  if (isLoading) return <Loading />

  if (!activityList?.length) {
    return (
      <div className="flex flex-1 items-center justify-center text-gray-900">
        There are no activities in your list
      </div>
    )
  }

  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-4">
      {activityList?.map((activity) => (
        <ActivityItem activityItem={activity} key={activity.activity} />
      ))}
    </div>
  )
}
