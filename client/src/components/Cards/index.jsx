import { mock } from '../../stores/mockData.js'
import { Card } from './Card'

export const Cards = () => {
  const { items } = mock
  return (
    <section className='grid w-max sm:grid-cols-2 mt-4 md:grid-cols-3 lg:grid-cols-5 gap-2'>
      {items.map((movie) => (
        <Card key={movie.id} movie={movie} />
      ))}
    </section>
  )
}
