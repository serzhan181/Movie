import { posts } from '../../stores/posts.state'
import { useRef, useState } from 'react'
import { useHistory } from 'react-router'
import { Private } from '../../hoc/Private'

export const CreatePost = () => {
  const [file, setFile] = useState(null)
  const [filename, setFilename] = useState(null)
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  const history = useHistory()

  const fileInputRef = useRef(null)
  const openFileInput = () => fileInputRef.current.click()
  const handlePreviewImg = async (e) => {
    const file = e.target.files[0]

    const formData = new FormData()
    formData.append('post_img', file)

    setFilename(e.target.files[0].name)
    setFile(formData)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!body.trim().length) return
    await posts.createPost({ title, body, file })
    history.replace('/feed')
  }

  return (
    <Private>
      <form
        onSubmit={handleSubmit}
        className='my-container flex-center flex-col'
      >
        <h1 className='text-center text-2xl'>Create your awesome post!</h1>
        <input
          placeholder='title'
          type='text'
          className='mt-4 p-2 outline-none bg-secondary w-9/12'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          className='bg-secondary p-2 w-9/12 mt-2 outline-none'
          placeholder='Hmmm...'
          cols='30'
          rows='10'
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <input
          type='file'
          className='hidden'
          ref={fileInputRef}
          onChange={handlePreviewImg}
        />
        <span className='text-sm mt-2 flex'>
          preview image&#8197;
          <p className='text-gray-500'>{filename ? filename : '(optional)'}</p>
        </span>
        <button
          onClick={openFileInput}
          type='button'
          className='btn bg-secondary hover:bg-primary-light px-3 mt-1'
        >
          {filename ? (
            <i className='icon ion-md-checkmark-circle text-green-500'></i>
          ) : (
            <i className='icon ion-md-image'></i>
          )}
        </button>

        <button
          className='bg-secondary mt-6 p-2 rounded-3xl text-sm hover:bg-primary-light'
          disabled={body.trim().length < 5}
          type='submit'
        >
          Submit <i className='icon ion-md-send'></i>
        </button>
      </form>
    </Private>
  )
}
