import { useHistory } from 'react-router-dom'
import { imageBaseUrl } from '../../api/movies.api'

export const Card = ({ movie }) => {
  const history = useHistory()
  return (
    <div className='card' onClick={() => history.push(`/movie/${movie.id}`)}>
      <div className='onHoverExploreBtn transition'>
        <i className='icons ion-ios-arrow-forward text-4xl'></i>
      </div>
      <img
        className='h-full w-full object-cover object-top'
        src={`${imageBaseUrl}${movie.poster_path}`}
        alt={movie.title}
      />
      <div className='flex flex-col bg-secondary bg-opacity-90 bottom-0 w-full text-center p-4 blurry absolute'>
        <span className='text-lg font-medium'>{movie.title}</span>
        <span className='font-light text-xs'>{movie.release_date}</span>
      </div>
    </div>
  )
}

// {
//   adult: false,
//   backdrop_path: '/srYya1ZlI97Au4jUYAktDe3avyA.jpg',
//   genre_ids: [14, 28, 12],
//   id: 464052,
//   original_language: 'en',
//   original_title: 'Wonder Woman 1984',
//   overview:
//     'Wonder Woman comes into conflict with the Soviet Union during the Cold War in the 1980s and finds a formidable foe by the name of the Cheetah.',
//   popularity: 1927.057,
//   poster_path: '/8UlWHLMpgZm9bx6QYh0NFoq67TZ.jpg',
//   release_date: '2020-12-16',
//   title: 'Wonder Woman 1984',
//   video: false,
//   vote_average: 6.9,
//   vote_count: 3689,
// },
