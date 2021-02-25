import { useHistory } from 'react-router-dom'
import { imgtypes } from '../../api/movies.api'

export const Card = ({ movie }) => {
  const history = useHistory()
  return (
    <div className='card' onClick={() => history.push(`/movie/${movie.id}`)}>
      <div className='onHoverExploreBtn transition'>
        <i className='icons ion-ios-arrow-forward text-4xl'></i>
      </div>
      <img
        className='h-full w-full object-cover object-top'
        src={`${imgtypes.md}${movie.poster_path}`}
        alt={movie.title}
      />
      <div className='flex flex-col bg-secondary bg-opacity-90 bottom-0 w-full text-center py-4 px-2 blurry absolute'>
        <span className='text-lg font-medium'>{movie.title}</span>
        <span className='font-light text-xs'>{movie.release_date}</span>
      </div>
    </div>
  )
}
