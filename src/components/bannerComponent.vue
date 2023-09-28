<script lang="js" setup>
// do smth
</script>

<template>
  <section>
    <article>
      <h2>Latest recipe videos</h2>
      <p>
        Have you taken a look at our Signature Series yet? Every Friday we release a brand new
        masterclass from one of our chefs, where they'll show you how to recreate their favourite
        dishes at home – exclusively for Great British Chefs Club member
      </p>

      <button>Watch now</button>
    </article>
  </section>
</template>

<style lang="scss" scoped>
section {
  article {
    background-color: #393b44;
    display: grid;
    gap: calc(var(--scheme-gap) * 2);
    color: var(--color-v1);
    padding: clamp(20px, 4vw, 100px);
    place-items: center;

    p {
      max-width: 780px;
    }

    button {
      background-color: none;
      border: 1px solid var(--color-v1);
      width: fit-content;
    }
  }
}
</style>
