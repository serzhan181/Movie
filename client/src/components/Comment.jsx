import { Avatar } from './Avatar'

export const Comment = () => {
  return (
    <>
      <hr className='opacity-70' />
      <div className='my-2 flex gap-2 items-center text-sm'>
        <Avatar />
        <div className='flex flex-col gap-1'>
          <div className='flex justify-between'>
            <h3 className='font-medium'>Joghua Gambington</h3>
            <h3 className='text-gray-400 font-extralight'>10:43PM</h3>
          </div>

          <p className='font-light'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit quas
            dolorum at et, nostrum illo sapiente ipsum facere veritatis nemo.
          </p>
        </div>
      </div>
    </>
  )
}
