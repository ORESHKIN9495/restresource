<script setup>
import headerBottomComponent from './headerBottomComponent.vue'
import headerTopComponent from './headerTopComponent.vue'
import logotypeComponent from './logotypeComponent.vue'
</script>

<template>
  <header>
    <RouterLink
      :to="{
        name: 'home'
      }"
      custom
      v-slot="{ navigate }"
    >
      <logotypeComponent v-on:click="navigate" :color="false"></logotypeComponent>
    </RouterLink>

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
  grid-template: 50px 50px / repeat(2, 1fr);
  padding: var(--scheme-gap);
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 99;

  svg {
    cursor: pointer;
    display: none;
    height: 40px;
    margin: 0 0 0 auto;
    width: 40px;
  }
}

@media only screen and (max-width: 920px) {
  header {
    grid-template: 50px / repeat(2, 1fr);

    nav {
      display: none;
    }

    svg {
      display: block;
    }
  }
}
</style>
