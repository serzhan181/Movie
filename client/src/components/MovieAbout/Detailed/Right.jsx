export const Right = ({ tagline, overview }) => {
  return (
    <div className='lg:w-1/2 sm:w-full'>
      <blockquote className='font-light text-lg'>
        &ldquo;{tagline}&rdquo;
      </blockquote>

      <h2 className='text-xl font-medium mt-6'>Overview</h2>
      <span className='block text-left font-light text-sm'>{overview}</span>
    </div>
  )
}
