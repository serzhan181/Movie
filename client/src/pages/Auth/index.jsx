import React from 'react'
import { Switch, Route, useRouteMatch, Redirect } from 'react-router-dom'
import { AuthCommon } from './AuthCommon'
import { auth } from '../../stores/auth.state'

export const Auth = () => {
  const { path } = useRouteMatch()

  const onSubmit = async (type, data) => {
    await auth.register(data)
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
