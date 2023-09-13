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
      <TheLogo v-on:click="navigate" :color="false"></TheLogo>
    </RouterLink>

    <TheHeaderTop></TheHeaderTop>

    <svg xmlns="http://www.w3.org/2000/svg" id="menu" fill="none" viewBox="0 0 42 29">
      <path
        fill="var(--color-theme)"
        d="M0 0h42v4.143H0V0ZM0 12.429h42v4.142H0V12.43ZM0 24.857h42V29H0v-4.143Z"
      />
    </svg>

    <TheHeaderBottom></TheHeaderBottom>
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
