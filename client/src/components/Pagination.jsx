import { addQuery } from '../helpers/addQuery'
import { useHistory } from 'react-router-dom'

export const Pagination = ({ page, totalPages }) => {
  const history = useHistory()

  return (
    <div className='flex-center mt-4'>
      <button
        className={`btn p-2 border-2 border-secondary ${
          +page < 2 && 'bg-transparent text-secondary cursor-not-allowed'
        }`}
        onClick={() => {
          if (+page > 1) {
            history.push({
              search: addQuery('page', page - 1),
            })
          }
        }}
      >
        Previous page
      </button>
      <span className='mx-3 bg-primary-light border-2 border-secondary rounded-full w-11 h-11 flex-center'>
        {page}
      </span>
      <button
        className={`btn p-2 border-2 border-secondary ${
          +page === totalPages &&
          'bg-transparent text-secondary cursor-not-allowed'
        }`}
        onClick={() => {
          if (0 < +page < totalPages) {
            history.push({
              search: addQuery('page', page + 1),
            })
          }
        }}
      >
        Next page
      </button>
    </div>
  )
}
