import { observer } from 'mobx-react-lite'
import { MovieAboutContainer } from '../containers/MovieAbout.container'
import { mock } from '../stores/mockData'
import { useDiffDate } from '../hooks/useDiffDate'

export const MovieAbout = observer(() => {
  let { single } = mock

  const diffDate = useDiffDate(single.release_date)

  return single ? (
    <MovieAboutContainer {...{ curMovie: single, diffDate }} />
  ) : (
    <div>Loading...</div>
  )
})
