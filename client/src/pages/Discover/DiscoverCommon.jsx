import { Search } from '../../components/Search'
import { Cards } from '../../components/Cards'
import { PageLoader } from '../../components/PageLoader'
import { Pagination } from '../../components/Pagination'

export const DiscoverCommon = ({ movieList }) => {
  return (
    <div className='container'>
      <div className='flex justify-center'>
        <Search />
      </div>
      {!movieList ? (
        <PageLoader />
      ) : movieList?.results.length ? (
        <>
          <Cards movieList={movieList} />
          <Pagination
            {...{ page: movieList?.page, totalPages: movieList?.total_pages }}
          />
        </>
      ) : (
        <h1 className='text-2xl text-gray-400 h-80-screen flex-center'>
          Couldn't found any movie ;(
        </h1>
      )}
    </div>
  )
}
