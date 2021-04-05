// import { Link } from 'react-router-dom'
import { BlogMeta } from './BlogMeta'
import { ShortDescription } from './ShortDescription'

export const Blog = ({
  title,
  description,
  author_name,
  identifier,
  slug,
  commentCount,
  voteScore,
  createdAt,
  userVote,
  vote,
}) => {
  return (
    <div className='overflow-hidden shadow-lg rounded-lg h-auto w-10/12'>
      <div className='w-full h-full'>
        {/* <Link to={`/feed/${identifier}/${slug}`}>
          <img
            alt='blog'
            src='https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80'
            className='h-104 w-full object-cover'
          />
        </Link> */}
        <div className='bg-primary-light dark:bg-gray-800 w-full px-4 pt-4 pb-2'>
          <ShortDescription {...{ description, title, slug, identifier }} />
          <BlogMeta
            {...{
              author_name,
              commentCount,
              voteScore,
              vote,
              createdAt,
              identifier,
              slug,
              userVote,
            }}
          />
        </div>
      </div>
    </div>
  )
}
