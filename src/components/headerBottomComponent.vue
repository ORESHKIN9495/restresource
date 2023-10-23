<script setup>
import { ref } from 'vue'
import searchBarComponent from './searchBarComponent.vue'

import recipeNavigationComponent from './recipeNavigationComponent.vue'

const active = ref(false)
</script>

<template>
  <nav>
    <ul>
      <li v-on:click="active = !active">
        Рецепты

        <svg
          :class="{
            active: active
          }"
        >
          <use xlink:href="/src/assets/images/sprites.svg#chevron"></use>
        </svg>
      </li>

      <RouterLink
        :to="{
          name: 'home'
        }"
        custom
        v-slot="{ navigate }"
      >
        <li v-on:click="navigate">
          Готовые решения

          <svg>
            <use xlink:href="/src/assets/images/sprites.svg#chevron"></use>
          </svg>
        </li>
      </RouterLink>

      <RouterLink
        :to="{
          name: 'home'
        }"
        custom
        v-slot="{ navigate }"
      >
        <li v-on:click="navigate">
          Информационная база

          <svg>
            <use xlink:href="/src/assets/images/sprites.svg#chevron"></use>
          </svg>
        </li>
      </RouterLink>

      <RouterLink
        :to="{
          name: 'home'
        }"
        custom
        v-slot="{ navigate }"
      >
        <li v-on:click="navigate">
          Секреты приготовления

          <svg>
            <use xlink:href="/src/assets/images/sprites.svg#chevron"></use>
          </svg>
        </li>
      </RouterLink>
    </ul>

    <searchBarComponent></searchBarComponent>
  </nav>

  <recipeNavigationComponent v-on:close="active = false" v-if="active"></recipeNavigationComponent>
</template>

<style lang="scss" scoped>
nav {
  display: grid;
  grid-template: auto / auto 1fr;
  grid-column: 1 / 3;
  gap: var(--scheme-gap);

  ul {
    display: grid;
    grid-auto-flow: column;
    gap: var(--scheme-gap);

    li {
      cursor: pointer;
      display: grid;
      grid-auto-flow: column;
      gap: 10px;
      place-items: center;
    }

    svg {
      height: 12px;
      transition: 0.3s ease;
      width: 12px;

      &.active {
        transform: rotate(90deg);
      }
    }
  }
}

@media only screen and (max-width: 920px) {
  nav {
    display: none;
  }
}
</style>
