<script setup>
import TheFooter from './components/TheFooter.vue'
import TheHeader from './components/TheHeader.vue'
</script>

<template>
  <TheHeader></TheHeader>

  <RouterView />

  <TheFooter></TheFooter>
</template>

<style lang="scss">
:root {
  --color-theme: #393b44;

  --color-v1: #fff;

  --color-background: linear-gradient(180deg, #f1f1f1 0%, rgba(255, 255, 255, 0) 44.27%);

  --scheme-gap: 20px;

  --size-text: 15px;

  --scheme-font: system-ui, sans-serif;

  --scheme-shadow: 0 20px 20px -20px rgba(40, 40, 40, 0.7098039216);
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  background-color: var(--color-background);
  color: var(--color-theme);
  font: 300 var(--size-text) / 1.62 var(--scheme-font);
}

h1 {
  font-size: clamp(24px, 4vw, 36px);
}

h2 {
  font-size: clamp(18px, 4vw, 24px);
}

h3 {
  font-size: clamp(16px, 4vw, 20px);
}

input {
  border: none;
  outline: none;
}

img {
  object-fit: cover;
  width: 100%;
}

picture {
  display: block;
}

svg {
  cursor: pointer;
  display: block;
  height: 100%;
  width: 100%;
}

ul {
  list-style: none;
}

button {
  background: none;
  border: none;
  color: inherit;
  outline: none;
  padding: 10px 40px;
}
</style>
