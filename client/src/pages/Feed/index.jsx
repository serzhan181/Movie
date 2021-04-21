import { observer } from 'mobx-react-lite'
import { posts } from '../../stores/posts.state'
import { PageLoader } from '../../components/PageLoader'
import { useEffect } from 'react'
import { Blogs } from '../../components/Blogs'

export const Feed = observer(() => {
  useEffect(() => {
    posts.fetchPosts()
  }, [])

  return (
    <div className='my-container flex-center flex-col gap-4'>
      {posts.posts.length ? (
        <Blogs posts={posts.posts} vote={posts.vote} />
      ) : (
        <PageLoader />
      )}
    </div>
  )
})
