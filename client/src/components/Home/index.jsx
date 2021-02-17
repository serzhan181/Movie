import { Categories } from '../Categories'
import { CardsContainer } from '../../containers/CardsContainer'

export const Home = () => {
  return (
    <div className='container'>
      <main className='home'>
        <h1 className='home__title'>Home</h1>
        <Categories />
        <CardsContainer />
      </main>
    </div>
  )
}
