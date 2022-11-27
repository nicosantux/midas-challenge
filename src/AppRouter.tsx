import { type FC, Suspense, lazy, useMemo } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Loading, ProtectedRoute } from '@/components'
import { useAuth } from '@/hooks'

const Home = lazy(() => import('@/pages/Home'))
const Login = lazy(() => import('@/pages/Login'))
const SignUp = lazy(() => import('@/pages/SignUp'))
const ActivitiesToDo = lazy(() => import('@/pages/ActivitiesToDo'))
const NotFound = lazy(() => import('@/pages/NotFound'))

const AppRouter: FC = () => {
  const { user } = useAuth()

  const isLogged = useMemo(() => {
    const loggedFromLocalStorage = window.localStorage.getItem('logged')

    if (!loggedFromLocalStorage) return false

    return (JSON.parse(loggedFromLocalStorage) as boolean) && !!user
  }, [user])

  return (
    <Suspense fallback={<Loading />}>
      <BrowserRouter>
        <Routes>
          <Route element={<ProtectedRoute isAllowed={!!user && isLogged} />}>
            <Route element={<Home />} index />
            <Route element={<ActivitiesToDo />} path="/activitiestodo" />
          </Route>
          <Route element={<ProtectedRoute isAllowed={!user && !isLogged} redirectTo="/" />}>
            <Route element={<Login />} path="/login" />
            <Route element={<SignUp />} path="/signup" />
          </Route>
          <Route element={<NotFound />} path="*" />
        </Routes>
      </BrowserRouter>
    </Suspense>
  )
}

export default AppRouter
