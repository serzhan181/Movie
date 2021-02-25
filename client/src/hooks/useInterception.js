import { useState, useEffect } from 'react'

/*
  valid options = {
    rootMargin: '160px',
    threshold: 0.9
  }
*/

export const useInterception = (options, once = true) => {
  const [ref, setRef] = useState(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (once) {
        if (!visible) {
          setVisible(entry.isIntersecting)
        }
      } else {
        setVisible(entry.isIntersecting)
      }
    }, options)

    if (ref) {
      observer.observe(ref)
    }

    return () => {
      if (ref) {
        observer.unobserve(ref)
      }
    }
  }, [ref, options, once, visible])

  return [setRef, visible]
}
