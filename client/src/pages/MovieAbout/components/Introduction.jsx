import { Link, useLocation } from 'react-router-dom'
import { imgtypes } from '../../../api/config'
import { Trailer } from './Trailer'

export const Introduction = ({ curMovie }) => {
  const { pathname } = useLocation()
  return (
    <div className='w-full h-screen relative'>
      <div className='absolute inset-0 bg-gradient-to-b from-gray-900 to-black opacity-80'></div>

      <picture>
        <source
          media='(min-width: 650px)'
          srcSet={`${imgtypes.xl}${curMovie?.backdrop_path}`}
        />
        <source
          media='(min-width: 365px)'
          srcSet={`${imgtypes.md}${curMovie?.poster_path}`}
        />
        <img
          className='w-full h-full object-cover'
          src={`${imgtypes.xl}${curMovie?.backdrop_path}`}
          alt={curMovie?.title}
        />
      </picture>

      <div className='absolute left-1/2 w-full transform  -translate-x-1/2 top-14 pl-8 select-none  overflow-hidden opacity-70'>
        <h1 className='text-2xl md:text-7xl opacity-70 font-bold'>
          {curMovie?.title}
        </h1>
        <h4>{curMovie?.genres?.map((g) => g.name).join(', ')}</h4>
      </div>

      <div className='absolute left-1/2 transform -translate-x-1/2 bottom-14 w-min flex flex-wrap gap-2'>
        <Link
          className='btn p-3 focus:bg-secondary hover:bg-primary w-full'
          to={`${pathname}/trailer`}
        >
          TRAILER
        </Link>
        <Trailer ytId={curMovie?.ytId?.key} />

        {curMovie.homepage && (
          <a
            className='btn p-3 focus:bg-secondary hover:bg-primary w-full'
            href={curMovie?.homepage}
            target='__blank'
          >
            HOMEPAGE
          </a>
        )}
      </div>
    </div>
  )
}
