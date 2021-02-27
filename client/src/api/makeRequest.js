import axios from 'axios'
import { config } from './config'

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  headers: {
    Authorization: `Bearer ${config.THEMOVIEDB_TOKEN}`,

    'Content-Type': 'application/json;charset=utf-8',
  },
})

export const request = (url, method) => {
  return instance({
    url,
    method,
  })
}
