import { auth } from '../stores/auth.state'
import { observer } from 'mobx-react-lite'
import { Dialog } from '../components/Dialog'
import { Link } from 'react-router-dom'

export const Private = observer(({ children, strict = false }) => {
  if (!auth.user.authenticated && strict) {
    return (
      <Dialog
        open={true}
        centered={true}
        className='bg-primary-light p-2 rounded'
      >
        <h1>You should be logged in to make this action.</h1>
        <Link to='/auth/login' className='text-blue-500 underline'>
          Log in.
        </Link>
      </Dialog>
    )
  }

  if (auth.user.authenticated) return children
  return null
})
