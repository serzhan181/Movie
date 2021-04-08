import { makeAutoObservable, runInAction } from 'mobx'
import { postsAPI } from '../api/rest/posts.api'
import { requestAndToggle } from '../helpers/requestAndToggle'

class Posts {
  constructor() {
    makeAutoObservable(this)
  }

  isLoading = true
  setIsloading = (bool) => {
    this.isLoading = bool
  }

  posts = []

  setPosts = (posts) => {
    this.posts = posts
  }

  fetchPosts = async () => {
    await requestAndToggle(async () => {
      try {
        const res = await postsAPI.getPosts()
        runInAction(() => {
          this.posts = res.data
        })
      } catch (e) {
        console.error(e)
      }
    }, this.setIsloading)
  }

  vote = async ({ identifier, slug, value }) => {
    try {
      const res = await postsAPI.vote({ identifier, slug, value })

      this.posts.forEach((p) => {
        if (p.identifier === res.data.identifier && p.slug === res.data.slug) {
          runInAction(() => {
            p.voteScore = res.data.voteScore
            p.userVote = res.data.userVote
          })
        }
      })
    } catch (e) {
      console.error(e)
    }
  }
}

export const posts = new Posts()
