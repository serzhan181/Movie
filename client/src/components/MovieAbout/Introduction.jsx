export const Introduction = ({ curMovie, imageBaseUrl, isLoaded }) => {
  return (
    <div className='w-full h-screen relative'>
      <div className='absolute inset-0 bg-gradient-to-b from-gray-900 to-black opacity-80'></div>
      <img
        className='w-full h-full object-cover'
        src={`${imageBaseUrl}${curMovie.backdrop_path}`}
        alt={curMovie.title}
      />
      <div className='absolute left-1/2 w-full transform -translate-x-1/2 top-14 pl-8 select-none  overflow-hidden opacity-70'>
        <h1
          className={`transform transition duration-500 text-2xl md:text-7xl opacity-70 font-bold mb-3 ${
            isLoaded ? 'translate-x-0 delay-500' : '-translate-x-full'
          }`}
        >
          {curMovie.title}
        </h1>
        <h4>{curMovie.genres.map((g) => g.name).join(', ')}</h4>
      </div>

      <div className='absolute left-1/2 transform -translate-x-1/2 bottom-14 w-min flex flex-wrap gap-2'>
        <button className='btn p-3 focus:bg-secondary hover:bg-primary w-full uppercase'>
          trailer
        </button>

        <a
          className='btn p-3 focus:bg-secondary hover:bg-primary w-full uppercase'
          href={curMovie.homepage}
          target='__blank'
        >
          homepage
        </a>
      </div>
    </div>
  )
}
