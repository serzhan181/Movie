import { Categories } from './components/Categories'
import { Search } from '../../components/Search'
import { Pagination } from '../../components/Pagination'
import { Cards } from '../../components/Cards'
import { PageLoader } from '../../components/PageLoader'

export const HomeCommon = ({ movieList }) => {
  return (
    <main className='flex-center w-full'>
      <div>
        <div className='flex flex-col md:justify-between md:flex-row'>
          <h1 className='font-bold text-4xl cursor-default'>Dashboard</h1>
          <Search />
        </div>

        <Categories isLoading={!movieList} />

        {movieList ? (
          <>
            <Cards movieList={movieList} />

            <Pagination
              {...{ page: movieList?.page, totalPages: movieList?.total_pages }}
            />
          </>
        ) : (
          <PageLoader />
        )}
      </div>
    </main>
  )
}
