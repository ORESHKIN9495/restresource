<script setup>
import heroComponent from '../components/heroComponent.vue'
import bannerComponent from '/src/components/bannerComponent.vue'
import cardComponent from '/src/components/cardComponent.vue'
import { useCardStore } from '/src/stores/card'

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
</style>
