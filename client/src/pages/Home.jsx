import { Categories } from '../components/Categories'
import { Cards } from '../components/Cards'
export const Home = () => {
  return (
    <main className='container'>
      <h1 className='font-bold text-4xl cursor-default'>Dashboard</h1>

      <div>
        <Categories />

        <Cards />
      </div>
    </main>
  )
}
