import { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router'
import { observer } from 'mobx-react-lite'
import { Loader } from '../../components/Loader'
import { Blogs } from '../../components/Blogs'
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
    <>
      <div className='flex-center flex-col mb-4'>
        <div className='rounded-full h-52 w-52 relative overflow-hidden'>
          {isOwner && (
            <div className='flex-center flex-col absolute inset-0 h-full opacity-0 hover:opacity-50 transition-opacity bg-black'>
              <span>Change photo</span>
              <button
                className='btn w-32 h-12 opacity-100'
                onClick={openFileInput}
              >
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
            src={user.userInfo?.imageUrl}
            alt={user.userInfo?.username}
            className='h-full w-full object-cover'
          />
        </div>
        <h3 className='text-2xl uppercase font-bold'>
          {user.userInfo?.username}
        </h3>
      </div>

      <div className='flex-center flex-col gap-4 mb-4'>
        {posts.posts.length ? (
          <Blogs vote={posts.vote} posts={posts.posts} />
        ) : (
          <div>
            <span className='text-gray-500'>No posts yet.</span>
          </div>
        )}
      </div>
    </>
  ) : (
    <Loader height='h-screen' />
  )
})
