import loader from '../assets/icons/loader.svg'

export const PageLoader = () => (
  <div className='w-full h-80-screen flex-center z-50 pointer-events-none'>
    <img src={loader} alt='loading' />
  </div>
)
