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

const commentPost = ({ identifier, slug, body }) => {
  return request({
    url: `/posts/${identifier}/${slug}/comments`,
    method: 'POST',
    body: { body },
  })
}

const deleteComment = ({ postId, slug, commentId }) => {
  return request({
    url: `/posts/${postId}/${slug}/${commentId}`,
    method: 'DELETE',
  })
}

export const postsAPI = {
  getPosts,
  getPost,
  getPostComments,
  vote,
  commentPost,
  deleteComment,
}
