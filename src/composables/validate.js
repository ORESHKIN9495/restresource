import { ref } from 'vue'

const errors = ref({
  email: null,
  password: null,
  lastName: null,
  firstName: null,
  checked: null,
  date: null
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
const validateFirstName = (firstName) => {
  if (firstName.length > 0) {
    errors.value.firstName = null
  } else {
    errors.value.firstName = 'Введите корректное имя'
  }
}

const validateLastName = (lastName) => {
  if (lastName.length > 0) {
    errors.value.lastName = null
  } else {
    errors.value.lastName = 'Введите корректную фамилию'
  }
}

const validateDate = (date) => {
  if (date.length === 3) {
    errors.value.date = null
  } else {
    errors.value.date = 'Введите день своего рождения'
  }
}

const validateChecked = (checked) => {
  if (checked === true) {
    errors.value.checked = null
  } else {
    errors.value.checked = ' Вы должны принять условия restresource.ru'
  }
}

const validatePassword = (password, confirmed) => {
  if (password.length >= 6) {
    errors.value.password = null

    if (confirmed === password) {
      errors.value.password = null
    } else {
      errors.value.password = 'Пароли не совпадают'
    }
  } else {
    errors.value.password = 'Введите корректный пароль'
  }
}

export {
  errors,
  validateChecked,
  validateDate,
  validateEmail,
  validateFirstName,
  validateLastName,
  validatePassword
}
