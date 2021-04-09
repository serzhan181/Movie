import { useParams } from 'react-router'
import { posts } from '../../stores/posts.state'
import { observer } from 'mobx-react-lite'
import { useEffect } from 'react'
import { Loader } from '../../components/Loader'
import { Blogs } from '../../components/Blogs'
import { Comments } from './components/Comments'

export const Post = observer(() => {
  const { identifier, slug } = useParams()

  useEffect(() => {
    if (identifier && slug) {
      posts.fetchPost(identifier, slug)
    }
  }, [identifier, slug])

  return (
    <>
      {posts.isLoading ? (
        <Loader height='h-screen' />
      ) : (
        <div className='flex-center flex-col gap-4 mb-4'>
          <Blogs showBody={true} vote={posts.vote} posts={[posts.singlePost]} />
          <Comments comments={posts.singlePost?.comments} />
        </div>
      )}
    </>
  )
})
