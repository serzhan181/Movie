import { Link } from 'react-router-dom'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'

dayjs.extend(relativeTime)

export const BlogMeta = ({
  author_name,
  commentCount,
  voteScore,
  createdAt,
  vote,
  identifier,
  slug,
  userVote,
}) => {
  return (
    <div className='flex items-center justify-between mt-4'>
      <Link to={`/profile/${author_name}`} className='flex'>
        <img
          alt='profil'
          src={`https://fakeimg.pl/350x200/?text=${author_name[0]}&font=Poppins&retina=1`}
          className='object-cover rounded-full h-8 w-8 '
        />
        <div className='flex flex-col justify-between ml-4 text-xs'>
          <p className='text-gray-300 dark:text-white'>{author_name}</p>
          <p className='text-gray-400 dark:text-gray-300'>
            {dayjs(createdAt).fromNow()}
          </p>
        </div>
      </Link>

      <div className='flex items-center transition hover:bg-secondary h-full px-2 cursor-pointer'>
        <i className={`icon ion-ios-text text-gray-300 text-2xl mr-2`}></i>
        <p>
          {commentCount} {commentCount > 1 ? 'Comments' : 'Comment'}
        </p>
      </div>

      <div className='flex'>
        <div className='mr-6 h-full'>
          <i
            onClick={() => vote({ identifier, slug, value: 1 })}
            className={`icon ion-ios-arrow-up transition text-gray-400 text-2xl cursor-pointer mr-2 hover:bg-gray-300 ${
              userVote !== 1 && 'hover:text-blue-500'
            } px-2 ${userVote === 1 && 'text-red-500 bg-gray-300'}`}
          ></i>
          <i
            onClick={() => vote({ identifier, slug, value: -1 })}
            className={`icon ion-ios-arrow-down transition text-gray-400 text-2xl cursor-pointer hover:bg-gray-300 ${
              userVote !== -1 && 'hover:text-red-500'
            } px-2 ${userVote === -1 && 'text-blue-500 bg-gray-300'}`}
          ></i>
        </div>

        <p
          className={`${
            voteScore > 0
              ? 'text-green-600'
              : voteScore < 0
              ? 'text-red-600'
              : 'text-yellow-500'
          } text-2xl font-semibold cursor-default`}
        >
          {voteScore}
        </p>
      </div>
    </div>
  )
}
