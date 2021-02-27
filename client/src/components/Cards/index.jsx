import { Card } from './Card'

export const Cards = ({ movieList }) => {
  return (
    <section className='grid sm:w-full w-max mt-4 md:grid-cols-3 lg:grid-cols-5 gap-2'>
      {movieList.results?.map((movie) => (
        <Card key={movie.id} movie={movie} />
      ))}
    </section>
  )
}
