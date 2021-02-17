import { useEffect, useState } from 'react'
// import { useParams } from 'react-router-dom'
import { mock } from '../../store/mockData'

export const MovieAbout = () => {
  const [slide, setSlide] = useState(false)

  useEffect(() => setSlide(true), [])

  const { single } = mock
  return (
    <div className='container movie'>
      <div className={`movie__title ${slide && 'movie__title-open'}`}>
        <h2>
          {single.title}{' '}
          <h5
            style={
              single.contentRating === 'PG'
                ? { color: '#25c613' }
                : { color: 'gray' }
            }
          >
            ({single.contentRating})
          </h5>
        </h2>
      </div>

      <div className='movie__about'>
        <div className='movie__about-poster'>
          <img src={single.image} alt={single.title} />
        </div>
      </div>
    </div>
  )
}
