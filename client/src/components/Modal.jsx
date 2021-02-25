import { useEffect } from 'react'
import { createPortal } from 'react-dom'

const modalRoot = document.getElementById('root')

export const Modal = ({ children }) => {
  const el = document.createElement('div')
  useEffect(() => {
    modalRoot.appendChild(el)

    return () => {
      modalRoot.removeChild(el)
    }
  }, [el])

  return createPortal(children, el)
}
