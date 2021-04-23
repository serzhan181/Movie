// import { Link } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { BlogMeta } from './BlogMeta'
import { Body } from './Body'

export const Blog = ({
  title,
  description,
  author_name,
  author_avatar,
  identifier,
  slug,
  commentCount,
  voteScore,
  createdAt,
  userVote,
  postImg,
  vote,
}) => {
  return (
    <div className='overflow-hidden shadow-lg rounded-lg h-auto w-10/12'>
      <div className='w-full h-full'>
        {postImg && (
          <Link to={`/feed/${identifier}/${slug}`}>
            <img
              alt='blog'
              src={postImg}
              className='h-56 w-full object-cover'
            />
          </Link>
        )}
        <div className='bg-primary-light dark:bg-gray-800 w-full px-4 pt-4 pb-2'>
          <Body {...{ description, title, slug, identifier }} />
          <BlogMeta
            {...{
              author_name,
              author_avatar,
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
