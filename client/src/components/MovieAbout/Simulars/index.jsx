import { imgtypes } from '../../../api/movies.api'
import { mock } from '../../../stores/mockData'

export const Simulars = ({ id }) => {
  const { simular } = mock
  return (
    <div className='mt-16'>
      <h2 className='text-xl font-medium'>Relevant Movies:</h2>

      <section className='w-full flex overflow-auto'>
        <ul className='flex gap-2 m-3'>
          {simular.map((s) => (
            <li key={s.id} className='mini-card'>
              <div className='mini-card-onhover transition opacity-0 hover:opacity-70'>
                <div>
                  <h4 className='focus-within:text-gray-300 font-medium text-lg text-center'>
                    {s.title}
                  </h4>
                  <h5 className='text-center'>({s.release_date})</h5>
                </div>
              </div>
              <img
                className='w-full object-cover'
                src={`${imgtypes.md}${s.backdrop_path}`}
                alt={s.title}
              />
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}
