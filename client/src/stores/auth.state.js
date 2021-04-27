import { makeAutoObservable, runInAction } from 'mobx'
import { authAPI } from '../api/rest/auth.api'

class Auth {
  constructor() {
    makeAutoObservable(this)
  }

  user = {
    authenticated: false,
    username: null,
    email: null,
  }

  register = async (data) => {
    try {
      await authAPI.register(data)
    } catch (err) {
      return err.response.data.errors
    }
  }

  signin = async (data) => {
    try {
      const res = await authAPI.signin(data)
      if (res.data.success) {
        runInAction(() => {
          this.user = res.data.user
          this.user.authenticated = true
        })
      }
    } catch (err) {
      return err.response.data
    }
  }

  me = async () => {
    try {
      const { data } = await authAPI.me()
      if (this.user.authenticated) return
      if (data.success) {
        runInAction(() => {
          this.user = data.user
          this.user.authenticated = true
        })
      }
    } catch (e) {
      return
    }
  }

  logout = async () => {
    try {
      if (this.user.authenticated) {
        await authAPI.logout()
      }
    } catch (e) {
      console.error(e)
    }
  }
}

export const auth = new Auth()
