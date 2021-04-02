import React from 'react'
import {
  Switch,
  Route,
  useRouteMatch,
  Redirect,
  useHistory,
} from 'react-router-dom'
import { AuthCommon } from './AuthCommon'
import { auth } from '../../stores/auth.state'

export const Auth = () => {
  const { path } = useRouteMatch()
  const history = useHistory()

  const onSubmit = async ({ type, setError }, data) => {
    if (type === 'login') {
      const errors = await auth.login(data)
      console.log(errors)
      if (errors && Object.keys(errors)) {
        debugger
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
      console.log(errors)
      if (errors && Object.keys(errors)) {
        Object.keys(errors).forEach((key) => {
          setError(key, {
            type: 'manual',
            message: errors[key].join(', '),
          })
        })

        return
      }
      history.push(`${path}/login`)
    }
  }

  return (
    <Switch>
      <Route
        path={`${path}/login`}
        component={AuthCommon.bind(null, {
          type: 'login',
          onSubmit,
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
}
