import { makeAutoObservable } from 'mobx'
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
        console.log(res)
      } catch (err) {
        errors = err.response.data
        return err.response.data
      }
    }, this.setLoading)
    return errors
  }
}

export const auth = new Auth()
