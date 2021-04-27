import { request } from '../makeRequest'

const register = (data) => {
  return request({
    url: '/auth/register',
    method: 'POST',
    body: data,
  })
}

const signin = (data) => {
  return request({
    url: '/auth/login',
    method: 'POST',
    body: data,
  })
}

const me = () => {
  return request({
    url: '/auth/me',
  })
}

const logout = () => {
  return request({
    url: '/auth/logout',
  })
}

export const authAPI = {
  register,
  signin,
  logout,
  me,
}
