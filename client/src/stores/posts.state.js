import { makeAutoObservable } from 'mobx'
import { postsAPI } from '../api/rest/posts.api'
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
        const res = await postsAPI.getPosts()
        this.posts = res.data
      } catch (e) {
        console.error(e)
      }
    }, this.setIsloading)
  }

  vote = async ({ identifier, slug, value }) => {
    await requestAndToggle(async () => {
      try {
        const res = await postsAPI.vote({ identifier, slug, value })

        const idx = this.posts.findIndex((p) => {
          return (
            p.identifier === res.data.identifier && p.slug === res.data.slug
          )
        })

        this.posts[idx] = { ...this.posts[idx], ...res.data }
      } catch (e) {
        console.error(e)
      }
    }, this.setIsloading)
  }
}

export const posts = new Posts()
