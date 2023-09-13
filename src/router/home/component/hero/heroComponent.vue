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
          <svg xmlns="http://www.w3.org/2000/svg" id="arrow" fill="none" viewBox="0 0 14 8">
            <path
              fill="var(--color-theme)"
              fill-rule="evenodd"
              d="M.646.646a.5.5 0 0 1 .708 0L7 6.293 12.646.646a.501.501 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708Z"
              clip-rule="evenodd"
            />
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
          height: 10px;
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
