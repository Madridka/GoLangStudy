import { defineStore } from 'pinia'

export const useCarInfoStore = defineStore('carInfoStore', () => {
  const carModel = 'Subaru'

  return {
    carModel,
  }
})
