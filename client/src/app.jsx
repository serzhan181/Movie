import { Switch, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { MovieAbout } from './pages/MovieAbout'
import { Sidebar } from './components/Sidebar'

export const App = () => {
  return (
    <>
      <Sidebar />

      <main className='main-content'>
        <Switch>
          <Route path='/movie/:id' component={MovieAbout} />
          <Route path='/' component={Home} />
        </Switch>
      </main>
    </>
  )
}
