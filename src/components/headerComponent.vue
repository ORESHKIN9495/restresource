<script setup>
import headerBottomComponent from './headerBottomComponent.vue'
import headerTopComponent from './headerTopComponent.vue'
import logotypeComponent from './logotypeComponent.vue'
</script>

<template>
  <header>
    <logotypeComponent :color="false"></logotypeComponent>

    <headerTopComponent></headerTopComponent>

    <svg>
      <use xlink:href="/src/assets/images/sprites.svg#menu"></use>
    </svg>

    <headerBottomComponent></headerBottomComponent>
  </header>
</template>

<style lang="scss" scoped>
header {
  background-color: var(--color-v1);
  display: grid;
  grid-template: 50px 50px / 1fr auto;
  padding: var(--scheme-gap);
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 9;

  svg {
    cursor: pointer;
    display: none;
    height: 100%;
    width: 50px;
  }
}

@media only screen and (max-width: 920px) {
  header {
    grid-template: 50px / 1fr auto;

    nav {
      display: none;
    }

    svg {
      display: block;
    }
  }
}
</style>
