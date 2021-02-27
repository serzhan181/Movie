import { makeAutoObservable, runInAction } from 'mobx'
import { moviesAPI } from '../api/rest/movies.api'

class Movie {
  curMovie = {}

  isLoading = false
  toggleLoading = () => {
    this.isLoading = !this.isLoading
  }

  movieList = {}

  constructor() {
    makeAutoObservable(this)
  }

  // async
  getPopularMovies = async () => {
    this.toggleLoading()
    try {
      const res = await moviesAPI.getPopularMovies()
      console.log('+1 request')
      runInAction(() => {
        this.movieList = res.data
      })
    } catch (err) {
      console.warn(err)
    }
    this.toggleLoading()
  }

  getSingleMovie = async (id) => {
    this.toggleLoading()
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
    this.toggleLoading()
  }
}

export const movie = new Movie()
