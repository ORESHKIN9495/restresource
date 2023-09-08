<script setup>
import { ref } from 'vue'

const array = ref([
  {
    id: 0,
    name: 'Le Gruyère',
    content: `Switzerland is known for a wide variety of amazing cheeses, but if there's one that has particularly captivated the world, it's Gruyere.`,
    picture: [
      'https://placehold.co/2048x1080/393B44/FFF.jpg',
      'https://placehold.co/2048x1080/393B44/FFF.webp'
    ],
    video: 'https://placehold.co/2048x1080/393B44/FFF.mp4'
  }
])
</script>

<template>
  <section v-for="item in array" :key="item.id">
    <article>
      <h1>{{ item.name }}</h1>
      <p>
        {{ item.content }}
      </p>

      <a>
        Новости недели

        <i>
          <svg>
            <use xlink:href="@/assets/images/sprite.svg#arrow" />
          </svg>
        </i>
      </a>
    </article>

    <video autoplay loop :src="item.video" :poster="item.picture[1]" />
  </section>
</template>

<style lang="scss" scoped>
section {
  background-color: #ffffff40;
  position: relative;

  article {
    color: #fff;
    display: flex;
    flex-direction: column;
    height: 100vh;
    margin: auto;
    max-width: 1200px;

    h1 {
      margin: auto 0 0;
    }

    p {
      max-width: 600px;
    }

    a {
      color: #fff;
      cursor: pointer;
      display: block;
      max-width: 200px;
      margin: auto 0 0;
      text-decoration: none;

      i {
        background-color: #ffffff40;
        display: block;
        margin-top: 10px;
        padding: var(--scheme-gap) calc(var(--scheme-gap) * 2);

        svg {
          height: 10px;
          margin: auto;
        }
      }
    }
  }

  video {
    height: 100vh;
    inset: 0;
    object-fit: cover;
    position: absolute;
    width: 100vw;
    z-index: -1;
  }
}
</style>
