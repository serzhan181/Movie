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

const createPost = ({ title, body }) => {
  return request({
    url: '/posts',
    method: 'POST',
    body: { title, body },
  })
}

const uploadPostImg = ({ formData, postId, slug }) => {
  return request({
    url: `/posts/upload_image/${postId}/${slug}`,
    method: 'POST',
    body: formData,
  })
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
  createPost,
  commentPost,
  deleteComment,
  uploadPostImg,
}
