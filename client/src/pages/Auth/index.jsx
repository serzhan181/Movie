import React from 'react'
import { Switch, Route, useRouteMatch, Redirect } from 'react-router-dom'
import { AuthCommon } from './AuthCommon'

export const Auth = () => {
  const { path } = useRouteMatch()

  const onSubmit = (type, data) => {
    console.log(data)
    console.log(type)
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
