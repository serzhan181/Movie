import errorImg from './404.jpg'

export const Error = ({ message = "You're alone here" }) => {
  return (
    <div className='bg-primary relative overflow-hidden w-full h-screen'>
      <img
        src={errorImg}
        className='absolute h-full w-full object-cover'
        alt='error404'
      />
      <div className='inset-0 bg-black opacity-25 absolute'></div>
      <div className='container mx-auto px-6 md:px-12 relative z-10 flex items-center py-32 xl:py-40'>
        <div className='w-full font-mono flex flex-col items-center relative z-10'>
          <h1 className='font-extrabold text-5xl text-center text-white leading-tight mt-4'>
            {message}
          </h1>
          <p className='font-extrabold text-8xl my-44 text-white animate-bounce'>
            404
          </p>
        </div>
      </div>
    </div>
  )
}
