import { useEffect } from 'react'
import { createPortal } from 'react-dom'

const modalRoot = document.getElementById('root')

export const Modal = ({ children }) => {
  const el = document.createElement('div')
  useEffect(() => {
    modalRoot.appendChild(el)
    document.body.style.overflow = 'hidden'
    return () => {
      modalRoot.removeChild(el)
      document.body.style.overflow = 'auto'
    }
  }, [el])

  return createPortal(children, el)
}
