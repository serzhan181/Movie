import ReactPlayer from 'react-player/lazy'
import { Route, useRouteMatch } from 'react-router-dom'
import { Dialog } from '../Dialog'
import { Reviews } from './Reviews'

export const Trailer = () => {
  const { url } = useRouteMatch()
  return (
    <Route
      path={`${url}/trailer`}
      children={({ match }) => {
        return (
          <Dialog open={Boolean(match)} className='w-2/3 mt-8'>
            <div className='p-4 bg-primary h-auto rounded-xl'>
              <div className='rounded-xl overflow-hidden h-96'>
                <ReactPlayer
                  url='https://www.youtube.com/watch?v=kGV5V_VIVc8'
                  controls
                  width='100%'
                  height='100%'
                />
              </div>

              <Reviews />
            </div>
          </Dialog>
        )
      }}
    />
  )
}
