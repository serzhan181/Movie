import { useEffect } from 'react'

export const ScrollToTopOnMount = () => {
  useEffect(() => {
    window.scroll(0, 0)
  }, [])

  return null
}
