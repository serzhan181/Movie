import { Comment } from '../Comment'
const arr = [
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 4 },
  { id: 5 },
  { id: 6 },
  { id: 7 },
  { id: 8 },
  { id: 9 },
  { id: 10 },
]
export const Reviews = () => {
  return (
    <section className='mt-4 overflow-auto text-gray-200'>
      {arr.map((c) => (
        <Comment key={c.id} />
      ))}
    </section>
  )
}
