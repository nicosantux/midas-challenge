import type { Activity } from '@/types'

export const deleteActivity = async (activity: Activity['activity']): Promise<void> => {
  const activityListFromLocalStorage = window.localStorage.getItem('activities')

  if (!activityListFromLocalStorage) {
    return Promise.reject({ status: 400, message: 'There is no activities in the list' })
  }

  const activityList = JSON.parse(activityListFromLocalStorage) as Activity[]

  const newActivityList = activityList.filter((act) => activity !== act.activity)

  if (newActivityList.length === activityList.length) {
    return Promise.reject({ status: 400, message: 'There is no such activity in the list' })
  }

  return window.localStorage.setItem('activities', JSON.stringify(newActivityList))
}
