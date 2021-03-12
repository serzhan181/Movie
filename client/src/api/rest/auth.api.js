import { request } from '../makeRequest'

const register = (data) => {
  console.log(data)
  return request('localhost:5000/auth/register', 'POST', { ...data })
}

export const authAPI = {
  register,
}
