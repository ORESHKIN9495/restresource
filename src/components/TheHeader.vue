<script setup>
import TheHeaderBottom from '@/components/TheHeaderBottom.vue'
import TheHeaderTop from '@/components/TheHeaderTop.vue'
import TheLogo from '@/components/TheLogo.vue'
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
      <TheLogo v-on:click="navigate"></TheLogo>
    </RouterLink>

    <TheHeaderTop></TheHeaderTop>

    <svg>
      <use xlink:href="../assets/images/sprite.svg#menu" />
    </svg>

    <TheHeaderBottom></TheHeaderBottom>
  </header>
</template>

<style lang="scss" scoped>
header {
  background-color: #ffff;
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
