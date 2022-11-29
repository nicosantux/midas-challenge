import { FC, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { HiMenu } from 'react-icons/hi'
import { IoMdClose } from 'react-icons/io'

import { Button, Link } from '..'

import { useAuth, useViewportWidth } from '@/hooks'

const navigationLinks = [
  {
    id: 1,
    path: '/',
    label: 'Home',
  },
  {
    id: 2,
    path: '/activitiestodo',
    label: 'My activities',
  },
]

export const Navbar: FC = () => {
  const { logout } = useAuth()
  const navigate = useNavigate()

  const viewportWidth = useViewportWidth()

  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(viewportWidth > 640)

  const toggleMenu = () => setIsMenuOpen((state) => !state)

  useEffect(() => {
    setIsMenuOpen(viewportWidth > 640)
  }, [viewportWidth])

  const handleLogout = () => {
    logout()
    navigate('/login')
  }

  return (
    <header className="tablet:flex-row-reverse relative flex items-center justify-between rounded bg-gray-50 p-4 shadow">
      <Button
        aria-controls="header-navigation"
        aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        className="tablet:hidden p-2 text-xl"
        onClick={toggleMenu}
        variant="gray"
      >
        {isMenuOpen ? <IoMdClose /> : <HiMenu />}
      </Button>
      {isMenuOpen && (
        <nav
          aria-label="Primary Navigation"
          className="tablet:flex tablet:flex-row tablet:relative tablet:inset-0 tablet:p-0 tablet:w-auto tablet:shadow-none tablet:items-center absolute top-[75px] left-0 flex w-full flex-col gap-8 rounded bg-gray-50 p-4 shadow-md"
          id="header-navigation"
        >
          <ul className="tablet:flex-row flex flex-col items-center gap-8" role="list">
            {navigationLinks.map((navLink) => (
              <li className="" key={navLink.id}>
                <Link className="block px-4 text-gray-900 hover:underline" to={navLink.path}>
                  {navLink.label}
                </Link>
              </li>
            ))}
          </ul>
          <Button aria-controls="header-navigation" onClick={handleLogout} variant="secondary">
            Logout
          </Button>
        </nav>
      )}
      <h1 className="text-primary-700 text-xl font-bold">Do Something!</h1>
    </header>
  )
}
