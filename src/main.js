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

app.directive('outside', {
  beforeMount(el, binding) {
    el.clickOutsideEvent = (evt) => {
      evt.stopPropagation()
      // here I check that click was outside the el and his children
      if (!(el === evt.target || el.contains(evt.target))) {
        // and if it did, call method provided in attribute value
        binding.value(evt, el)
      }
    }
    window.requestAnimationFrame(() => {
      document.addEventListener('click', el.clickOutsideEvent)
    })
  },
  unmounted(el) {
    document.removeEventListener('click', el.clickOutsideEvent)
  }
})

app.use(createPinia())
app.use(router)

app.mount('#app')
