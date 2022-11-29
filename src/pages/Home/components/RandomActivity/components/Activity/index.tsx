import { FC, useCallback, useState } from 'react'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'

import { SkeletonRandomActivity } from '../SkeletonRandomActivity'
import { ErrorRandomActivity } from '../ErrorRandomActivity'
import { FilterForm } from '../FilterForm'

import { ActivityCard, Button } from '@/components'
import { getRandomActivity, addActivity } from '@/services'

interface Props {}

export const Activity: FC<Props> = () => {
  const [filterParams, setFilterParams] = useState<string>('')

  const {
    data: randomActivity,
    isLoading,
    isError,
    error,
    refetch,
    isRefetching,
  } = useQuery({
    queryKey: ['random-activity', filterParams],
    queryFn: () => getRandomActivity(filterParams),
    refetchOnWindowFocus: false,
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

  return (
    <div className="flex flex-col gap-4">
      <FilterForm setFilterParams={setFilterParams} />
      {isLoading || isRefetching ? (
        <SkeletonRandomActivity />
      ) : isError ? (
        <ErrorRandomActivity error={error as string} retry={retryOnError} />
      ) : (
        (!isLoading || !isRefetching) && <ActivityCard activity={randomActivity} />
      )}
      {!isError && (
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
      )}
    </div>
  )
}
