import { ref } from 'vue'

const errors = ref({
  email: null,
  password: null
})

// eslint-disable-next-line
const mailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

const validateEmail = (email) => {
  if (email.length > 6 && mailRegex.test(email)) {
    errors.value.email = null
  } else {
    errors.value.email = 'Введите корректный адрес эл.почты'
  }
}

const validatePassword = (password) => {
  if (password.length >= 6) {
    errors.value.password = null
  } else {
    errors.value.password = 'Введите корректный пароль'
  }
}

export { errors, validateEmail, validatePassword }
