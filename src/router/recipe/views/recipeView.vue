<script lang="js" setup>
import { ref } from 'vue'
import ingredientsComponent from '../components/ingredientsComponent.vue'
import methodComponent from '../components/methodComponent.vue'
import bannerComponent from '/src/components/bannerComponent.vue'
import cardComponent from '/src/components/cardComponent.vue'
import { useCardStore } from '/src/stores/card'

const store = useCardStore()

const array = ref([
  {
    id: 0,
    picture: [
      'https://placehold.co/2048x1080/393B44/FFF.jpg',
      'https://placehold.co/2048x1080/393B44/FFF.webp'
    ]
  }
])
</script>

<template>
  <main>
    <section>
      <h1>Wild mushroom choux buns</h1>

      <RouterLink
        :to="{
          name: 'recipe'
        }"
        custom
        v-slot="{ navigate }"
      >
        <p v-on:click="navigate">by <span>Bruno Loubet</span></p>
      </RouterLink>
    </section>

    <section>
      <picture v-for="image of array" :key="image.id">
        <source type="image/webp" :srcset="image.picture[1]" />
        <img :src="image.picture[0]" loading="lazy" />
      </picture>

      <article>
        <ul>
          <li>
            <svg>
              <use xlink:href="/src/assets/images/sprites.svg#dishes"></use>
            </svg>

            Canape
          </li>

          <li>
            <svg>
              <use xlink:href="/src/assets/images/sprites.svg#network"></use>
            </svg>

            Medium
          </li>

          <li>
            <svg>
              <use xlink:href="/src/assets/images/sprites.svg#time"></use>
            </svg>

            60 minutes
          </li>
        </ul>

        <p>
          Bruno Loubet's mushroom choux bun recipe offers a seasonal burst of flavour, with a rich
          cheesy mushroom filling delicately encased by warm choux pastry and dusted with cep powder
          for a powerful umami flavour. Bruno serves these canapés warm, so either pipe the warm
          mixture into the choux buns or warm them through in the oven after assembling. To make
          these canapés fully vegetarian, swap out the Parmesan for a veggie alternative.
        </p>

        <p>First published in 2015</p>
      </article>
    </section>

    <section class="row">
      <h2>Related recipes</h2>

      <cardComponent
        v-for="card of store.array.slice(0, 5)"
        :key="card.id"
        :cards="card"
        :small="true"
      ></cardComponent>
    </section>

    <section>
      <ingredientsComponent></ingredientsComponent>
      <methodComponent></methodComponent>
    </section>

    <bannerComponent></bannerComponent>
  </main>
</template>

<style lang="scss" scoped>
main {
  section {
    margin: auto;
    max-width: 1200px;
    padding: var(--scheme-gap);

    p {
      span {
        text-decoration: underline;
      }
    }

    &:first-child {
      margin: 140px auto 0;
    }

    &:nth-child(2) {
      display: grid;
      grid-template: auto / repeat(2, 1fr);
      gap: var(--scheme-gap);

      article {
        display: grid;
        gap: var(--scheme-gap);
        height: fit-content;

        ul {
          display: grid;
          grid-template: auto / repeat(2, auto) 1fr;
          gap: var(--scheme-gap);

          li {
            align-items: center;
            display: flex;
            gap: 10px;

            svg {
              height: 18px;
              width: 18px;
            }
          }
        }
      }
    }

    &:nth-child(4) {
      display: grid;
      grid-template: auto / auto 1fr;
      gap: var(--scheme-gap);
    }
  }
}
</style>
