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

const getMovie = (query, page) => {
  return request(
    `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=true`,
    'GET',
    {
      page,
    }
  )
}

const getMovieByCategory = (genreId, page) => {
  return request(
    `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&include_adult=true&include_video=false&page=1&with_genres=${genreId}`,
    'GET',
    { page }
  )
}

export const moviesAPI = {
  getPopularMovies,
  getSingleMovie,
  getSimularMovies,
  getYoutubeTrailer,
  getMovieByCategory,
  getMovie,
}
