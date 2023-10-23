<script setup>
import { ref } from 'vue'
import heroComponent from '../components/heroComponent.vue'
import bannerComponent from '/src/components/bannerComponent.vue'
import cardComponent from '/src/components/cardComponent.vue'
import { useCardStore } from '/src/stores/useCards'

const store = useCardStore()

const index = ref(0)
</script>

<template>
  <main>
    <heroComponent></heroComponent>

    <section id="section_a" class="column">
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

    <section class="row_flex">
      <h2>Pretty in pink</h2>

      <div>
        <cardComponent
          v-for="card of store.array.slice(0, 5)"
          :key="card.id"
          :cards="card"
          :small="true"
        ></cardComponent>
      </div>

      <transition-group name="list">
        <div v-if="index > 0">
          <cardComponent
            v-for="card of store.array.slice(5, 10)"
            :key="card.id"
            :cards="card"
            :small="true"
          ></cardComponent>
        </div>
      </transition-group>

      <transition-group name="list">
        <div v-if="index > 1">
          <cardComponent
            v-for="card of store.array.slice(10, 15)"
            :key="card.id"
            :cards="card"
            :small="true"
          ></cardComponent>
        </div>
      </transition-group>
    </section>

    <h2 v-if="index !== 2" v-on:click="index += 1">Load more..</h2>
  </main>
</template>

<style scoped lang="scss">
main {
  section {
    margin: auto;
    max-width: 1200px;
    padding: var(--scheme-gap);
  }

  h2 {
    &:last-child {
      cursor: pointer;
      margin: var(--scheme-gap) auto;
      width: fit-content;
    }
  }
}

.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
}
</style>
