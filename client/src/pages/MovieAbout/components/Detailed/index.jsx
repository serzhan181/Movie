import { Left } from './Left'
import { Right } from './Right'

export const Detailed = ({ curMovie, diffDate }) => {
  return (
    <div className='w-full sm:block lg:flex lg:justify-between lg:items-center flex-wrap'>
      <Left
        {...{
          budget: curMovie?.budget,
          release_date: curMovie?.release_date,
          revenue: curMovie?.revenue,
          vote_average: curMovie?.vote_average,
        }}
      />
      <Right
        {...{ overview: curMovie?.overview, tagline: curMovie?.tagline }}
      />
    </div>
  )
}
