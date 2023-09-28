<script lang="js" setup>
import clubComponent from '../components/clubComponent.vue'
import faqComponent from '../components/faqComponent.vue'
import planComponent from '../components/planComponent.vue'
import { usePlanStore } from '../store/usePlan'

const store = usePlanStore()
</script>

<template>
  <main>
    <section>
      <h1>Присоединяйся к нам</h1>

      <p>
        Станьте участником нашего клуба и получите неограниченный доступ к более чем 10 000
        рецептов, информационного материала, руководств и видео, а также множество других
        преимуществ и привилегий.
      </p>

      <p>
        Уже являетесь членом клуба? Войдите в клуб через меню в заголовке, а затем вернитесь на эту
        страницу для повышения статуса.
      </p>
    </section>

    <section>
      <planComponent
        v-for="el of store.array"
        :key="el.id"
        :data="el"
        :color="true ? el.id == 3 : false"
      ></planComponent>
    </section>

    <clubComponent></clubComponent>

    <faqComponent></faqComponent>
  </main>
</template>

<style lang="scss" scoped>
main {
  section {
    display: grid;
    margin: auto;
    max-width: 1200px;
    padding: var(--scheme-gap);
    justify-items: center;

    &:first-child {
      background-color: #393b44;
      gap: calc(var(--scheme-gap) * 2);
      color: var(--color-v1);
      padding: clamp(20px, 4vw, 100px);
      place-items: center;
      margin-top: 140px;

      p {
        max-width: 780px;
      }
    }

    &:nth-child(2) {
      grid-template: auto / repeat(3, 1fr);
      gap: var(--scheme-gap);

      article {
        background-color: #eee;

        &:last-child {
          background-color: #393b44;
          color: #bba250;
        }
      }

      @media only screen and (max-width: 920px) {
        grid-template: auto / 1fr;
      }
    }
  }
}
</style>
