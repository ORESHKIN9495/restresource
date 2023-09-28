<script lang="js" setup>
const props = defineProps({
  data: Object,
  color: Boolean
})
</script>

<template>
  <article>
    <h2>{{ props.data.title }}</h2>

    <svg :class="{ gold: color }">
      <use xlink:href="/src/assets/images/sprites.svg#knife"></use>
    </svg>

    <strong><sup>₽</sup>{{ props.data.price }}</strong>

    <span>
      <p>в месяц</p>
      <p v-if="props.data.equal != null">Эквивалентно ₽{{ props.data.equal }} за 12 месяцев</p>

      <p>-ИЛИ-</p>
      <p>Ежемесячное членство:</p>

      <p v-if="props.data.monthly != null">₽{{ props.data.monthly }} в месяц</p>
    </span>

    <hr :class="{ color: color }" />

    <ul>
      <li><h3>Что вы получите:</h3></li>
      <li v-for="el of props.data.get" :key="el">{{ el }}</li>
    </ul>

    <button :class="{ color: color }">Подтвердить</button>
  </article>
</template>

<style lang="scss" scoped>
article {
  display: grid;
  gap: calc(var(--scheme-gap) * 1.5);
  height: fit-content;
  place-items: center;
  padding: calc(var(--scheme-gap) * 2);
  text-align: center;

  svg {
    height: 20px;
    width: 147px;
  }

  strong {
    font-size: 30px;
  }

  hr {
    border: none;
    border: 0.5px solid var(--color-theme);
    width: 100px;

    &.color {
      border-color: #bba250;
    }
  }

  ul {
    display: grid;
    gap: var(--scheme-gap);
    text-align: left;

    li {
      list-style: disc;

      &:first-of-type {
        list-style: none;
        margin: auto;
      }
    }
  }

  button {
    border: 1px solid var(--color-theme);
    &.color {
      border-color: #bba250;
    }

    &:hover {
      background-color: var(--color-theme);
      color: var(--color-v1);

      &.color {
        background-color: #bba250;
        color: var(--color-theme);
      }
    }
  }
}
</style>
