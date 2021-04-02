import { Switch, Route } from 'react-router-dom'
import { Discover, Home, MovieAbout, Auth, Feed } from './pages'
import { Sidebar } from './components/Sidebar'

export const App = () => {
  return (
    <>
      <Sidebar />

      <main className='main-content'>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/auth' component={Auth} />
          <Route path='/movie/:id' component={MovieAbout} />
          <Route path='/discover' component={Discover} />
          <Route path='/feed' component={Feed} />
        </Switch>
      </main>
    </>
  )
}
