<script setup>
import { ref } from 'vue'
import dropDownComponent from './dropDownComponent.vue'
import headerBottomComponent from './headerBottomComponent.vue'
import headerTopComponent from './headerTopComponent.vue'
import logotypeComponent from './logotypeComponent.vue'

const active = ref(false)
</script>

<template>
  <header>
    <logotypeComponent :color="false"></logotypeComponent>

    <headerTopComponent></headerTopComponent>

    <svg id="menu" fill="#393B44" viewBox="0 0 314 221" v-on:click="active = !active">
      <path
        fill="#393B44"
        d="M0 156.542c0 25.427 20.593 46.041 45.996 46.041h9.2V221H258.19v-18.417h9.2c25.403 0 46.609-20.614 46.609-46.041v-9.209H0v9.209Zm0-73.667c0 25.427 20.593 46.042 45.996 46.042h221.395c25.403 0 46.609-20.615 46.609-46.042v-9.208H0v9.208ZM0 9.208C0 34.636 20.593 55.25 45.996 55.25h221.395C292.794 55.25 314 34.636 314 9.208V0H0v9.208Z"
      />
    </svg>

    <headerBottomComponent></headerBottomComponent>
  </header>

  <dropDownComponent v-on:close="active = false" v-if="active"></dropDownComponent>
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
    height: 40px;
    width: 40px;
  }
}

@media only screen and (max-width: 920px) {
  header {
    grid-template: 50px / 1fr auto;

    svg {
      display: block;
    }
  }
}
</style>
