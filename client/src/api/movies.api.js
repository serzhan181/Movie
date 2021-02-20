import axios from 'axios'
import { config } from './config'

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  headers: {
    Authorization: `Bearer ${config.THEMOVIEDB_TOKEN}`,

    'Content-Type': 'application/json;charset=utf-8',
  },
})

export const imageBaseUrl = 'https://image.tmdb.org/t/p/original/'

export const getMovieAPI = (id) => instance.get(`/movie/${id}`)
