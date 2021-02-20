import { makeAutoObservable } from 'mobx'
import { getMovieAPI } from '../api/movies.api'

class Movie {
  curMovie = null

  constructor() {
    makeAutoObservable(this)
  }

  // async
  getMovie = async (id) => {
    try {
      const res = await getMovieAPI(id)
      this.curMovie = res.data
    } catch (error) {
      console.warn(error)
    }
  }
}

export const movie = new Movie()
