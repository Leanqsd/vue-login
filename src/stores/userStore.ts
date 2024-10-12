import { defineStore } from 'pinia'
import type { User } from '../models/UserModel'

export const useUserStore = defineStore('userStore', {
  state: () => ({
    userData: {
      userName: '',
      password: '',
      rememberMe: false
    } as User
  }),
  actions: {
    setUserData(newUserData: User) {
      this.userData = newUserData
    }
  }
})
