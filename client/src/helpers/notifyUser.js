import { Notifier } from './Notifier'

export const notifyUser = ({ type, title, body }) => {
  return <Notifier {...{ type, title, body }} />
}
