import { createRouter, createWebHistory } from 'vue-router'
import homeView from './home/views/homeView.vue'
import recipeView from './recipe/views/recipeView.vue'

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
    }
  ]
})

export default router
