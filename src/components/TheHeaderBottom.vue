<script setup>
import { ref } from 'vue'
import TheSearchBar from './TheSearchBar.vue'

const active = ref(false)
</script>

<template>
  <nav>
    <ul>
      <li v-on:click="active = !active">
        Рецепты

        <svg
          xmlns="http://www.w3.org/2000/svg"
          id="arrow"
          fill="none"
          viewBox="0 0 14 8"
          :class="{
            active: active
          }"
        >
          <path
            fill="var(--color-theme)"
            fill-rule="evenodd"
            d="M.646.646a.5.5 0 0 1 .708 0L7 6.293 12.646.646a.501.501 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708Z"
            clip-rule="evenodd"
          />
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

          <svg xmlns="http://www.w3.org/2000/svg" id="arrow" fill="none" viewBox="0 0 14 8">
            <path
              fill="var(--color-theme)"
              fill-rule="evenodd"
              d="M.646.646a.5.5 0 0 1 .708 0L7 6.293 12.646.646a.501.501 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708Z"
              clip-rule="evenodd"
            />
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

          <svg xmlns="http://www.w3.org/2000/svg" id="arrow" fill="none" viewBox="0 0 14 8">
            <path
              fill="var(--color-theme)"
              fill-rule="evenodd"
              d="M.646.646a.5.5 0 0 1 .708 0L7 6.293 12.646.646a.501.501 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708Z"
              clip-rule="evenodd"
            />
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

          <svg xmlns="http://www.w3.org/2000/svg" id="arrow" fill="none" viewBox="0 0 14 8">
            <path
              fill="var(--color-theme)"
              fill-rule="evenodd"
              d="M.646.646a.5.5 0 0 1 .708 0L7 6.293 12.646.646a.501.501 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708Z"
              clip-rule="evenodd"
            />
          </svg>
        </li>
      </RouterLink>
    </ul>

    <TheSearchBar></TheSearchBar>
  </nav>
</template>

<style lang="scss" scoped>
nav {
  display: grid;
  grid-template: auto / auto 1fr;
  grid-column: 1 / 3;
  gap: 20px;

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
      height: 10px;
      transition: 0.3s ease;
      width: 10px;

      &.active {
        transform: rotate(-90deg);
      }
    }
  }
}
</style>
