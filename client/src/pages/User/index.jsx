import { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router'
import { observer } from 'mobx-react-lite'
import { Loader } from '../../components/Loader'
import { Blog } from '../../components/Blog'
import { Error } from '../Error'
import { user } from '../../stores/user.state'
import { posts } from '../../stores/posts.state'
import { auth } from '../../stores/auth.state'

export const User = observer(() => {
  const { name } = useParams()

  const [error, setError] = useState(null)
  useEffect(() => {
    ;(async () => {
      if (name) {
        const { error } = await user.fetchUser(name)
        if (error) {
          setError(error)
        }
      }
    })()
  }, [name])

  const [isOwner, setIsOwner] = useState(false)
  useEffect(() => {
    if (auth.user.authenticated) {
      setIsOwner(auth.user.username === user.userInfo?.username)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user.userInfo?.username])

  const fileInputRef = useRef(null)
  const uploadImage = async (e) => {
    const file = e.target.files[0]

    const formData = new FormData()
    formData.append('file', file)

    await user.uploadProfileImage(formData)
  }
  const openFileInput = () => {
    if (!isOwner) return
    fileInputRef.current.click()
  }

  if (error) {
    return <Error message={error} />
  }

  return !user.isLoading ? (
    <div className='my-container'>
      <div className='flex'>
        <div className='rounded-full h-36 w-36 relative overflow-hidden'>
          {isOwner && (
            <div className='flex-center flex-col absolute inset-0 h-full opacity-0 hover:opacity-50 transition-opacity bg-black'>
              <span>Change photo</span>
              <button className='btn w-12 opacity-100' onClick={openFileInput}>
                <i className='icon ion-ios-document'></i>
              </button>
              <input
                className='invisible'
                type='file'
                ref={fileInputRef}
                onChange={uploadImage}
              />
            </div>
          )}
          <img
            src={user.userInfo.imageUrl}
            alt={user.userInfo?.username}
            className='h-full w-full object-cover'
          />
        </div>
        <h3>{user.userInfo?.username}</h3>
      </div>

      <div className='flex-center flex-col gap-4 my-container mb-4'>
        {posts.posts.map((p) => (
          <Blog
            key={p.uuid}
            {...{
              author_name: user.userInfo.username,
              author_avatar: user.userInfo.imageUrl,
              commentCount: p.commentCount,
              createdAt: p.createdAt,
              description: p.body,
              title: p.title,
              identifier: p.identifier,
              slug: p.slug,
              userVote: p?.userVote,
              voteScore: p.voteScore,
              vote: posts.vote,
            }}
          />
        ))}
      </div>
    </div>
  ) : (
    <Loader height='h-screen' />
  )
})
