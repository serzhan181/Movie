import logo from '../assets/icons/logo.svg'
import { Link, useLocation } from 'react-router-dom'

const sidebarItems = [
  { icon: 'browsers', href: '/', title: 'home', id: 1 },
  { icon: 'contacts', href: '/feed', title: 'feed', id: 2 },
  { icon: 'bookmark', href: '/bookmark', title: 'bookmark', id: 3 },
]

export const Sidebar = () => {
  const { pathname } = useLocation()
  return (
    <aside className='hidden md:block bg-secondary fixed left-0 top-0 h-full w-20 mr-20'>
      <div className='flex items-center flex-col'>
        <Link to='/'>
          <img className='w-10 mt-5' src={logo} alt='logo' />
        </Link>
        <ul className='mt-5'>
          {sidebarItems.map((n) => (
            <Link to={n.href} key={n.id}>
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
    </aside>
  )
}
