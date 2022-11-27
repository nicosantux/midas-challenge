import type { User, UserWithPassword } from '@/types'

import { createContext, type ReactNode, type FC, useState, useCallback } from 'react'

interface AuthContextProps {
  user: User | null
  login: (user: User) => void
  logout: () => void
}

export const AuthContext = createContext<AuthContextProps | null>(null)

interface Props {
  children: ReactNode
}

export const AuthProvider: FC<Props> = ({ children }) => {
  const [user, setUser] = useState<User | null>(() => {
    const userFromLocalStorage = window.localStorage.getItem('user')
    const loggedFromLocalStorage = window.localStorage.getItem('logged')

    if (!loggedFromLocalStorage) return null
    if (!userFromLocalStorage) return null

    const isLogged = JSON.parse(loggedFromLocalStorage) as boolean
    const { age, name, lastName, email } = JSON.parse(userFromLocalStorage) as UserWithPassword

    return isLogged ? { age, name, lastName, email } : null
  })

  const login = useCallback((user: User) => {
    setUser(user)
    window.localStorage.setItem('logged', 'true')
  }, [])

  const logout = useCallback(() => {
    setUser(null)
    window.localStorage.setItem('logged', 'false')
  }, [])

  const value = { user, login, logout }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
