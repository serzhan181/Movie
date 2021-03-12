import { useEffect } from 'react'
import { observer } from 'mobx-react-lite'
import { Loader } from '../../components/Loader'
import { useParams } from 'react-router-dom'
import { scrollToTop } from '../../helpers/scrollToTop'
import { movie } from '../../stores/movie.state'
import { Detailed, Introduction, Simulars } from './components'
import { useDiffDate } from '../../hooks/useDiffDate'

export const MovieAbout = observer(() => {
  const { id } = useParams()
  useEffect(() => {
    scrollToTop()
    ;(async function () {
      await movie.getSingleMovie(id)
    })()
  }, [id])
  const diffDate = useDiffDate(movie.curMovie?.release_date)

  return !movie.isLoading ? (
    <>
      <Introduction {...{ curMovie: movie.curMovie }} />
      <div className='py-3 px-6'>
        <Detailed {...{ curMovie: movie.curMovie, diffDate }} />
        <Simulars simulars={movie.curMovie?.simulars} />
      </div>
    </>
  ) : (
    <Loader height='h-screen' />
  )
})
