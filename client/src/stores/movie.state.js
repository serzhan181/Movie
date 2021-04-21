import { makeAutoObservable, runInAction } from 'mobx'
import { moviesAPI } from '../api/rest/movies.api'

class Movie {
  curMovie = null

  isLoading = true
  setLoading = (bool) => {
    this.isLoading = bool
  }

  movieList = null

  constructor() {
    makeAutoObservable(this)
  }

  // async
  getPopularMovies = async (page = 1) => {
    this.movieList = null
    try {
      const res = await moviesAPI.getPopularMovies(page)
      runInAction(() => {
        this.movieList = res.data
      })
    } catch (err) {
      console.warn(err)
    }
  }

  getSingleMovie = async (id) => {
    this.curMovie = null
    try {
      const single_movie = await moviesAPI.getSingleMovie(id)
      const yt_videos = await moviesAPI.getYoutubeTrailer(id)
      const simulars = await moviesAPI.getSimularMovies(id)
      runInAction(() => {
        this.curMovie = single_movie.data
        this.curMovie.ytId = yt_videos.data.results[0]
        this.curMovie.simulars = simulars.data.results
      })
    } catch (err) {
      console.warn(err)
    }
  }

  getMovie = async (query, page = 1) => {
    this.movieList = null
    try {
      const res = await moviesAPI.getMovie(query, page)

      runInAction(() => {
        this.movieList = res.data
      })
    } catch (err) {
      console.warn(err)
    }
  }

  // DEPRECATED
  getMovieByCategory = async (genreId, page) => {
    this.movieList = null
    try {
      const res = await moviesAPI.getMovieByCategory(genreId, page)

      runInAction(() => {
        this.movieList = res.data
      })
    } catch (err) {
      console.warn(err)
    }
  }
}

export const movie = new Movie()
