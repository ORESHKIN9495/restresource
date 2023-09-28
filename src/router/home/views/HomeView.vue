<script setup>
import bannerComponent from '../components/bannerComponent.vue'
import cardComponent from '../components/cardComponent.vue'
import heroComponent from '../components/heroComponent.vue'
import { useCardStore } from '../store/card'

const store = useCardStore()
</script>

<template>
  <main>
    <heroComponent></heroComponent>

    <section class="column">
      <h2>The bright shades of winter</h2>

      <cardComponent
        v-for="card of store.array.slice(0, 3)"
        :key="card.id"
        :cards="card"
        :small="card.id != 1"
      ></cardComponent>
    </section>

    <section class="row">
      <h2>Pretty in pink</h2>

      <cardComponent
        v-for="card of store.array.slice(0, 5)"
        :key="card.id"
        :cards="card"
        :small="true"
      ></cardComponent>
    </section>

    <bannerComponent></bannerComponent>

    <section class="column">
      <h2>The bright shades of winter</h2>

      <cardComponent
        v-for="card of store.array.slice(0, 3)"
        :key="card.id"
        :cards="card"
        :small="card.id != 1"
      ></cardComponent>
    </section>

    <section class="row">
      <h2>Pretty in pink</h2>

      <cardComponent
        v-for="card of store.array.slice(0, 5)"
        :key="card.id"
        :cards="card"
        :small="true"
      ></cardComponent>
    </section>
  </main>
</template>

<style scoped lang="scss">
main {
  section {
    margin: auto;
    max-width: 1200px;
    padding: var(--scheme-gap);
  }
}

.column {
  display: grid;
  grid-template: auto / repeat(3, 1fr);
  gap: var(--scheme-gap);

  h2 {
    grid-column: 1 / 4;
  }

  article {
    &:first-of-type {
      grid-area: 2 / 1 / 4 / 3;
    }
  }

  @media only screen and (max-width: 920px) {
    grid-template: auto / repeat(2, 1fr);

    h2 {
      grid-column: 1 / 3;
    }
  }

  @media only screen and (max-width: 720px) {
    grid-template: auto / 1fr;

    h2 {
      grid-column: unset;
    }

    article {
      &:first-of-type {
        grid-area: unset;
      }
    }
  }
}

.row {
  display: grid;
  grid-template: auto / repeat(5, 1fr);
  gap: var(--scheme-gap);

  h2 {
    grid-column: 1 / 6;
  }

  @media only screen and (max-width: 720px) {
    grid-template: auto / 1fr;

    h2 {
      grid-column: unset;
    }
  }
}
</style>
