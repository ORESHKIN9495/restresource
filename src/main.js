import { createPinia } from 'pinia'
import { createApp } from 'vue'

import App from './App.vue'
import router from './router'

import VueScrollTo from 'vue-scrollto'

const app = createApp(App)

app.use(VueScrollTo, {
  duration: 800,
  easing: 'ease'
})

app.use(createPinia())
app.use(router)

app.mount('#app')
