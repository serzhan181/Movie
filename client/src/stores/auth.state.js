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
    let errors
    try {
      await authAPI.register(data)
    } catch (err) {
      errors = err.response.data.errors
      return err.response.data
    }

    return errors
  }

  login = async (data) => {
    let errors
    try {
      const res = await authAPI.login(data)
      if (res.data.success) {
        runInAction(() => {
          this.user = res.data.user
          this.user.authenticated = true
        })
      }
    } catch (err) {
      errors = err.response.data
      return err.response.data
    }
    return errors
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
