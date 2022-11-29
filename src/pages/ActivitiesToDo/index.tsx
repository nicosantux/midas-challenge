import type { FC } from 'react'

import { ActivityList } from './components'

import { Footer, Navbar } from '@/components'

const ActivitiesToDo: FC = () => {
  return (
    <div className="flex h-full w-[min(1000px,100%)] flex-col gap-4 py-4">
      <Navbar />
      <main className="flex flex-1 flex-col gap-4 rounded bg-gray-50 px-4 py-8 shadow">
        <section aria-labelledby="activities-to-do" className="flex h-full flex-col">
          <h2 className="sr-only" id="activities-to-do">
            My activities to do
          </h2>
          <ActivityList />
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default ActivitiesToDo
