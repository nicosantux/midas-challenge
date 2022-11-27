import type { FC } from 'react'

import { useNavigate } from 'react-router-dom'

import { useAuth } from '@/hooks'

const Home: FC = () => {
  const { logout } = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/login', { replace: true })
  }

  return (
    <div>
      Home Page
      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Home
