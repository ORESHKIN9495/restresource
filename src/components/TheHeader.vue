<script setup>
import TheLogo from '../components/TheLogo.vue'
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

    <nav>
      <ul>
        <RouterLink
          :to="{
            name: 'home'
          }"
          custom
          v-slot="{ navigate }"
        >
          <li v-on:click="navigate">Подписаться</li>
        </RouterLink>

        <RouterLink
          :to="{
            name: 'home'
          }"
          custom
          v-slot="{ navigate }"
        >
          <li v-on:click="navigate">Войти</li> </RouterLink
        >|

        <RouterLink
          :to="{
            name: 'home'
          }"
          custom
          v-slot="{ navigate }"
        >
          <li v-on:click="navigate">Регистрация</li>
        </RouterLink>
      </ul>
    </nav>

    <svg>
      <use xlink:href="../assets/images/sprite.svg#menu" />
    </svg>
  </header>
</template>

<style lang="scss" scoped>
header {
  align-items: center;
  box-shadow: var(--scheme-shadow);
  display: grid;
  grid-template: 46px / 216px auto;
  gap: 20px;
  padding: var(--scheme-gap);

  nav {
    margin: 0 0 0 auto;

    ul {
      align-items: center;
      display: grid;
      grid-auto-flow: column;
      gap: var(--scheme-gap);

      li {
        cursor: pointer;

        &:first-of-type {
          border-color: var(--c-theme);
          border-style: solid;
          border-width: 1px;
          padding: 10px var(--scheme-gap);
          transition: 0.1s ease;

          &:hover {
            background-color: var(--c-theme);
            color: var(--c-v1);
          }
        }
      }
    }
  }

  svg {
    cursor: pointer;
    display: none;
    margin: 0 0 0 auto;
    width: 40px;
  }
}

@media only screen and (max-width: 920px) {
  header {
    nav {
      display: none;
    }

    svg {
      display: block;
    }
  }
}

@media only screen and (max-width: 720px) {
}
</style>
