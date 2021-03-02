import { DialogCommon } from './DialogCommon'
import { useHistory } from 'react-router-dom'

export const Dialog = ({ open, children, className, centered = false }) => {
  const history = useHistory()

  const handleClose = (e) => {
    if (e.target.dataset.overlay) {
      history.goBack()
    }
  }

  return open ? (
    <DialogCommon {...{ centered, children, className, handleClose }} />
  ) : null
}
