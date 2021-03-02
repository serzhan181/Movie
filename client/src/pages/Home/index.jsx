import { useEffect } from 'react'
import { observer } from 'mobx-react-lite'
import { movie } from '../../stores/movie.state'
import { HomeCommon } from './HomeCommon'
import { useQuery } from '../../hooks/useQuery'

export const Home = observer(() => {
  const query = useQuery()

  useEffect(() => {
    movie.getPopularMovies(query.get('page') || 1)

    if (Boolean(query.get('page'))) {
      movie.setCurrentPage(query.get('page'))
      movie.getPage(query.get('page'))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query.get('page')])

  return (
    <HomeCommon
      {...{
        isLoading: movie.isLoading,
        movieList: movie?.movieList,
      }}
    />
  )
})
