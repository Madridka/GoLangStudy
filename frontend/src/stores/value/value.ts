import axios, { type AxiosResponse } from 'axios'
import { defineStore } from 'pinia'
import { ref, type Ref } from 'vue'

export const useValueStore = defineStore('valueStore', () => {
  const valueFromServer: Ref<number> = ref(0)
  const mobileString: Ref<string> = ref('')

  interface MobileData {
    mobile: string
    compensations: string
  }

  const mobileData: Ref<MobileData | null> = ref(null)

  const URLValue = 'http://localhost:8080/api/value'
  const URLMobile = 'http://localhost:8080/api/mobile'

  const getValue = (): Promise<void> =>
    axios.get(URLValue).then((response: AxiosResponse) => {
      valueFromServer.value = response.data.value
    })

  const getMobile = (): Promise<void> =>
    axios.get(URLMobile).then((response: AxiosResponse) => {
      mobileData.value = response.data
    })

  return {
    getValue,
    getMobile,

    valueFromServer,
    mobileString,
    mobileData,
  }
})
