import { request } from '../makeRequest'

const getPosts = () => {
  return request({ url: '/posts', method: 'GET' })
}

const vote = ({ identifier, slug, value }) => {
  return request({
    url: '/misc/vote',
    method: 'POST',
    body: { identifier, slug, value },
  })
}

export const postsAPI = {
  getPosts,
  vote,
}
