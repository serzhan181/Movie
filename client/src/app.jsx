import { Switch, Route } from 'react-router-dom'
import {
  Discover,
  Home,
  MovieAbout,
  Auth,
  Feed,
  Post,
  User,
  Error,
} from './pages'
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
          <Route path='/feed/:identifier/:slug' component={Post} />
          <Route path='/feed' component={Feed} />
          <Route path='/user/:name' component={User} />
          <Route path='*' component={Error} />
        </Switch>
      </main>
    </>
  )
}
