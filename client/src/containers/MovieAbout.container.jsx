import React from 'react'
// import { Switch, Route, useRouteMatch } from 'react-router-dom'
import { ScrollToTopOnMount } from '../helpers/ScrollToTopOnMount'
import { Introduction, Detailed, Simulars } from '../components/MovieAbout'

export const MovieAboutContainer = ({ curMovie, isPaidOff, diffDate }) => {
  return (
    <>
      <ScrollToTopOnMount />
      <Introduction {...{ curMovie }} />
      <div className='container'>
        <Detailed {...{ curMovie, isPaidOff, diffDate }} />
        <Simulars />
      </div>
    </>
  )
}
