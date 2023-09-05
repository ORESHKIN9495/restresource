<script setup>
import { ref } from 'vue'

const active = ref(false)
</script>

<template>
  <form>
    <input
      type="text"
      :class="{ active: active }"
      placeholder="Найти"
      v-on:focusout="active = !active"
    />

    <svg v-on:click="active = !active">
      <use xlink:href="../assets/images/sprite.svg#search" />
    </svg>
  </form>
</template>

<style lang="scss" scoped>
form {
  align-items: center;
  display: grid;
  grid-template: auto / 1fr 30px;
  gap: var(--scheme-gap);

  input {
    color: var(--c-theme);
    margin: 0 0 0 auto;
    max-width: 0;
    opacity: 0;
    transition: 0.5s ease;
    width: 100%;

    &.active {
      max-width: 300px;
      opacity: 1;
    }
  }

  svg {
    cursor: pointer;
    height: 20px;
    width: 20px;
  }
}
</style>
