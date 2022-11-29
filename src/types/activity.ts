export type Activity = {
  activity: string
  type: ActivityType
  participants: number
  price: number
  link: string
  key: string
  accessibility: number
}

export type ActivityType =
  | 'recreational'
  | 'busywork'
  | 'charity'
  | 'diy'
  | 'education'
  | 'music'
  | 'relaxation'
  | 'social'
  | 'cooking'
