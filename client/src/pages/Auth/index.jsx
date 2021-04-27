import {
  Switch,
  Route,
  useRouteMatch,
  Redirect,
  useHistory,
} from 'react-router-dom'
import { observer } from 'mobx-react-lite'
import { AuthCommon } from './AuthCommon'
import { auth } from '../../stores/auth.state'

export const Auth = observer(() => {
  if (auth.user.authenticated) {
    return <Redirect to='/' />
  }
  const { path } = useRouteMatch()
  const history = useHistory()

  const handleDemo = async () => {
    const errors = await auth.login({ username: 'demo', password: '123456' })
    if (!errors) {
      history.push('/')
    }
  }

  const onSubmit = async ({ type, setError }, data) => {
    if (type === 'sign in') {
      const errors = await auth.login(data)
      if (errors && Object.keys(errors)) {
        Object.keys(errors).forEach((key) => {
          setError(key, {
            type: 'manual',
            message: errors[key].join(', '),
          })
        })

        return
      }
      history.push('/')
    }

    if (type === 'sign up') {
      const errors = await auth.register(data)
      if (errors && Object.keys(errors)) {
        Object.keys(errors).forEach((key) => {
          setError(key, {
            type: 'manual',
            message: errors[key].join(', '),
          })
        })

        return
      }
      history.push(`${path}/sign_in`)
    }
  }

  return (
    <Switch>
      <Route
        path={`${path}/sign_in`}
        component={AuthCommon.bind(null, {
          type: 'sign in',
          onSubmit,
          handleDemo,
        })}
        exact
      />
      <Route
        path={`${path}/signup`}
        component={AuthCommon.bind(null, {
          type: 'sign up',
          onSubmit,
        })}
        exact
      />
      <Redirect to='/' />
    </Switch>
  )
})
