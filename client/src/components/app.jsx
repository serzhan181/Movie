import './styles/icons'
import { Route, Switch } from 'react-router-dom'
import { Sidebar } from './Sidebar'
import { Home } from './Home'
import { MovieAbout } from './MovieAbout'

export const App = () => {
  return (
    <>
      <Sidebar />
      <div className='content'>
        <Switch>
          <Route component={MovieAbout} path='/movie/:id' />
          <Route component={Home} path='/' />
        </Switch>
      </div>
    </>
  )
}
