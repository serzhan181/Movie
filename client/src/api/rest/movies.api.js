import { request } from '../makeRequest'

const getPopularMovies = (page) => {
  return request(`/movie/popular?language=en-US`, 'GET', {
    page,
  })
}

const getSingleMovie = (id) => {
  return request(`/movie/${id}`, 'GET')
}

const getSimularMovies = (id) => {
  return request(`/movie/${id}/similar`, 'GET')
}

const getYoutubeTrailer = (id) => {
  return request(`/movie/${id}/videos`)
}

const getMovie = (query) => {
  return request(`/search/movie?language=en-US&query=${query}`)
}

export const moviesAPI = {
  getPopularMovies,
  getSingleMovie,
  getSimularMovies,
  getYoutubeTrailer,
  getMovie,
}
