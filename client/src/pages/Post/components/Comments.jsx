import { Link } from 'react-router-dom'

export const Comments = ({ comments, currentUser, deleteComment }) => {
  return (
    <div id='comments'>
      {comments.map((c) => (
        <div
          key={c.uuid}
          className='overflow-hidden shadow-lg rounded-lg h-auto mb-3'
        >
          <div className='w-full h-full'>
            <div className='bg-primary-light p-3'>
              <div className='flex justify-between'>
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
                {c.username === currentUser?.username && (
                  <i
                    className='icon ion-md-trash text-xl cursor-pointer hover:text-red-500'
                    onClick={() => deleteComment({ commentId: c.identifier })}
                  ></i>
                )}
              </div>
              <p className='font-light text-sm'>{c.body}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
