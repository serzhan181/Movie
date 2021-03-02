import { observer } from 'mobx-react-lite'
import { movie } from '../stores/movie.state'
import { useHistory } from 'react-router-dom'

export const Pagination = observer(() => {
  const history = useHistory()
  return (
    <div className='flex-center mt-4'>
      <button
        className={`btn p-2 border-2 border-secondary ${
          +movie.movieList?.page < 2 &&
          'bg-transparent text-secondary cursor-not-allowed'
        }`}
        onClick={() => {
          if (+movie.movieList?.page > 1) {
            history.push(`/?page=${movie.movieList?.page - 1}`)
          }
        }}
      >
        Previous page
      </button>
      <span className='mx-3 bg-primary-light border-2 border-secondary rounded-full w-11 h-11 flex-center'>
        {movie.movieList?.page}
      </span>
      <button
        className={`btn p-2 border-2 border-secondary ${
          +movie.movieList?.page === movie.movieList?.total_pages &&
          'bg-transparent text-secondary cursor-not-allowed'
        }`}
        onClick={() => {
          if (0 < +movie.movieList?.page < movie.movieList?.total_pages) {
            history.push(`/?page=${movie.movieList?.page + 1}`)
          }
        }}
      >
        Next page
      </button>
    </div>
  )
})
