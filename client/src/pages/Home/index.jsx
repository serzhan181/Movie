import { useEffect } from 'react'
import { movie } from '../../stores/movie.state'
import { observer } from 'mobx-react-lite'
import { Categories } from './components/Categories'
import { Cards } from '../../components/Cards'

export const Home = observer(() => {
  useEffect(() => {
    movie.getPopularMovies()
  }, [])
  return (
    <main className='container'>
      <h1 className='font-bold text-4xl cursor-default'>Dashboard</h1>

      <div>
        <Categories />

        <Cards movieList={movie?.movieList} />
      </div>
    </main>
  )
})
