import { defineStore } from 'pinia'
import type { User } from '../models/UserModel'

export const useUserStore = defineStore('userStore', {
  state: () => ({
    userData: {
      id: 0,
      firstName: '',
      lastName: '',
      username: '',
      password: ''
    }
  }),
  actions: {
    setUserData(newUserData: User) {
      this.userData = newUserData
    }
  }
})
