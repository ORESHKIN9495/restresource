import { createRouter, createWebHistory } from 'vue-router'
import homeView from './home/views/homeView.vue'
import planView from './plan/views/planView.vue'
import recipeView from './recipe/views/recipeView.vue'
import signinView from './signin/views/signinView.vue'
import signupView from './signup/views/signupView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: homeView
    },
    {
      path: '/recipe',
      name: 'recipe',
      component: recipeView
    },
    {
      path: '/plan',
      name: 'plan',
      component: planView
    },
    {
      path: '/sign-in',
      name: 'sign-in',
      component: signinView
    },
    {
      path: '/sign-up',
      name: 'sign-up',
      component: signupView
    }
  ]
})

export default router
