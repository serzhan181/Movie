import { request } from '../makeRequest'

const getUser = (username) => {
  return request({ url: `/user/${username}` })
}

const uploadProfileImage = (username, formData) => {
  return request({
    url: `/user/${username}/image`,
    method: 'POST',
    body: formData,
    headers: { 'Content-Type': 'multipart/form-data' },
  })
}

export const userAPI = { getUser, uploadProfileImage }
