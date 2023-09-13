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

    <svg
      xmlns="http://www.w3.org/2000/svg"
      id="search"
      fill="none"
      viewBox="0 0 14 14"
      v-on:click="active = !active"
    >
      <path
        fill="var(--color-theme)"
        d="M13.829 13.005 9.848 9.023a5.515 5.515 0 0 0 1.235-3.481A5.548 5.548 0 0 0 5.542 0 5.548 5.548 0 0 0 0 5.542a5.548 5.548 0 0 0 5.542 5.542 5.515 5.515 0 0 0 3.48-1.236l3.982 3.981a.582.582 0 1 0 .825-.825ZM5.542 9.916a4.38 4.38 0 0 1-4.375-4.375 4.38 4.38 0 0 1 4.375-4.375 4.38 4.38 0 0 1 4.375 4.375 4.38 4.38 0 0 1-4.375 4.375Z"
      />
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
    color: var(--color-theme);
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
