import { auth } from '../stores/auth.state'
import { Dialog } from '../components/Dialog'
import { Link } from 'react-router-dom'

export function Private({ children, strict = false }) {
  if (!auth.user.authenticated && strict) {
    return (
      <Dialog open={true} centered={true}>
        <h1>You should be logged in to make this action.</h1>
        <Link to='/auth/login'>Log in.</Link>
      </Dialog>
    )
  }

  if (!auth.user.authenticated) return null
  return children
}
