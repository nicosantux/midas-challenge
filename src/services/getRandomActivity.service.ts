import type { Activity } from '@/types'

const URL = 'http://www.boredapi.com/api/activity'

export const getRandomActivity = async (filterParams: string = ''): Promise<Activity> => {
  const response = await fetch(`${URL}/?${filterParams}`)

  const data = await response.json()

  if (data['error']) return Promise.reject(data.error)

  return data
}
