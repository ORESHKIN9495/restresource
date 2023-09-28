<script lang="js" setup></script>

<template>
  <section>
    <svg>
      <use xlink:href="/src/assets/images/sprites.svg#knife"></use>
    </svg>

    <h2>Откройте для себя Клуб</h2>

    <p>
      Общайтесь с лучшими шеф-поварами как никогда раньше. Готовьте по их рецептам, смотрите, как
      они создают свои любимые блюда, и получайте беспрецедентное представление о том, что
      заставляет их работать, превращая вас в лучшего повара, каким вы только можете быть.
    </p>

    <video
      autoplay
      loop
      src="https://placehold.co/2048x1080/393B44/FFF.mp4"
      poster="https://placehold.co/2048x1080/393B44/FFF.webp"
    />
  </section>
</template>

<style lang="scss" scoped>
section {
  display: grid;
  gap: calc(var(--scheme-gap) * 2);

  p {
    max-width: 550px;
  }

  video {
    height: 100%;
    object-fit: cover;
    width: 100%;
  }

  svg {
    height: 20px;
    width: 147px;
  }
}
</style>
