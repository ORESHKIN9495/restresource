<script setup></script>

<template>
  <nav>
    <ul>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
ul {
  display: grid;
  grid-auto-flow: column;
  gap: var(--scheme-gap);

  li {
    background-color: var(--color-v1);
    border-radius: 50px;
    height: 30px;
    width: 30px;
  }
}
</style>
