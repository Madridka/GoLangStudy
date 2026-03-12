import axios, { type AxiosResponse } from 'axios'
import { defineStore } from 'pinia'
import { ref, type Ref } from 'vue'

export const useValueStore = defineStore('valueStore', () => {
  const valueFromServer: Ref<number> = ref(0)

  const URL = 'http://localhost:8080/api/value'

  const getValue = (): Promise<void> =>
    axios.get(URL).then((response: AxiosResponse) => {
      valueFromServer.value = response.data
    })

  return {
    getValue,
    valueFromServer,
  }
})
