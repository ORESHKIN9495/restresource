<script setup>
import { ref } from 'vue'

const active = ref(false)
</script>

<template>
  <form v-outside="() => (active = false)">
    <input type="text" :class="{ active: active }" placeholder="Найти" />

    <svg v-on:click="active = !active" width="20" height="20">
      <use xlink:href="/src/assets/images/sprites.svg#search"></use>
    </svg>
  </form>
</template>

<style lang="scss" scoped>
form {
  display: grid;
  grid-template: auto / 1fr 20px;
  margin: 0 0 0 auto;
  max-width: 300px;
  place-items: center flex-end;
  width: 100%;

  input {
    opacity: 0;
    transition: 0.5s ease;
    width: 0;

    &.active {
      opacity: 1;
      width: 100%;
    }
  }
}
</style>
