<script setup>
import { ref, watchEffect } from 'vue'

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

const move = ref(false)

watchEffect(() => {
  if (move.value == true) {
    window.scrollBy({
      top: 1190,
      behavior: 'smooth'
    })

    setTimeout(() => {
      move.value = false
    }, 0)
  }
})
</script>

<template>
  <section v-for="item in array" :key="item.id">
    <article>
      <h1>{{ item.name }}</h1>
      <p>
        {{ item.content }}
      </p>

      <a v-on:click="move = true">
        Новости недели

        <i>
          <svg>
            <use xlink:href="/src/assets/images/sprites.svg#chevron"></use>
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
  height: calc(100vh - 140px);
  margin: 140px auto 0;

  article {
    color: var(--color-v1);
    display: flex;
    flex-direction: column;
    height: 100%;
    margin: auto;
    max-width: 1200px;
    padding: 0 var(--scheme-gap);

    h1 {
      margin: auto 0 0;
    }

    p {
      max-width: 600px;
    }

    a {
      color: var(--color-v1);
      cursor: pointer;
      max-width: 200px;
      margin: auto 0 0;

      i {
        background-color: #ffffff40;
        display: block;
        margin-top: 10px;
        padding: var(--scheme-gap) calc(var(--scheme-gap) * 2);

        svg {
          height: 24px;
          margin: auto;
          width: 24px;
        }
      }
    }
  }

  video {
    height: 100%;
    inset: 0;
    object-fit: cover;
    position: absolute;
    width: 100%;
    z-index: -1;
  }
}

@media only screen and (max-width: 920px) {
  section {
    height: calc(100vh - 90px);
    margin: 90px auto 0;
  }
}
</style>
