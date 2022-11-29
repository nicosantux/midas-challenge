import type { FC } from 'react'

import { Link } from '@/components'

const NotFound: FC = () => {
  return (
    <div className="flex flex-col items-center gap-4">
      <span>404 | Not found</span>
      <Link className="focus-ring font-bold hover:underline focus-visible:underline" to="/">
        Go back
      </Link>
    </div>
  )
}

export default NotFound
