<script setup>
import { ref } from 'vue'
import logotypeComponent from './logotypeComponent.vue'

const active = ref(false)

const array = ref([
  {
    title: 'Готовые решения',
    path: 'home'
  },
  {
    title: 'Информационная база',
    path: 'home'
  },
  {
    title: 'Секреты приготовления',
    path: 'home'
  },
  {
    title: 'Подписаться',
    path: 'plan'
  },
  {
    title: 'Войти',
    path: 'sign-in'
  },
  {
    title: 'Регистрация',
    path: 'sign-up'
  }
])
</script>

<template>
  <section>
    <nav>
      <logotypeComponent :color="false"></logotypeComponent>

      <ul>
        <li v-on:click="active = !active">
          Рецепты

          <svg :class="{ active: active }">
            <use xlink:href="/src/assets/images/sprites.svg#chevron"></use>
          </svg>
        </li>

        <RouterLink
          v-for="item of array.slice(0, 3)"
          :key="item"
          :to="{
            name: item.path
          }"
          custom
          v-slot="{ navigate }"
        >
          <li v-on:click="navigate">
            {{ item.title }}

            <svg>
              <use xlink:href="/src/assets/images/sprites.svg#chevron"></use>
            </svg>
          </li>
        </RouterLink>

        <li>
          <svg>
            <use xlink:href="/src/assets/images/sprites.svg#search"></use>
          </svg>
        </li>
      </ul>
    </nav>

    <nav>
      <ul>
        <RouterLink
          v-for="item of array.slice(3, 6)"
          :key="item"
          :to="{
            name: item.path
          }"
          custom
          v-slot="{ navigate }"
        >
          <li v-on:click="navigate" v-outside="() => $emit('close')">
            {{ item.title }}
          </li>
        </RouterLink>
      </ul>
    </nav>
  </section>
</template>

<style lang="scss" scoped>
section {
  background-color: var(--color-v1);
  inset: 0;
  position: fixed;
  z-index: 9;

  a {
    padding: 20px;
  }

  nav {
    display: grid;
    gap: 20px;

    &:first-child {
      ul {
        display: grid;
        gap: 20px;

        li {
          align-items: center;
          cursor: pointer;
          display: flex;
          gap: 10px;
          padding: 0 0 20px 20px;
          border-bottom: 1px solid rgba(rgb(57, 59, 68), 0.2);

          svg {
            height: 12px;
            transition: 0.3s ease;
            transform: rotate(-90deg);
            width: 12px;

            &.active {
              transform: rotate(0);
            }
          }

          &:last-child {
            svg {
              cursor: pointer;
              height: 20px;
              transform: rotate(0);
              width: 20px;
            }
          }
        }
      }
    }

    &:last-child {
      padding: 20px;

      ul {
        display: grid;
        grid-template: auto / repeat(2, 1fr) !important;
        gap: 20px !important;

        li {
          border: 1px solid var(--color-theme);
          padding: 10px var(--scheme-gap);
          transition: 0.1s ease;
          text-align: center;

          &:first-child {
            grid-column: 1 / 3;
          }

          &:hover {
            background-color: var(--color-theme);
            color: var(--color-v1);
          }
        }
      }
    }
  }
}
</style>
