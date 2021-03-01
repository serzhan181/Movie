import { useEffect } from 'react'
import { movie } from '../../stores/movie.state'
import { observer } from 'mobx-react-lite'
import { Categories } from './components/Categories'
import { Search } from '../../components/Search'
import { Cards } from '../../components/Cards'

export const Home = observer(() => {
  useEffect(() => {
    movie.getPopularMovies()
  }, [])
  return (
    <main className='container'>
      <div className='flex justify-between'>
        <h1 className='font-bold text-4xl cursor-default'>Dashboard</h1>
        <Search />
      </div>

      <div>
        <Categories />

        <Cards movieList={movie?.movieList} />
      </div>
    </main>
  )
})
