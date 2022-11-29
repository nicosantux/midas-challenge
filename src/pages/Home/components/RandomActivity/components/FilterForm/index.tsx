import type { ChangeEvent, Dispatch, FC, SetStateAction } from 'react'

import { type SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { Button, Input } from '@/components'
import { type FilterSchema, filterSchema } from '@/schemas'

interface Props {
  setFilterParams: Dispatch<SetStateAction<string>>
}

export const FilterForm: FC<Props> = ({ setFilterParams }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm<FilterSchema>({ resolver: zodResolver(filterSchema) })

  const onSubmit: SubmitHandler<FilterSchema> = ({ type, participants }) => {
    setFilterParams(`type=${type}&participants=${participants}`)
  }

  const handleReset = () => {
    reset()
    setFilterParams('')
  }

  return (
    <form
      className="tablet:flex-row tablet:items-end flex flex-col gap-4 text-left"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex flex-1 flex-col items-start gap-2" role="group">
        <label htmlFor="type">Activity type</label>
        <select
          className="tablet:w-auto w-full flex-1 rounded bg-gray-50 p-2 text-lg ring-1 ring-gray-600"
          id="type"
          {...register('type')}
        >
          <option value="">Select activity type</option>
          <option value="recreational">Recreational</option>
          <option value="busywork">Busywork</option>
          <option value="charity">Charity</option>
          <option value="diy">Diy</option>
          <option value="education">Education</option>
          <option value="music">Music</option>
          <option value="relaxation">Relaxation</option>
          <option value="social">Social</option>
          <option value="cooking">Cooking</option>
        </select>
      </div>
      <Input
        label="Participants"
        {...register('participants', {
          setValueAs: (participants: string) => Number(participants),
          onChange: (e: ChangeEvent<HTMLInputElement>) => {
            e.target.value = e.target.value.replace(/[^0-9]/g, '')
          },
        })}
      />
      <Button className="h-10 flex-1 p-2 text-sm" disabled={isSubmitting} fullWidth type="submit">
        Filter
      </Button>
      <Button
        className="h-10 flex-1 p-2 text-sm"
        disabled={isSubmitting}
        fullWidth
        onClick={handleReset}
        variant="secondary"
      >
        Reset
      </Button>
    </form>
  )
}
