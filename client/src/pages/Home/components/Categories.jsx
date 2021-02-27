import { useState } from 'react'

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

export const Categories = () => {
  const [activeId, setActiveId] = useState(1)

  return (
    <div className='mt-6'>
      <ul className='flex gap-3 flex-wrap'>
        {items.map((item) => (
          <li key={item.id} onClick={() => setActiveId(item.id)}>
            <button
              className={`btn flex-center flex-col py-5 justify-between h-24 w-20 ${
                activeId === item.id
                  ? 'bg-orange shadow-orange-active'
                  : 'bg-primary-light'
              }`}
            >
              <div className='text-2xl'>{item.emoji}</div>
              <div className='text-xs font-light'>{item.label}</div>
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
