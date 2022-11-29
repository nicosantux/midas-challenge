import type { FC } from 'react'

import { RandomActivity, UserInfo } from './components'

import { Footer, Navbar } from '@/components'

const Home: FC = () => {
  return (
    <div className="flex h-full w-[min(1000px,100%)] flex-col gap-4 py-4">
      <Navbar />
      <main className="flex flex-1 flex-col justify-evenly gap-4 rounded bg-gray-50 px-4 py-8 shadow">
        <UserInfo />
        <RandomActivity />
      </main>
      <Footer />
    </div>
  )
}

export default Home
