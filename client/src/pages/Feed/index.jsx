import { observer } from 'mobx-react-lite'
import { Blog } from './components/Blog'
import { posts } from '../../stores/posts.state'
import { Loader } from '../../components/Loader'
import { useEffect } from 'react'

export const Feed = observer(() => {
  useEffect(() => {
    posts.fetchPosts()
  }, [])

  const vote = ({ identifier, slug, value }) => {
    posts.vote({ identifier, slug, value })
  }

  return (
    <div className='flex-center flex-col gap-4 my-container mb-4'>
      {!posts.isLoading ? (
        posts.posts.map((p) => (
          <Blog
            key={p.uuid}
            {...{
              author_name: p.user.username,
              description: p.body,
              title: p.title,
              identifier: p.identifier,
              slug: p.slug,
              commentCount: p.commentCount,
              voteScore: p.voteScore,
              createdAt: p.createdAt,
              userVote: p?.userVote,
              vote,
            }}
          />
        ))
      ) : (
        <Loader height='h-screen' />
      )}
    </div>
  )
})
