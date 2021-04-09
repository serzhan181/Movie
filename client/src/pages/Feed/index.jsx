import { observer } from 'mobx-react-lite'
import { posts } from '../../stores/posts.state'
import { Loader } from '../../components/Loader'
import { useEffect } from 'react'
import { Blogs } from '../../components/Blogs'

export const Feed = observer(() => {
  useEffect(() => {
    posts.fetchPosts()
  }, [])

  console.log(posts.posts)

  return (
    <div className='flex-center flex-col gap-4 mb-4'>
      {!posts.isLoading && posts.posts ? (
        <Blogs posts={posts.posts} vote={posts.vote} />
      ) : (
        <Loader height='h-screen' />
      )}
    </div>
  )
})
