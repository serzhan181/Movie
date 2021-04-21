import { makeAutoObservable, runInAction } from 'mobx'
import { userAPI } from '../api/rest/user.api'
import { posts } from './posts.state'

class User {
  constructor() {
    makeAutoObservable(this)
  }

  isLoading = true
  setIsloading = (bool) => (this.isLoading = bool)

  userInfo = null

  fetchUser = async (username) => {
    this.userInfo = null
    try {
      const { data } = await userAPI.getUser(username)
      posts.setPosts(data.posts)
      runInAction(() => {
        this.userInfo = { ...data, posts: undefined }
      })
      return
    } catch (err) {
      console.log(err)
      return { error: err.response.data.error }
    }
  }

  uploadProfileImage = async (formData) => {
    try {
      const { data } = await userAPI.uploadProfileImage(
        this.userInfo.username,
        formData
      )
      this.userInfo.imageUrl = data.imageUrl
    } catch (err) {
      console.log(err)
    }
  }
}

export const user = new User()
