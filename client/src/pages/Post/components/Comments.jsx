import { Link } from 'react-router-dom'

export const Comments = ({ comments }) => {
  return (
    <div className='w-3/5'>
      {comments.map((c) => (
        <div
          key={c.uuid}
          className='overflow-hidden shadow-lg rounded-lg h-auto mb-3'
        >
          <div className='w-full h-full'>
            <div className='bg-primary-light dark:bg-gray-800 px-4 pt-4 pb-2'>
              <Link to={`/user/${c.username}`}>
                <p className='flex gap-2 text-gray-400 dark:text-gray-300 font-medium mb-2'>
                  <img
                    src={c.imageUrl}
                    className='h-8 w-8 object-cover rounded-full'
                    alt={c.username}
                  />
                  {c.username}
                </p>
              </Link>
              <p className='font-light text-sm'>{c.body}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
