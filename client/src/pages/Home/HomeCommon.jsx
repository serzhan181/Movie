import { Categories } from './components/Categories'
import { Search } from '../../components/Search'
import { Pagination } from '../../components/Pagination'
import { Cards } from '../../components/Cards'
import { Loader } from '../../components/Loader'

export const HomeCommon = ({ movieList, isLoading }) => {
  return (
    <main className='flex-center'>
      <div>
        <div className='flex flex-col md:justify-between md:flex-row'>
          <h1 className='font-bold text-4xl cursor-default'>Dashboard</h1>
          <Search />
        </div>

        <Categories isLoading={isLoading} />

        {!isLoading ? (
          <>
            <Cards movieList={movieList} />

            <Pagination
              {...{ page: movieList?.page, totalPages: movieList?.total_pages }}
            />
          </>
        ) : (
          <Loader height='h-80-screen' />
        )}
      </div>
    </main>
  )
}
