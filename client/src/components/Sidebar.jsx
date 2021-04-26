import logo from '../assets/icons/logo.svg'
import { Link, useLocation } from 'react-router-dom'
import { auth } from '../stores/auth.state'
import { observer } from 'mobx-react-lite'
import { useState } from 'react'

const sidebarItems = [
  { icon: 'browsers', href: '/', title: 'home', id: 1 },
  { icon: 'contacts', href: '/feed', title: 'feed', id: 2 },
]

export const Sidebar = observer(() => {
  const { pathname } = useLocation()

  const [sidebarOpen, setSidebarOpen] = useState(false)
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen)
  }

  const logout = () => {
    auth.logout().then(() => {
      window.location.reload()
    })
  }
  return (
    <>
      <aside
        className={`${
          !sidebarOpen ? '-translate-x-full md:translate-x-0' : ''
        } transform transition-transform block bg-secondary fixed left-0 top-0 h-full w-20 mr-20 z-50`}
      >
        <div className='flex flex-col items-center justify-between h-full'>
          <div className='flex items-center flex-col'>
            <Link to='/'>
              <img className='w-10 mt-5' src={logo} alt='logo' />
            </Link>
            <ul className='mt-5'>
              {sidebarItems.map((n) => (
                <Link
                  className='outline-none'
                  to={n.href}
                  key={n.id}
                  title={n.title}
                >
                  <li
                    className={`border-solid border-primary ${
                      n.href === pathname && 'bg-primary-light'
                    } ${
                      n.href !== pathname &&
                      'transform hover:scale-105 transition-transform'
                    } border flex-center h-14 w-14 rounded-3xl mt-2 cursor-pointer`}
                  >
                    <i
                      className={`icon ion-ios-${n.icon} text-primary text-4xl`}
                    ></i>
                  </li>
                </Link>
              ))}
            </ul>
          </div>
          {auth.user.authenticated ? (
            <div>
              <Link
                to={`/user/${auth.user.username}`}
                className='border-primary border flex-center h-14 w-14 rounded-3xl mb-2 cursor-pointer overflow-hidden'
                title={auth.user.username}
              >
                <img
                  src={auth.user.imageUrl}
                  alt={auth.user.username}
                  className='h-full w-full object-cover'
                />
              </Link>
              <Link
                to='/feed/create_post'
                className='border-green-500 border flex-center h-14 w-14 rounded-3xl mb-2 cursor-pointer'
                title='create post'
              >
                <i className='icon ion-ios-add-circle-outline text-green-500 text-4xl'></i>
              </Link>
              <div
                className='border-red-600 border flex-center h-14 w-14 rounded-3xl mb-2 cursor-pointer'
                title='logout'
                onClick={logout}
              >
                <i className='icon ion-ios-power text-red-600 text-4xl'></i>
              </div>
            </div>
          ) : (
            <div>
              <Link
                to='/auth/login'
                className='border-green-600 border text-green-600 font-light flex-center h-14 w-14 rounded-3xl mb-2 cursor-pointer'
                title='log in'
              >
                LOGIN
              </Link>
              <Link
                to='/auth/signup'
                className='border-yellow-300 border text-yellow-300 text-sm font-light flex-center h-14 w-14 rounded-3xl mb-2 cursor-pointer'
                title='sign up'
              >
                SIGN UP
              </Link>
            </div>
          )}
        </div>
      </aside>
      <div
        className='md:hidden flex-center z-50 rounded fixed bottom-2 right-2 w-10 h-10 bg-secondary border border-white cursor-pointer'
        onClick={toggleSidebar}
      >
        <i className='icon ion-md-menu text-4xl'></i>
      </div>
    </>
  )
})
