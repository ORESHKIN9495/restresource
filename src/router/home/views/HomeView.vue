<script setup>
import TheCard from '../component/card/TheCard.vue'
import heroComponent from '../component/hero/heroComponent.vue'

import { useCardStore } from '../stores/card/card'

const store = useCardStore()
</script>

<template>
  <main>
    <heroComponent></heroComponent>

    <section>
      <TheCard
        v-for="card of store.array.slice(0, 3)"
        :key="card.id"
        :cards="card"
        :small="card.id != 1"
      ></TheCard>
    </section>
  </main>
</template>

<style scoped lang="scss">
main {
  section {
    display: grid;
    grid-template: auto / repeat(3, 1fr);
    gap: var(--scheme-gap);
    max-width: 1200px;
    margin: auto;
    padding: var(--scheme-gap);

    article {
      &:first-child {
        grid-area: 1 / 1 / 3 / 3;
      }
    }

    @media only screen and (max-width: 920px) {
      grid-template: auto / repeat(2, 1fr);
    }

    @media only screen and (max-width: 720px) {
      grid-template: auto / 1fr;

      article {
        &:first-child {
          grid-area: auto;
        }
      }
    }
  }
}
</style>
