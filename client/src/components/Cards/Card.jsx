import { imgtypes } from '../../api/config'

export const Card = ({ id, image, title, subtitle, history }) => {
  return (
    <div className='card' onClick={() => history.push(`/movie/${id}`)}>
      <div className='onHoverExploreBtn transition'>
        <i className='icons ion-ios-arrow-forward text-4xl'></i>
      </div>
      <img
        className='h-full w-2/12 md:w-full object-cover object-top'
        src={`${imgtypes.md}${image}`}
        alt={title}
      />
      <div className='card__description'>
        <span className='text-lg font-medium'>{title}</span>
        <span className='font-light text-xs'>{subtitle}</span>
      </div>
    </div>
  )
}
