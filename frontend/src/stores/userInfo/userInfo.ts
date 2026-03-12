import type { User } from '@/stores/userInfo/types'
import axios, { type AxiosResponse } from 'axios'
import { defineStore } from 'pinia'
import { ref, type Ref } from 'vue'

export const useUserInfoStore = defineStore('userInfoStore', () => {
  const users: Ref<User[]> = ref([])

  const URL = 'https://jsonplaceholder.typicode.com/users/1/todos'

  const getUsers = (): Promise<void> =>
    axios.get(URL).then((response: AxiosResponse) => {
      users.value = response.data
    })

  return {
    getUsers,
    users,
  }
})
