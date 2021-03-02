import { Card } from './Card'

export const CardsCommon = ({ movieList, history }) => {
  return (
    <section className='grid sm:w-full w-max mt-4 md:grid-cols-3 lg:grid-cols-5 gap-2'>
      {movieList.results?.map((movie) => (
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
    </section>
  )
}
