import { useState } from 'react'

export const InputComment = ({ identifier, slug, handleCommentPost }) => {
  const [value, setValue] = useState('')
  return (
    <div
      className='w-full grid grid-cols-2 mb-8'
      style={{ gridTemplateColumns: '90% 10%' }}
    >
      <textarea
        placeholder='Comment...'
        className='rounded bg-secondary outline-none p-2 max-h-64'
        onChange={(e) => setValue(e.target.value)}
        value={value}
      ></textarea>
      <button
        onClick={() => {
          handleCommentPost({ identifier, slug, body: value })
          setValue('')
        }}
        className='disabled:opacity-50 flex-center outline-none focus:outline-none'
        disabled={value.length < 1}
      >
        <i
          className='icon ion-md-send text-2xl bg-secondary p-3 rounded cursor-pointer hover:bg-primary-light transition'
          title='send'
        ></i>
      </button>
    </div>
  )
}
