/* eslint-disable react-hooks/exhaustive-deps */
import { DiscoverCommon } from './DiscoverCommon'
import { useQuery } from '../../hooks/useQuery'
import { useEffect } from 'react'
import { observer } from 'mobx-react-lite'
import { movie } from '../../stores/movie.state'

export const Discover = observer(() => {
  const query = useQuery()

  useEffect(() => {
    const searchQuery = query.get('query')

    if (searchQuery) {
      movie.getMovie(searchQuery, query.get('page') || 1)
    }
  }, [query.get('query'), query.get('page')])
  return (
    <DiscoverCommon movieList={movie.movieList} isLoading={movie.isLoading} />
  )
})
