const items = [
  { emoji: '🎞️', label: 'All', id: '0' },
  { emoji: '😂', label: 'Comedy', id: '35' },
  { emoji: '😱', label: 'Thriller', id: '53' },
  { emoji: '👻', label: 'Horror', id: '27' },
  { emoji: '🦄', label: 'Fantasy', id: '14' },
  { emoji: '💔', label: 'Drama', id: '18' },
  { emoji: '🤴', label: 'History', id: '36' },
  { emoji: '💰', label: 'Crime', id: '80' },
  { emoji: '🦊', label: 'Cartoon', id: '16' },
]

export const CategoriesCommon = ({ activeId, handleGenreSet, isLoading }) => {
  return (
    <div className='mt-6'>
      <ul className='flex gap-3 flex-wrap'>
        {items.map((item) => (
          <li key={item.id} onClick={() => handleGenreSet(item.id)}>
            <button
              className={`btn flex-center flex-col py-5 justify-between h-24 w-20 ${
                activeId === item.id
                  ? 'bg-orange shadow-orange-active'
                  : 'bg-primary-light'
              } ${isLoading && 'disabled:opacity-50'}`}
              disabled={isLoading}
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
