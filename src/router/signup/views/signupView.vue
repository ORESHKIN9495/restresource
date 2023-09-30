<!-- eslint-disable for-direction -->
<!-- eslint-disable no-sparse-arrays -->
<script lang="js" setup>
import {
  errors,
  validateChecked,
  validateDate,
  validateEmail,
  validateFirstName,
  validateLastName,
  validatePassword
} from '@/composables/validate'

import { ref } from 'vue'
// import { useSignin } from '../store/useSignin'

// const store = useSignin()

const index = ref()

const form = ref({
  email: '',
  password: '',
  confirmed: '',
  firstName: '',
  lastName: '',
  checked: false,
  date: []
})

const prepare = () => {
  validateEmail(form.value.email),
    validatePassword(form.value.password, form.value.confirmed),
    validateFirstName(form.value.firstName),
    validateLastName(form.value.lastName),
    validateDate(form.value.date),
    validateChecked(form.value.checked)

  if (
    errors.value.email === null &&
    errors.value.password === null &&
    errors.value.firstName === null &&
    errors.value.lastName === null &&
    errors.value.date === null &&
    errors.value.checked === null
  ) {
    // store.update(form.value)

    console.log('Погнали')
  }
}

const dates = ref([
  {
    title: 'День',
    options: []
  },
  {
    title: 'Месяц',
    options: [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December'
    ]
  },
  {
    title: 'Год',
    options: []
  }
])

for (let i = 2023; i > 1960; i--) {
  dates.value[2].options.push(i)
}

for (let i = 1; i < 32; i++) {
  dates.value[0].options.push(i)
}
</script>

<template>
  <main>
    <section>
      <h1>Регистрация</h1>

      <form v-on:submit.prevent="prepare()">
        <label>
          Адрес эл.почты

          <input type="text" v-model.trim="form.email" />

          <small>{{ errors.email }}</small>
        </label>

        <label>
          Имя

          <input type="text" v-model.trim="form.firstName" />

          <small>{{ errors.firstName }}</small>
        </label>

        <label>
          Фамилия

          <input type="text" v-model.trim="form.lastName" />

          <small>{{ errors.lastName }}</small>
        </label>

        <label>
          Пароль

          <input type="password" v-model.trim="form.password" />

          <small>{{ errors.password }}</small>
        </label>

        <label>
          Подтвердите пароль

          <input type="password" v-model.trim="form.confirmed" />

          <small>{{ errors.password }}</small>
        </label>

        <label>
          <p>День рождения</p>

          <ul v-for="(el, idx) of dates" :key="el.title" v-on:click="index = idx">
            <li>{{ el.title }}</li>

            <svg :class="{ active: index == idx }">
              <use xlink:href="/src/assets/images/sprites.svg#chevron"></use>
            </svg>

            <span v-show="index == idx">
              <li
                v-for="i of el.options"
                :key="i"
                v-on:click="(form.date[idx] = i), (idx = null), (el.title = i)"
              >
                {{ i }}
              </li>
            </span>
          </ul>

          <small>{{ errors.date }}</small>
        </label>

        <label>
          <input type="checkbox" v-on:click="form.checked = !form.checked" />

          <p>Я принимаю Политику конфиденциальности и Положения и условия restresource.ru</p>

          <small>{{ errors.checked }}</small>
        </label>

        <div>
          <button type="submit">Регистрация</button>
          <button type="button">Назад</button>
        </div>

        <p>
          Все права защищены restresource.ru
          <a href="/">Условия и положения </a>
          и
          <a href="/"> политика конфиденциальности</a>
        </p>
      </form>
    </section>
  </main>
</template>

<style lang="scss" scoped>
main {
  display: grid;
  padding: var(--scheme-gap);
  place-items: center;
  margin: 140px auto auto;

  section {
    max-width: 600px;

    h1 {
      margin-left: clamp(20px, 4vw, 40px);
    }

    form {
      border: 1px solid #eee;
      display: grid;
      gap: var(--scheme-gap);
      margin: 40px 0;
      padding: clamp(20px, 4vw, 40px);

      label {
        input {
          border: 1px solid #eee;
          font-size: 18px;
          margin: 10px 0;
          padding: 10px;
          width: 100%;
        }

        small {
          color: crimson;
        }

        &:nth-child(6) {
          display: grid;
          grid-template: auto / repeat(3, 1fr);
          gap: var(--scheme-gap);

          p,
          small {
            grid-column: 1 / 4;
          }

          ul {
            border: 1px solid #eee;
            display: grid;
            grid-template: auto / 1fr auto;
            place-items: center;
            padding: 10px;
            position: relative;

            li {
              margin: 0 auto;
            }

            svg {
              height: 12px;
              transition: 0.3s ease;
              width: 12px;

              &.active {
                transform: rotate(90deg);
              }
            }

            span {
              border: 1px solid #eee;
              background-color: #fff;
              position: absolute;
              inset: 44px 0 0 0;
              height: 200px;
              overflow-y: scroll;
              width: 100%;
              z-index: 999;

              li {
                cursor: pointer;
                padding: 10px;

                &:hover {
                  background-color: rgba(var(--color-theme-alpha), 0.1);
                }
              }
            }
          }

          @media only screen and (max-width: 720px) {
            grid-template: auto / 1fr;

            p,
            small {
              grid-column: auto;
            }
          }
        }

        &:last-of-type {
          display: grid;
          grid-template: auto / auto 1fr;
          gap: var(--scheme-gap);

          p {
            font-size: 12px;
          }

          input {
            width: fit-content;
          }

          small {
            grid-column: 1 / 3;
          }

          @media only screen and (max-width: 720px) {
            grid-template: auto / 1fr;

            small {
              grid-column: auto;
            }
          }
        }
      }

      div {
        display: grid;
        grid-template: auto / repeat(2, 1fr);
        gap: var(--scheme-gap);

        button {
          background-color: #eee;

          &:hover {
            background-color: var(--color-theme);
            color: var(--color-v1);
          }
        }

        @media only screen and (max-width: 720px) {
          grid-template: auto / 1fr;
        }
      }

      a {
        color: var(--color-theme);
      }
    }
  }
}
</style>
