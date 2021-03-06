import { requestTMDB } from '../makeRequest'

const getPopularMovies = (page) => {
  return requestTMDB(`/movie/popular?language=en-US`, 'GET', {
    page,
  })
}

const getSingleMovie = (id) => {
  return requestTMDB(`/movie/${id}?language=en-US`, 'GET')
}

const getSimularMovies = (id) => {
  return requestTMDB(`/movie/${id}/similar`, 'GET')
}

const getYoutubeTrailer = (id) => {
  return requestTMDB(`/movie/${id}/videos`)
}

const getMovie = (query, page) => {
  return requestTMDB(`/search/movie?query=${query}&include_adult=true`, 'GET', {
    page,
  })
}

// DEPRECATED
const getMovieByCategory = (genreId, page) => {
  return requestTMDB(
    `/movie?sort_by=popularity.desc&include_adult=true&include_video=false&with_genres=${genreId}`,
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
