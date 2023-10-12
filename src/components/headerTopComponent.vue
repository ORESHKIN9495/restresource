<script setup></script>

<template>
  <nav>
    <ul>
      <RouterLink
        :to="{
          name: 'plan'
        }"
        custom
        v-slot="{ navigate }"
      >
        <li v-on:click="navigate">Подписаться</li>
      </RouterLink>

      <RouterLink
        :to="{
          name: 'sign-in'
        }"
        custom
        v-slot="{ navigate }"
      >
        <li v-on:click="navigate">Войти</li> </RouterLink
      >|

      <RouterLink
        :to="{
          name: 'sign-up'
        }"
        custom
        v-slot="{ navigate }"
      >
        <li v-on:click="navigate">Регистрация</li>
      </RouterLink>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
nav {
  ul {
    align-items: center;
    display: grid;
    grid-auto-flow: column;
    gap: var(--scheme-gap);

    li {
      cursor: pointer;

      &:first-of-type {
        border: 1px solid var(--color-theme);
        padding: 10px var(--scheme-gap);
        transition: 0.1s ease;

        &:hover {
          background-color: var(--color-theme);
          color: var(--color-v1);
        }
      }
    }
  }
}
</style>
