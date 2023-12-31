import { defineStore } from 'pinia'
import { ref } from 'vue'

export const usePlanStore = defineStore('planStore', () => {
  const array = ref([
    {
      id: 1,
      title: 'Бесплатный',
      price: 0,
      equal: null,
      monthly: null,
      get: [
        'Доступ к более чем 2 000 профессиональных рецептур, статей и руководств (не более пяти в день)'
      ]
    },
    {
      id: 2,
      title: 'Специалист',
      price: 499.0,
      equal: 5988.0,
      monthly: 299.0,
      get: [
        'Неограниченный доступ к более чем 2 000 профессиональных рецептур, статей и руководств',
        'Эксклюзивные новые рецепты от шеф-повара и подробная информация',
        'Эксклюзивные новые рецепты от шеф-повара и подробная информация',
        'Идеи для бизнеса в сфере общественного питания',
        'Доступ к более чем 1 000 теxнологическиx карт для предприятий',
        'Эксклюзивные скидки и предложения'
      ]
    },
    {
      id: 3,
      title: 'Эксперт',
      price: 999.0,
      equal: 11988.0,
      monthly: 599.0,
      get: [
        'Все что включено в план “Специалист”, а так же:',
        'Весь необходимый информационный материал для самостоятельного открытия точки общественного питания'
      ]
    }
  ])

  return { array }
})
