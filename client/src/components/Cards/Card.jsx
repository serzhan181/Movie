import { useHistory } from 'react-router-dom'

export const Card = ({ id, title, image, year }) => {
  const history = useHistory()
  return (
    <div className='card' onClick={() => history.push(`/movie/${id}`)}>
      <img
        className='card__img'
        src={image}
        alt='екарный бабай фото'
        title='екарный бабай'
      />
      <div className='card__about'>
        <h3 className='card__about-title'>{title}</h3>
        <p className='card__about-year'>{year}</p>
      </div>
    </div>
  )
}
