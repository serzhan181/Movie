import { Card } from './Card'

export const CardsCommon = ({ movieList, history }) => {
  return (
    <section className='flex-center'>
      <div className='grid w-full mt-4 md:grid-cols-4 grid-rows-4  2xl:grid-cols-5 lg:grid-cols-4 gap-2 md:gap-4'>
        {movieList?.results?.map((movie) => (
          <Card
            key={movie.id}
            {...{
              id: movie.id,
              image: movie.poster_path,
              subtitle: `${movie.vote_average} ⭐`,
              title: movie.title,
              history,
            }}
          />
        ))}
      </div>
    </section>
  )
}
