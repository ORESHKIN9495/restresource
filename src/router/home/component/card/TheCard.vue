<script setup>
import { useCardStore } from '../../stores/card/card'

const store = useCardStore()

defineProps({
  small: Boolean
})
</script>

<template>
  <article v-for="card in store.array" :key="card.id">
    <picture>
      <source type="image/webp" :srcset="card.picture[1]" />
      <img :src="card.picture[0]" loading="lazy" />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="14"
        fill="none"
        viewBox="0 0 16 14"
        v-on:click="store.getCardId(card.id)"
      >
        <path
          fill="#fff"
          d="m8 2.565-.717-.688C5.6.262 2.514.82 1.4 2.849c-.523.955-.641 2.334.314 4.093.92 1.694 2.834 3.723 6.286 5.933 3.452-2.21 5.365-4.239 6.286-5.933.955-1.76.838-3.138.314-4.093C13.486.82 10.4.261 8.717 1.877L8 2.565ZM8 14C-7.333 4.543 3.28-2.837 7.824 1.067c.06.051.12.104.176.16.057-.056.115-.109.176-.16C12.72-2.838 23.334 4.544 8 14Z"
        />
      </svg>
    </picture>

    <RouterLink
      :to="{
        name: 'home'
      }"
      custom
      v-slot="{ navigate }"
    >
      <h3 v-on:click="navigate">{{ card.title }}</h3>
    </RouterLink>

    <RouterLink
      :to="{
        name: 'home'
      }"
      custom
      v-slot="{ navigate }"
    >
      <p v-on:click="navigate">{{ card.collection }}</p>
    </RouterLink>

    <p v-if="!small">
      {{ card.description }}
    </p>
  </article>
</template>

<style lang="scss" scoped>
article {
  display: grid;
  grid-template: 1fr / auto;
  gap: var(--scheme-gap);

  picture {
    position: relative;

    img {
      height: 100%;
    }

    svg {
      bottom: 20px;
      height: 16px;
      left: 20px;
      position: absolute;
      width: 16px;
    }
  }
}
</style>
