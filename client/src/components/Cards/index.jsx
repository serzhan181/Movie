import { Card } from './Card'

export const Cards = ({ items }) => {
  return (
    <div className='cards'>
      {items.map((m) => (
        <Card
          key={m.id}
          id={m.id}
          title={m.title}
          image={m.image}
          year={m.year}
        />
      ))}
    </div>
  )
}

// id, title, image, year
