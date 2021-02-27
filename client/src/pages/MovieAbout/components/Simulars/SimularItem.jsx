import { Link } from 'react-router-dom'
import { imgtypes } from '../../../../api/config'

export const SimularItem = ({ imgSrc, title, releaseDate, id }) => {
  return (
    <li className='mini-card'>
      <Link
        to={`/movie/${id}`}
        className='mini-card-onhover transition opacity-0 hover:opacity-70'
      >
        <div>
          <h4 className='focus-within:text-gray-300 font-medium text-lg text-center'>
            {title}
          </h4>
          <h5 className='text-center'>({releaseDate})</h5>
        </div>
      </Link>
      <img
        className='w-full object-cover'
        src={
          imgSrc
            ? `${imgtypes.md}${imgSrc}`
            : 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.Qw7sWxQNIOY3menRXNLNeQAAAA%26pid%3DApi&f=1'
        }
        alt={title}
      />
    </li>
  )
}
