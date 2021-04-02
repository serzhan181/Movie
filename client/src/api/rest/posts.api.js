import { request } from '../makeRequest'

export const getPosts = () => {
  return request({ url: '/posts', method: 'GET' })
}
