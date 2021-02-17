import { makeAutoObservable } from 'mobx'

class Movie {
  constructor() {
    makeAutoObservable(this)
  }
}

export const movie = new Movie()
