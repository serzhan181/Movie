/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react'
import { observer } from 'mobx-react-lite'
import { movie } from '../../stores/movie.state'
import { HomeCommon } from './HomeCommon'
import { useQuery } from '../../hooks/useQuery'

export const Home = observer(() => {
  const query = useQuery()

  useEffect(() => {
    movie.getPopularMovies(query.get('page') || 1)
  }, [query.get('page'), query.get('genre')])

  return (
    <HomeCommon
      {...{
        movieList: movie.movieList,
      }}
    />
  )
})
