import { CardsCommon } from './CardsCommon'
import { useHistory } from 'react-router-dom'

export const Cards = ({ movieList }) => {
  const history = useHistory()
  return <CardsCommon {...{ history, movieList }} />
}
