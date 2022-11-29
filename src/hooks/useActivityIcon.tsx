import type { ActivityType } from '@/types'

import { FaRunning, FaHandHoldingHeart, FaTools, FaSchool, FaMusic } from 'react-icons/fa'
import { MdWork, MdPeopleAlt } from 'react-icons/md'
import { GiMeditation, GiCook } from 'react-icons/gi'

type ActivityIconMap = {
  [key in ActivityType]: JSX.Element
}

export const useActivityIcon = (type: ActivityType) => {
  const activityIcon: ActivityIconMap = {
    busywork: <MdWork />,
    charity: <FaHandHoldingHeart />,
    cooking: <GiCook />,
    diy: <FaTools />,
    education: <FaSchool />,
    music: <FaMusic />,
    recreational: <FaRunning />,
    relaxation: <GiMeditation />,
    social: <MdPeopleAlt />,
  }

  return activityIcon[type]
}
