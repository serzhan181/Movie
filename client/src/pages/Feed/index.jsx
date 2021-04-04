import { observer } from 'mobx-react-lite'
import { Blog } from './components/Blog'
import { posts } from '../../stores/posts.state'
import { useEffect } from 'react'

export const Feed = observer(() => {
  useEffect(() => {
    posts.fetchPosts()
  }, [])

  return (
    <div className='flex-center flex-col gap-2 my-container'>
      {!posts.isLoading &&
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
            }}
          />
        ))}
    </div>
  )
})
