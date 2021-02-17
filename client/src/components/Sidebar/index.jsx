import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Sidebar = () => {
  const sidebarItems = [
    { icon: 'th-large', id: 1 },
    { icon: 'users', id: 2 },
    { icon: 'bookmark', id: 3 },
  ]

  const [activeId, setActiveId] = useState(0)

  return (
    <aside className='sidebar'>
      <ul className='sidebar__list'>
        <img
          src='images/logo.svg'
          alt='logo'
          title='logo'
          className='sidebar__logo'
        />
        {sidebarItems.map((n) => (
          <li
            className={`sidebar__item ${
              activeId === n.id && 'sidebar__item-active'
            }`}
            onClick={() => setActiveId(n.id)}
            key={n.id}
          >
            <FontAwesomeIcon icon={n.icon} size='2x' />
          </li>
        ))}
      </ul>
    </aside>
  )
}
