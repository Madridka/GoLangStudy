import { createApp } from 'vue'
import '@/assets/styles/main.css'
import App from './App.vue'
import primeVue3 from '@/plugins/primevue/primevue'
import router from '@/router/router'
import pinia from '@/plugins/pinia/pinia'

const app = createApp(App)

app.use(primeVue3)
app.use(pinia)
app.use(router)
app.mount('#app')
