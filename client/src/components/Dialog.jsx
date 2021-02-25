import { useHistory } from 'react-router-dom'
import { Modal } from './Modal'

export const Dialog = ({ children, open, className }) => {
  const history = useHistory()

  const handleClose = (e) => {
    if (e.target.dataset.overlay) {
      history.goBack()
    }
  }

  return open ? (
    <Modal>
      <div
        onClick={handleClose}
        className='fixed flex justify-center inset-0 bg-black bg-opacity-70'
        data-overlay={true}
      >
        <div className={className}>{children}</div>
      </div>
    </Modal>
  ) : null
}
