import { config } from './config'
import axios from 'axios'

const instanceTMDB = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  headers: {
    Authorization: `Bearer ${config.THEMOVIEDB_TOKEN}`,

    'Content-Type': 'application/json;charset=utf-8',
  },
})

export const requestTMDB = (url, method = 'GET', params = {}, headers = {}) => {
  return instanceTMDB({
    url,
    method,
    params,
    headers,
  })
}

export const request = (url, method = 'GET', params = {}) => {
  return axios({ url, method, params })
}
