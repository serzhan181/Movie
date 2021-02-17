import { Cards } from '../components/Cards'
import { mock } from '../store/mockData'

export const CardsContainer = () => {
  const { items } = mock

  return <Cards items={items} />
}
