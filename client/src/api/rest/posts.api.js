import { request } from '../makeRequest'

const getPost = (identifier, slug) => {
  return request({ url: `/posts/${identifier}/${slug}` })
}

const getPostComments = (identifier, slug) => {
  return request({ url: `/posts/${identifier}/${slug}/comments` })
}

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
  getPost,
  getPostComments,
  vote,
}
