import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

export const AuthCommon = ({ type, onSubmit }) => {
  const schema = yup.object().shape({
    username: yup.string().required('Email is required.'),
    password: yup
      .string()
      .max(50, 'Too long username.')
      .required('Password is required.')
      .min(6, 'Password should be at least 6 characters long.'),
    email:
      type === 'sign up' &&
      yup.string().required('Email is required.').email('should be an email.'),
  })

  const { register, handleSubmit, errors, setError } = useForm({
    resolver: yupResolver(schema),
  })
  return (
    <form
      className='w-full h-screen flex-center flex-col'
      onSubmit={handleSubmit(onSubmit.bind(null, { type, setError }))}
      autoComplete='off'
    >
      <div className='flex-center flex-col'>
        <div
          className={`bg-red-200 w-96 border-red-600 text-red-600 border-l-4 p-2 mb-2 ${
            Object.keys(errors).length ? 'visible' : 'invisible'
          }`}
          role='alert'
        >
          <p>{errors.username?.message}</p>
          <p>{errors.email?.message}</p>
          <p>{errors.password?.message}</p>
        </div>

        <div className='flex relative w-full mb-4'>
          <span className='rounded-l-md inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm'>
            <i className='icon ion-ios-person'></i>
          </span>
          <input
            ref={register}
            type='text'
            className=' rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent'
            name='username'
            placeholder='Username'
          />
        </div>

        {type === 'sign up' && (
          <div className='flex relative w-full mb-4'>
            <span className='rounded-l-md inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm'>
              <i className='icon ion-ios-mail'></i>
            </span>
            <input
              ref={register}
              type='text'
              className=' rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent'
              name='email'
              placeholder='Email'
            />
          </div>
        )}

        <div className='flex relative w-full mb-2'>
          <span className='rounded-l-md inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm'>
            <i className='icon ion-ios-key'></i>
          </span>
          <input
            ref={register({ minLength: 6, required: true })}
            type='text'
            id='email-with-icon'
            className=' rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent'
            name='password'
            placeholder='Password'
          />
        </div>

        <button
          disabled={Object.keys(errors).length > 0}
          className='btn p-2 text-xl w-24 capitalize disabled:opacity-50'
          type='submit'
        >
          {type}
        </button>
      </div>
    </form>
  )
}
