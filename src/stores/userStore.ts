import { defineStore } from 'pinia'
import type { User } from '../models/userModel'

export const useUserStore = defineStore('userStore', {
  state: () => ({
    userData: {
      user: '',
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
