import { makeAutoObservable, runInAction } from 'mobx'
import { requestAndToggle } from '../helpers/requestAndToggle'
import { authAPI } from '../api/rest/auth.api'

class Auth {
  constructor() {
    makeAutoObservable(this)
  }

  isLoading = false
  setLoading = (bool) => {
    this.isLoading = bool
  }

  user = {
    authenticated: false,
    username: null,
    email: null,
  }

  register = async (data) => {
    let errors
    await requestAndToggle(async () => {
      try {
        const res = await authAPI.register(data)
        console.log(res)
      } catch (err) {
        errors = err.response.data.errors
        return err.response.data
      }
    }, this.setLoading)

    return errors
  }

  login = async (data) => {
    let errors
    await requestAndToggle(async () => {
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
    }, this.setLoading)
    return errors
  }

  me = async () => {
    await requestAndToggle(async () => {
      try {
        const { data } = await authAPI.me()
        if (data.success) {
          runInAction(() => {
            this.user = data.user
            this.user.authenticated = true
          })
        }
      } catch (e) {
        return
      }
    }, this.setLoading)
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
