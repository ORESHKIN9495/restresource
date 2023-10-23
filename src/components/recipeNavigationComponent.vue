<script setup>
import { RouterLink } from 'vue-router'

import { useRecipeStore } from '../stores/useRecipe'

const store = useRecipeStore()
</script>

<template>
  <nav>
    <ul v-for="item of store.array" :key="item">
      <li>{{ item.title }}</li>

      <RouterLink
        :to="{ name: el.path }"
        custom
        v-slot="navigate"
        v-for="el of item.link"
        :key="el"
      >
        <li v-on:click="navigate" v-outside="() => $emit('close')">
          <svg width="15" height="2">
            <use xlink:href="/src/assets/images/sprites.svg#line" />
          </svg>

          {{ el.title }}
        </li>
      </RouterLink>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
nav {
  background-color: #fff;
  display: grid;
  grid-template: auto / repeat(5, 1fr) !important;
  gap: 20px;
  inset: 140px 0 auto;
  justify-items: center;
  position: fixed;
  padding: 20px clamp(20px, 8vw, 160px);

  ul {
    width: 100%;

    &:nth-child(-n + 5) {
      border-bottom: 1px solid rgba(rgb(57, 59, 68), 0.2);
      padding: 0 0 20px;
    }

    li {
      &:first-child {
        font-weight: 400;
        margin: 0 0 10px;
      }

      a {
        color: inherit;
        text-decoration: none;
      }

      &:not(:first-child) {
        svg {
          display: none;
          transform: translate(-20px, 15px);
        }

        &:hover {
          padding: 0 0 0 20px;

          svg {
            display: block;
          }
        }
      }
    }
  }
}
</style>
