import { useState } from 'react'

export const Categories = () => {
  const [activeId, setActiveId] = useState(null)

  const items = [
    { emoji: '🎞️', label: 'All', id: 1 },
    { emoji: '😂', label: 'Comedy', id: 2 },
    { emoji: '😱', label: 'Thriller', id: 3 },
    { emoji: '👻', label: 'Horror', id: 4 },
    { emoji: '🦄', label: 'Fantasy', id: 5 },
    { emoji: '💔', label: 'Drama', id: 6 },
    { emoji: '🤴', label: 'History', id: 7 },
    { emoji: '💰', label: 'Crime', id: 8 },
    { emoji: '🦊', label: 'Cartoon', id: 9 },
  ]

  return (
    <div className='cats'>
      {items.map((item) => (
        <div
          key={item.id}
          className={`cats__item ${
            activeId === item.id && 'cats__item-active'
          }`}
          onClick={() => setActiveId(item.id)}
        >
          <h1>{item.emoji}</h1>
          <h5>{item.label}</h5>
        </div>
      ))}
    </div>
  )
}
