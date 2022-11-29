import type { Activity } from '@/types'

export const addActivity = async (activity: Activity) => {
  const activityListFromLocalStorage = window.localStorage.getItem('activities')

  if (!activityListFromLocalStorage) {
    return window.localStorage.setItem('activities', JSON.stringify([activity]))
  }

  const activityList = JSON.parse(activityListFromLocalStorage) as Activity[]

  const isActivity = activityList.find(
    (act) =>
      activity.activity === act.activity &&
      activity.type === act.type &&
      activity.participants === act.participants,
  )

  if (!isActivity) {
    return window.localStorage.setItem('activities', JSON.stringify([...activityList, activity]))
  }
}
