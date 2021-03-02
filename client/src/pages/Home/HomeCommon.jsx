import { Categories } from './components/Categories'
import { Search } from '../../components/Search'
import { Pagination } from '../../components/Pagination'
import { Cards } from '../../components/Cards'
import { Loader } from '../../components/Loader'

export const HomeCommon = ({ movieList, isLoading }) => {
  return (
    <main className='container'>
      <div className='flex justify-between'>
        <h1 className='font-bold text-4xl cursor-default'>Dashboard</h1>
        <Search />
      </div>

      {!isLoading ? (
        <div>
          <Categories />

          <Cards movieList={movieList} />

          <Pagination />
        </div>
      ) : (
        <Loader height='h-80-screen' />
      )}
    </main>
  )
}
