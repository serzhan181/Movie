import { request } from '../makeRequest'

const register = (data) => {
  return request({
    url: 'http://localhost:5000/auth/register',
    method: 'POST',
    body: data,
  })
}

export const authAPI = {
  register,
}
