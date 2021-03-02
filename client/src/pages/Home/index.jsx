/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react'
import { observer } from 'mobx-react-lite'
import { movie } from '../../stores/movie.state'
import { HomeCommon } from './HomeCommon'
import { useQuery } from '../../hooks/useQuery'

export const Home = observer(() => {
  const query = useQuery()

  /*
    This will get/set pagination
  */

  useEffect(() => {
    movie.getPopularMovies(query.get('page') || 1)

    if (Boolean(query.get('page'))) {
      movie.setCurrentPage(query.get('page'))
      movie.getPage(query.get('page'))
    }
  }, [query.get('page')])

  /*
    This will get search queries if there is
  */

  useEffect(() => {
    if (query.get('search')) {
      movie.getMovie(query.get('search'))
    }
  }, [query.get('search')])

  return (
    <HomeCommon
      {...{
        isLoading: movie.isLoading,
        movieList: movie.movieList,
      }}
    />
  )
})
