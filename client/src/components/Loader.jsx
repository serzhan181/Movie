import { Centerer } from './Centerer'
import loader from '../assets/icons/loader.svg'

export const Loader = ({ height }) => (
  <Centerer height={height}>
    <img src={loader} alt='loading' />
  </Centerer>
)
