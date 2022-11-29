import type { Activity } from '@/types'

const URL = 'http://www.boredapi.com/api/activity'

export const getRandomActivity = async (): Promise<Activity> => {
  const response = await fetch(URL)

  const data = await response.json()

  if (data['error']) throw new Error(data)

  return data
}
