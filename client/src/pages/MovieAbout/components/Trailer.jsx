import ReactPlayer from 'react-player/lazy'
import { Route, useRouteMatch } from 'react-router-dom'
import { Dialog } from '../../../components/Dialog'

export const Trailer = ({ ytId }) => {
  const { url } = useRouteMatch()
  return (
    <Route
      path={`${url}/trailer`}
      children={({ match }) => {
        return (
          <Dialog
            open={Boolean(match)}
            className='sm:w-full md:w-2/3 md:mt-8 overflow-auto'
            centered={true}
          >
            <div className='bg-primary md:rounded-xl'>
              <div className='rounded-xl overflow-hidden h-104'>
                <ReactPlayer
                  url={`https://www.youtube.com/watch?v=${ytId}`}
                  controls
                  width='100%'
                  height='100%'
                />
              </div>
            </div>
          </Dialog>
        )
      }}
    />
  )
}
