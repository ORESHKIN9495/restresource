<script lang="js" setup>
import { ref } from 'vue'

const array = ref([
  {
    step: 1,
    method:
      'Begin by preparing the choux pastry. Place the water, salt, sugar and butter in a small pan and bring to the boil. Remove from the heat, then add the flour and mix well with a wooden spoon',
    list: [
      '300ml of water',
      '2 pinches of salt',
      '1 tsp sugar',
      '115g of butter',
      '150g of plain flour'
    ]
  },
  {
    step: 2,
    method:
      'Return to a low heat and mix well for 45 seconds to dry the mix slightly. Remove from the heat again and mix in the eggs one by one, stirring well with a spoon after each addition. Once the eggs are incorporated, set aside to cool',
    list: ['4 eggs']
  },
  {
    step: 3,
    method:
      'Meanwhile, prepare the filling. Melt the butter in a small saucepan until foaming and golden brown, then add the flour. Stir well with a wooden spoon, pour in the milk and mix well with a whisk to remove any lumps. Season, add the grated cheddar, then taste and season to taste. Set aside',
    list: [
      '25g of butter',
      '25g of plain flour',
      '250ml of milk',
      '60g of cheddar, preferably Montgomery, grated',
      'salt',
      'pepper'
    ]
  },
  {
    step: 4,
    method: 'Preheat the oven to 170°C/gas mark 3.5'
  },
  {
    step: 5,
    method:
      'Transfer the choux mixture to a piping bag and pipe balls of pastry onto a baking sheet lined with greaseproof paper, approximately the size of large olives. Repeat until all of the mixture is used up'
  },
  {
    step: 6,
    method:
      'Dip a pastry brush in a little milk and very lightly brush the top of each choux bun, gently pushing down the soft peaks',
    list: ['milk']
  },
  {
    step: 7,
    method:
      'Sprinkle the top of the buns with a little Parmesan, then bake in the oven for approximately 10 minutes, or until golden brown and dried on the outside',
    list: ['Parmesan, grated ']
  },
  {
    step: 8,
    method:
      'Heat a dash of olive oil in a frying pan over a medium heat. Once the oil is hot, cook the mushrooms for 5-6 minutes until all the moisture has been released. Lower the heat, add the garlic and cook out for 1-2 minutes. Finish with the parsley and tarragon, then remove from the heat and chop the mixture very finely on a chopping board',
    list: [
      '250g of wild mushrooms, thinly sliced',
      '1 tsp tarragon',
      '1 tbsp of parsley',
      '2 garlic cloves, minced'
    ]
  },
  {
    step: 9,
    method:
      'Stir the mushrooms through the cheese sauce, add the truffle oil and place in a piping bag with a small cut at the end. Fill each of the choux buns, then dip the top of each bun in the cep powder to lightly coat. Arrange the buns on a platter decorated with mushrooms and serve',
    list: ['3 tbsp of cep powder', '2 tsp truffle oil']
  }
])
</script>

<template>
  <article>
    <h2>Method</h2>

    <ul v-for="el of array" :key="el.step">
      <li>
        <strong>{{ el.step }}</strong>

        {{ el.method }}
      </li>
      <li v-for="i of el.list" :key="i">{{ i }}</li>
    </ul>
  </article>
</template>

<style lang="scss" scoped>
article {
  display: grid;
  gap: var(--scheme-gap);

  ul {
    li {
      list-style: disc;
      margin: 0 calc(var(--scheme-gap) * 2);

      &:first-of-type {
        list-style: none;
        margin: var(--scheme-gap) 0;
      }

      strong {
        font-size: 20px;
        margin-right: 10px;
      }
    }
  }
}
</style>
