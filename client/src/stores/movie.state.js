import { makeAutoObservable, runInAction } from 'mobx'
import { moviesAPI } from '../api/rest/movies.api'
import { requestAndToggle } from '../helpers/requestAndToggle'

class Movie {
  curMovie = {}

  isLoading = true
  setLoading = (bool) => {
    this.isLoading = bool
  }

  movieList = {}

  constructor() {
    makeAutoObservable(this)
  }

  // async
  getPopularMovies = async (page = 1) => {
    requestAndToggle(async () => {
      try {
        const res = await moviesAPI.getPopularMovies(page)
        runInAction(() => {
          this.movieList = res.data
        })
      } catch (err) {
        console.warn(err)
      }
    }, this.setLoading)
  }

  getSingleMovie = async (id) => {
    requestAndToggle(async () => {
      try {
        runInAction(() => (this.curMovie = {}))
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
    }, this.setLoading)
  }

  getMovie = async (query, page = 1) => {
    requestAndToggle(async () => {
      try {
        const res = await moviesAPI.getMovie(query, page)

        runInAction(() => {
          this.movieList = res.data
        })
      } catch (err) {
        console.warn(err)
      }
    }, this.setLoading)
  }

  getMovieByCategory = async (genreId, page = 1) => {
    requestAndToggle(async () => {
      try {
        const res = await moviesAPI.getMovieByCategory(genreId, page)

        runInAction(() => {
          this.movieList = res.data
        })
      } catch (err) {
        console.warn(err)
      }
    }, this.setLoading)
  }
}

export const movie = new Movie()
