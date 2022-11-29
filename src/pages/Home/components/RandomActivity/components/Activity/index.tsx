import { FC, useCallback } from 'react'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'

import { SkeletonRandomActivity } from '../SkeletonRandomActivity'
import { ErrorRandomActivity } from '../ErrorRandomActivity'

import { ActivityCard, Button } from '@/components'
import { getRandomActivity, addActivity } from '@/services'

interface Props {}

export const Activity: FC<Props> = () => {
  const {
    data: randomActivity,
    isLoading,
    isError,
    refetch,
    isRefetching,
  } = useQuery({
    queryKey: ['random-activity'],
    queryFn: getRandomActivity,
  })

  const addActivityMutation = useMutation({ mutationFn: addActivity })

  const queryClient = useQueryClient()

  const handleAddActivity = () => {
    addActivityMutation.mutate(randomActivity!, {
      onSuccess: () => {
        queryClient.invalidateQueries(['get-user-activities'])
        queryClient.invalidateQueries(['random-activity'])
      },
    })
  }

  const retryOnError = useCallback(() => refetch(), [refetch])

  if (isLoading || isRefetching) return <SkeletonRandomActivity />
  if (isError) return <ErrorRandomActivity retry={retryOnError} />

  return (
    <div className="flex flex-col gap-4">
      <ActivityCard activity={randomActivity} />
      <div className="tablet:flex-row flex flex-col-reverse gap-4">
        <Button disabled={isLoading || isRefetching} fullWidth onClick={handleAddActivity}>
          Add activity
        </Button>
        <Button
          disabled={isLoading || isRefetching}
          fullWidth
          onClick={() => refetch()}
          variant="secondary"
        >
          Get other activity
        </Button>
      </div>
    </div>
  )
}
