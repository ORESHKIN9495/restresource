<script setup>
import TheCard from '../component/card/TheCard.vue'
import heroComponent from '../component/hero/heroComponent.vue'
</script>

<template>
  <main>
    <heroComponent></heroComponent>

    <section class="cards_block_a">
      <TheCard :small="false"></TheCard>
      <TheCard :small="true"></TheCard>
      <TheCard :small="true"></TheCard>
    </section>
  </main>
</template>

<style scoped lang="scss">
main {
  section {
    &.cards_block_a:deep() {
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
}
</style>
