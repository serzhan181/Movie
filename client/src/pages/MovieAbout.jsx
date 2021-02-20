import { useState, useEffect, useMemo } from 'react'
import { useParams } from 'react-router-dom'
import { Introduction } from '../components/MovieAbout/Introduction'
import { imageBaseUrl } from '../api/movies.api'
import { observer } from 'mobx-react-lite'
import { movie } from '../stores/movie.store'

export const MovieAbout = observer(() => {
  const [isLoaded, setIsLoaded] = useState(false)
  const { id } = useParams()

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  useMemo(() => {
    movie.getMovie(id).then()
  }, [id])

  let { curMovie } = movie
  return curMovie ? (
    <Introduction {...{ curMovie, imageBaseUrl, isLoaded }} />
  ) : (
    <div>Loading...</div>
  )
})
