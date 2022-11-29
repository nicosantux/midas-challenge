import type { Activity } from '@/types'

export const getUserActivities = async (): Promise<Activity[]> => {
  const activityList = window.localStorage.getItem('activities')

  if (!activityList) return []

  return JSON.parse(activityList)
}
