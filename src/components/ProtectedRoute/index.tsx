import type { FC, ReactNode } from 'react'

import { Navigate, Outlet } from 'react-router-dom'

interface Props {
  children?: ReactNode
  isAllowed: boolean
  redirectTo?: string
}

export const ProtectedRoute: FC<Props> = ({ children, isAllowed, redirectTo = '/login' }) => {
  if (!isAllowed) return <Navigate replace to={redirectTo} />

  return children ? <>{children}</> : <Outlet />
}
