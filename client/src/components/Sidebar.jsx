import logo from '../assets/icons/logo.svg'

const sidebarItems = [
  { icon: 'browsers', id: 1 },
  { icon: 'contacts', id: 2 },
  { icon: 'bookmark', id: 3 },
]

export const Sidebar = () => {
  return (
    <aside className='sm:hidden md:block bg-secondary fixed left-0 top-0 h-full w-20 mr-20'>
      <div className='flex items-center flex-col'>
        <img className='w-10 mt-5' src={logo} alt='logo' />
        <ul className='mt-5'>
          {sidebarItems.map((n) => (
            <li
              key={n.id}
              className='border-solid border-primary border flex-center h-14 w-14 rounded-3xl mt-2 cursor-pointer'
            >
              <i className={`icon ion-ios-${n.icon} text-primary text-4xl`}></i>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  )
}
