import { Modal } from '../Modal'

export const DialogCommon = ({
  handleClose,
  centered,
  className,
  children,
}) => {
  return (
    <Modal>
      <div
        onClick={handleClose}
        className={`fixed flex justify-center inset-0 bg-black bg-opacity-70 ${
          centered && 'items-center'
        }`}
        data-overlay={true}
      >
        <div className={className}>{children}</div>
      </div>
    </Modal>
  )
}
