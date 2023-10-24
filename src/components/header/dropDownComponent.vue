<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

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
  <nav>
    <ul>
      <li>
        Рецепты

        <svg>
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

    <ul>
      <li
        v-for="item of array.slice(3, 6)"
        :key="item"
        v-on:click="router.push({ name: item.path }), $emit('close')"
      >
        {{ item.title }}
      </li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
nav {
  display: grid;
  grid-column: 1 / 3;
  gap: var(--scheme-gap);
  height: fit-content;
  margin: 0 -20px;

  ul {
    display: grid;

    &:first-child {
      li {
        align-items: center;
        border-bottom: 1px solid rgba(rgb(57, 59, 68), 0.2);
        display: flex;
        gap: 10px;
        padding: 20px;

        svg {
          cursor: default;
          height: 12px;
          transform: rotate(-90deg);
          width: 12px;
        }

        &:last-of-type {
          svg {
            height: 20px;
            transform: rotate(0);
            width: 20px;
          }
        }
      }
    }

    &:last-child {
      grid-template: auto / repeat(2, 1fr);
      gap: var(--scheme-gap);
      padding: 20px;

      li {
        border: 1px solid var(--color-theme);
        padding: 15px 10px;
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
</style>
