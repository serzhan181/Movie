import { Link } from 'react-router-dom'

export const Blog = ({ title, description, author_name, identifier, slug }) => {
  return (
    <div className='overflow-hidden shadow-lg rounded-lg h-auto w-10/12'>
      <div className='w-full h-full'>
        <Link to={`/feed/${identifier}/${slug}`}>
          <img
            alt='blog'
            src='https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80'
            className='h-104 w-full object-cover'
          />
        </Link>
        <div className='bg-primary-light dark:bg-gray-800 w-full p-4'>
          <Link to={`/feed/${identifier}/${slug}`}>
            <p className='dark:text-white text-xl font-medium mb-2'>{title}</p>
          </Link>
          <p className='text-gray-400 dark:text-gray-300 font-light text-sm'>
            {description}
          </p>
          <div className='flex items-center mt-4'>
            <Link to={`/profile/${author_name}`} className='block relative'>
              <img
                alt='profil'
                src='https://images.unsplash.com/photo-1583071299210-c6c113f4ac91?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=332&q=80'
                className='mx-auto object-cover rounded-full h-8 w-8 '
              />
            </Link>
            <div className='flex flex-col justify-between ml-4 text-xs'>
              <p className='text-gray-300 dark:text-white'>{author_name}</p>
              <p className='text-gray-400 dark:text-gray-300'>
                20 mars 2029 - 6 min read
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
