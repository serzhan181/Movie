import { makeAutoObservable } from 'mobx'
import { authAPI } from '../api/rest/auth.api'

class Auth {
  constructor() {
    makeAutoObservable(this)
  }

  isLoading = false

  register = async (data) => {
    console.log('FROM STATE', data)
    const result = await authAPI.register(data)

    console.log(result.data)
  }
}

export const auth = new Auth()
