<script lang="js" setup>
import { errors, validateEmail, validatePassword } from '@/composables/validate'
import { ref } from 'vue'
// import { useSignin } from '../store/useSignin'

// const store = useSignin()

const form = ref({
  email: '',
  password: ''
})

const prepare = () => {
  validateEmail(form.value.email), validatePassword(form.value.password)

  if (errors.value.email === null && errors.value.password === null) {
    // store.update(form.value)

    console.log('Погнали')
  }
}
</script>

<template>
  <main>
    <section>
      <h1>Авторизация</h1>

      <form v-on:submit.prevent="prepare()">
        <label>
          Адрес эл.почты

          <input type="text" v-model.trim="form.email" />

          <small>{{ errors.email }}</small>
        </label>

        <label>
          Пароль

          <input type="password" v-model.trim="form.password" />

          <small>{{ errors.password }}</small>
        </label>

        <button type="submit">Войти</button>
      </form>
    </section>
  </main>
</template>

<style lang="scss" scoped>
main {
  display: grid;
  height: 100vh;
  padding: var(--scheme-gap);
  place-items: center;

  section {
    max-width: 600px;
    width: 100%;

    h1 {
      margin-left: clamp(20px, 4vw, 40px);
    }

    form {
      border: 1px solid #eee;
      display: grid;
      gap: var(--scheme-gap);
      margin: 40px 0 0;
      padding: clamp(20px, 4vw, 40px);

      label {
        input {
          border: 1px solid #eee;
          font: inherit;
          margin: 10px 0;
          padding: 10px;
          width: 100%;
        }

        small {
          color: crimson;
        }
      }

      button {
        background-color: #eee;

        &:hover {
          background-color: var(--color-theme);
          color: var(--color-v1);
        }
      }
    }
  }
}
</style>
