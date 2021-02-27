import { useInterception } from '../../../../hooks/useInterception'

export const Left = ({
  vote_average,
  release_date,
  diffDate,
  budget,
  revenue,
}) => {
  const [setRef, visible] = useInterception({ rootMargin: '0px' })

  return (
    <div className='lg:w-1/2 sm:w-full'>
      <div className='mb-6'>
        <span>
          Released: {release_date}
          {'  '}
        </span>
        <span className='text-gray-500 text-sm'>
          {diffDate.diff} {diffDate.type} ago
        </span>
      </div>

      <span>Vote average</span>
      <div className='mt-2 relative sm:w-60 h-8 lg:w-96 lg:h-12 overflow-hidden rounded-3xl border border-solid bg-gray-800'>
        <span className='absolute top-2 left-3 text-gray-300'>
          {vote_average} / 10
        </span>
        <span
          ref={setRef}
          style={{ width: `${visible ? vote_average * 10 : 0}%` }}
          className=' block h-full bg-gradient-to-r transition-all duration-700 from-red-700 to-green-700'
        ></span>
      </div>

      <div className='mt-6'>
        <div className='mb-2'>
          Budget:{' '}
          <span className='bg-green-900 p-0.5 rounded-xl font-light  text-gray-100'>
            {budget}$
          </span>
        </div>
        <div>
          {' '}
          Revenue:{' '}
          <span className='p-0.5 rounded-xl font-light  text-gray-100 bg-green-900'>
            {revenue}${' '}
          </span>
        </div>
      </div>
    </div>
  )
}
