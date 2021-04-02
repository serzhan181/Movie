import { makeAutoObservable } from 'mobx'
import { getPosts } from '../api/rest/posts.api'
import { requestAndToggle } from '../helpers/requestAndToggle'

class Posts {
  constructor() {
    makeAutoObservable(this)
  }

  isLoading = false
  setIsloading = (bool) => {
    this.isLoading = bool
  }

  posts = []

  fetchPosts = async () => {
    await requestAndToggle(async () => {
      try {
        const res = await getPosts()
        this.posts = res.data
      } catch (e) {
        console.log(e)
      }
    }, this.setIsloading)
  }
}

export const posts = new Posts()
