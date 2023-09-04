<script setup>
import TheHeader from './components/TheHeader.vue'
</script>

<template>
  <TheHeader></TheHeader>

  <RouterView />
</template>

<style lang="scss">
:root {
  --c-theme: #393b44;
  --c-v1: #fff;

  --scheme-gap: 20px;

  --size-l: 45px;
  --size-m: 30px;
  --size-s: 15px;

  --scheme-font: system-ui, sans-serif;

  --scheme-shadow: 0 20px 20px -20px rgba(40, 40, 40, 0.7098039216);
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  background-color: var(--c-v1);
  font: 300 var(--size-s) / 1.62 var(--scheme-font);
}

ul {
  list-style: none;
}

svg {
  display: block;
  height: 100%;
  width: 100%;
}
</style>
