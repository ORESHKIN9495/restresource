<script setup>
import logotypeComponent from './logotypeComponent.vue'
import socialNetworkComponent from './socialNetworkComponent.vue'
</script>

<template>
  <footer>
    <section>
      <nav>
        <RouterLink
          :to="{
            name: 'home'
          }"
          custom
          v-slot="{ navigate }"
        >
          <logotypeComponent v-on:click="navigate" :color="true"></logotypeComponent>
        </RouterLink>

        <ul>
          <RouterLink
            :to="{
              name: 'home'
            }"
            custom
            v-slot="{ navigate }"
          >
            <li v-on:click="navigate">Главная</li>
          </RouterLink>

          <RouterLink
            :to="{
              name: 'home'
            }"
            custom
            v-slot="{ navigate }"
          >
            <li v-on:click="navigate">Рецепты</li>
          </RouterLink>

          <RouterLink
            :to="{
              name: 'home'
            }"
            custom
            v-slot="{ navigate }"
          >
            <li v-on:click="navigate">Готовые решения</li>
          </RouterLink>

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

        <p>© ООО «Ресторанный ресурс»</p>
      </nav>

      <socialNetworkComponent></socialNetworkComponent>
    </section>
  </footer>
</template>

<style lang="scss" scoped>
footer {
  background-color: var(--color-theme);
  padding: calc(var(--scheme-gap) * 4) var(--scheme-gap);

  section {
    display: grid;
    grid-auto-flow: column;
    gap: var(--scheme-gap);
    max-width: 1200px;
    margin: auto;

    nav {
      display: grid;
      grid-template: auto / 1fr;
      gap: var(--scheme-gap);
      justify-items: flex-start;

      ul {
        color: var(--color-v1);

        li {
          cursor: pointer;
          margin: var(--scheme-gap) 0 0;

          &:last-child {
            margin-bottom: calc(var(--scheme-gap) * 2);
          }
        }
      }

      p {
        color: var(--color-v1);
      }
    }
  }
}

@media only screen and (max-width: 720px) {
  footer {
    section {
      grid-auto-flow: row;
    }
  }
}
</style>
