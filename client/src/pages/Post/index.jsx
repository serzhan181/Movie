import { useParams } from 'react-router'
import { posts } from '../../stores/posts.state'
import { auth } from '../../stores/auth.state'
import { observer } from 'mobx-react-lite'
import { useEffect } from 'react'
import { Private } from '../../hoc/Private'
import { PageLoader } from '../../components/PageLoader'
import { Blogs } from '../../components/Blogs'
import { Comments } from './components/Comments'
import { InputComment } from './components/InputComment'

export const Post = observer(() => {
  const { identifier, slug } = useParams()

  useEffect(() => {
    if (identifier && slug) {
      posts.fetchPost(identifier, slug)
    }
  }, [identifier, slug])

  return (
    <>
      {!posts.singlePost ? (
        <PageLoader />
      ) : (
        <div className='flex-center flex-col gap-4 my-4'>
          {/* Actually, only one post will be there. Just was too lazy to make other component for that. KISS ;) */}
          <Blogs showBody={true} vote={posts.vote} posts={[posts.singlePost]} />
          <div className='w-3/5'>
            <Private>
              <InputComment
                {...{ identifier, slug, handleCommentPost: posts.commentPost }}
              />
            </Private>
            <Comments
              {...{
                comments: posts.singlePost?.comments || [],
                currentUser: auth.user,
                deleteComment: posts.deleteComment,
              }}
            />
          </div>
        </div>
      )}
    </>
  )
})
