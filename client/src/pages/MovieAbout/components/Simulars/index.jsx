import { SimularItem } from './SimularItem'

export const Simulars = ({ simulars }) => {
  return (
    <div className='mt-16'>
      <h2 className='text-xl font-medium'>Relevant Movies:</h2>

      <section className='w-full flex overflow-auto'>
        <ul className='flex gap-2 m-3'>
          {simulars ? (
            simulars.map((s) => (
              <SimularItem
                key={s.id}
                {...{
                  imgSrc: s.backdrop_path,
                  releaseDate: s.release_date,
                  title: s.title,
                  id: s.id,
                }}
              />
            ))
          ) : (
            <h1 className='text-red-600 font-bold text-xl'>
              No simulars to this movie :(
            </h1>
          )}
        </ul>
      </section>
    </div>
  )
}
