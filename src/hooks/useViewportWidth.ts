import { useEffect, useState } from 'react'

export const useViewportWidth = () => {
  const [viewportWidth, setViewportWidth] = useState<number>(window.innerWidth)

  useEffect(() => {
    const handleResize = () => {
      setViewportWidth(window.innerWidth)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return viewportWidth
}
