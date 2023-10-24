<script setup>
import footerComponent from './components/footerComponent.vue'
import headerComponent from './components/header/headerComponent.vue'
</script>

<template>
  <headerComponent></headerComponent>

  <RouterView />

  <footerComponent></footerComponent>
</template>

<style lang="scss">
:root {
  --color-theme: #393b44;
  --color-theme-alpha: 57, 59, 68;

  --color-v1: #fff;

  --color-background: linear-gradient(180deg, #f1f1f1 0%, rgba(255, 255, 255, 0) 44.27%);

  --scheme-gap: 20px;

  --size-text: 15px;

  --scheme-font: system-ui, sans-serif;

  --scheme-shadow: 0 20px 20px -20px rgba(40, 40, 40, 0.7098039216);
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  background-color: var(--color-background);
  color: var(--color-theme);
  font: 300 var(--size-text) / 1.62 var(--scheme-font);
}

h1 {
  font: inherit;
  font-size: clamp(24px, 4vw, 36px);
}

h2 {
  font: inherit;
  font-size: clamp(18px, 4vw, 24px);
}

h3 {
  font: inherit;
  font-size: clamp(16px, 4vw, 20px);
}

input {
  border: none;
  outline: none;
}

img {
  object-fit: cover;
  width: 100%;
}

picture {
  display: block;
}

svg {
  cursor: pointer;
  display: block;
}

ul {
  list-style: none;
}

button {
  background: none;
  border: none;
  color: inherit;
  outline: none;
  padding: 20px 40px;
}

.column {
  display: grid;
  grid-template: auto / repeat(3, 1fr);
  gap: var(--scheme-gap);

  h2 {
    grid-column: 1 / 4;
  }

  article {
    &:first-of-type {
      grid-area: 2 / 1 / 4 / 3;
    }
  }

  @media only screen and (max-width: 920px) {
    grid-template: auto / repeat(2, 1fr);

    h2 {
      grid-column: 1 / 3;
    }
  }

  @media only screen and (max-width: 720px) {
    grid-template: auto / 1fr;

    h2 {
      grid-column: unset;
    }

    article {
      &:first-of-type {
        grid-area: unset;
      }
    }
  }
}

.row {
  display: grid;
  grid-template: auto / repeat(5, 1fr);
  gap: var(--scheme-gap);

  h2 {
    grid-column: 1 / 6;
  }

  &_flex {
    div {
      display: flex;
      flex-wrap: wrap;
      margin: 0 -10px;

      article {
        flex: 0 0 33.333%;
        padding: 20px 10px 0;

        &:nth-last-child(-n + 2) {
          flex: 0 0 50%;
        }
      }
    }
  }

  @media only screen and (max-width: 720px) {
    grid-template: auto / 1fr;

    h2 {
      grid-column: unset;
    }

    &_flex {
      div {
        article {
          flex: 0 0 50%;

          &:last-child {
            flex: 0 0 100%;
          }
        }
      }
    }
  }
}
</style>
