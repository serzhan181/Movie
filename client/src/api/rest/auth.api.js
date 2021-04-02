import { request } from '../makeRequest'

const register = (data) => {
  return request({
    url: '/auth/register',
    method: 'POST',
    body: data,
  })
}

const login = (data) => {
  return request({
    url: '/auth/login',
    method: 'POST',
    body: data,
  })
}

export const authAPI = {
  register,
  login,
}
