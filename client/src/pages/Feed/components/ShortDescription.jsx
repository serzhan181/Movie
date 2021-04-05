import { Link } from 'react-router-dom'

export const ShortDescription = ({ identifier, slug, title, description }) => {
  return (
    <>
      <Link to={`/feed/${identifier}/${slug}`}>
        <p className='dark:text-white text-xl font-medium mb-2'>{title}</p>
      </Link>
      <p className='text-gray-400 dark:text-gray-300 font-light text-sm'>
        {description}
      </p>
    </>
  )
}
