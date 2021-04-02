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
          Released: {diffDate.diff} {diffDate.type} ago
          {'  '}
        </span>
        <span className='text-gray-500 text-sm'>({release_date})</span>
      </div>

      <span>Vote average</span>
      <div className='w-60 lg:w-96 h-4 bg-gray-800 rounded-full mt-3'>
        <div
          ref={setRef}
          style={{ width: `${visible ? vote_average * 10 : 0}%` }}
          className='h-full bg-gradient-to-r transition-all duration-700 from-red-700 to-green-700 text-center text-xs text-white rounded-full'
        >
          {vote_average}
        </div>
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
