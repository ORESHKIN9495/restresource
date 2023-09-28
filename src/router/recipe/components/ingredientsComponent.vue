<script lang="js" setup>
import { ref } from 'vue'
const array = ref([
  {
    id: 1,
    title: 'For the filling',
    ingredients: [
      '250g of wild mushrooms, thinly sliced',
      '25g of butter',
      '25g of plain flour',
      '250ml of Arla Cravendale whole milk',
      '60g of cheddar, preferably Montgomery, grated',
      '1 tsp tarragon, chopped',
      '1 tbsp of parsley, chopped',
      '2 garlic cloves, minced',
      '2 tsp truffle oil',
      '3 tbsp of cep powder salt pepper For the buns 300ml of water',
      '2 pinches of salt',
      '1 tsp sugar 115g of butter 150g of plain flour',
      '4 eggs milk Parmesan, grated'
    ]
  },
  {
    id: 2,
    title: 'For the buns',
    ingredients: [
      '300ml of water',
      '2 pinches of salt',
      '1 tsp sugar',
      '115g of butter',
      '150g of plain flour',
      '4 eggs',
      'milk',
      'Parmesan, grated'
    ]
  }
])
</script>

<template>
  <article>
    <span>
      <h3>Ingredients</h3>

      <svg>
        <use xlink:href="/src/assets/images/sprites.svg#heart"></use>
      </svg>

      <svg>
        <use xlink:href="/src/assets/images/sprites.svg#print"></use>
      </svg>
    </span>

    <ul v-for="el of array.slice(0, 1)" :key="el.id">
      <li>
        <h3>{{ el.title }}</h3>
      </li>
      <li v-for="i of el.ingredients" :key="i">{{ i }}</li>
    </ul>

    <ul v-for="el of array.slice(1, 2)" :key="el.id">
      <li>
        <h3>{{ el.title }}</h3>
      </li>
      <li v-for="i of el.ingredients" :key="i">{{ i }}</li>
    </ul>
  </article>
</template>

<style lang="scss" scoped>
article {
  border: 1px solid #eee;
  height: fit-content;
  padding: var(--scheme-gap);

  span {
    display: grid;
    grid-template: auto / 1fr repeat(2, auto);
    gap: var(--scheme-gap);
  }

  svg {
    height: 18px;
    width: 18px;
  }
}

ul {
  li {
    &:first-of-type {
      margin: var(--scheme-gap) 0;
    }
  }
}
</style>
