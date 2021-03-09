import { Switch, Route } from 'react-router-dom'
import { Discover, Home, MovieAbout } from './pages'
import { Sidebar } from './components/Sidebar'

export const App = () => {
  return (
    <>
      <Sidebar />

      <main className='main-content'>
        <Switch>
          <Route path='/movie/:id' component={MovieAbout} />
          <Route path='/discover' component={Discover} />
          <Route path='/' component={Home} />
        </Switch>
      </main>
    </>
  )
}
