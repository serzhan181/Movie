const tempimg =
  'https://image.tmdb.org/t/p/w200/klZ9hebmc8biG1RC4WmzNFnciJN.jpg'

export const Avatar = ({ size = '50px', src = tempimg }) => {
  return (
    <div
      className='overflow-hidden rounded-full w-max'
      style={{ width: size, objectFit: 'cover' }}
    >
      <img className='h-full w-full object-cover' src={src} alt='user' />
    </div>
  )
}
