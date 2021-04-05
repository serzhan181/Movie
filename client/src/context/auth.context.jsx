import { createContext, useEffect } from 'react'
import { auth } from '../stores/auth.state'

const AuthContext = createContext(null)

export const AuthProvider = ({ children }) => {
  useEffect(() => {
    async function fetch() {
      await auth.me()
    }

    fetch()
  }, [])

  return (
    <AuthContext.Provider value={auth.user}>{children}</AuthContext.Provider>
  )
}
