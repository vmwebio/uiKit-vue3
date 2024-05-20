<script setup>
import {ref, computed} from 'vue'
import useVuelidate from '@vuelidate/core'
import {helpers, minLength, maxLength, numeric, email, sameAs, required} from '@vuelidate/validators'

import Input from '@/components/ui/Input.vue'
import Button from '@/components/ui/Button.vue'

// Определяем поля формы как реактивные переменные
const nameField = ref('')
const emailField = ref('')
const luckyField = ref('')
const passwordField = ref('')
const confirmPasswordField = ref('')
const frontendField = ref('')


// Определяем кастомный валидатор для проверки наличия слова "frontend"
const mustBeFrontend = (value) => value.includes('frontend');


// Определяем правила валидации с кастомными сообщениями об ошибках
const rules = computed(() => ({
  nameField: {
    required: helpers.withMessage('Поле не должно быть пустым', required),
    minLength: helpers.withMessage(`Минимальная длина: 3 символа`, minLength(3))
  },
  emailField: {
    required: helpers.withMessage('Поле не должно быть пустым', required),
    email: helpers.withMessage('Вы ввели неверный email', email)
  },
  luckyField: {
    maxLength: helpers.withMessage(`Максимальная длина: 2 символа`, maxLength(3)),
    numeric: helpers.withMessage('Вы можете ввести только цифры', numeric)
  },
  passwordField: {
    required: helpers.withMessage('Поле не должно быть пустым', required),
    minLength: helpers.withMessage(`Минимальная длина: 6 символа`, minLength(6)),
    numeric: helpers.withMessage('Вы можете ввести только цифры', numeric)
  },
  confirmPasswordField: {
    required: helpers.withMessage('Поле не должно быть пустым', required),
    sameAsPassword: helpers.withMessage(`Пароли не совпадают`, sameAs(passwordField.value))
  },
  frontendField: {
    frontendField: helpers.withMessage('Строка должна содержать слово frontend', mustBeFrontend)
  }
}))

// Инициализируем Vuelidate для отслеживания состояния валидации
const v = useVuelidate(rules, {nameField, emailField, luckyField, passwordField, confirmPasswordField, frontendField})

// Функция для отправки формы
const submitForm = () => {
  v.value.$touch()
  if (v.value.$error) return
  alert('Form submitted')
}
</script>

<template>
  <h1 class="heading-1">Inputs</h1>

  <form @submit.prevent="submitForm">
    <Input
      label="Your name"
      name="name"
      placeholder="Input your name"
      v-model:value="v.nameField.$model"
      :error="v.nameField.$errors"/>
      
    <Input
      label="Your email"
      name="email"
      placeholder="Input your email"
      v-model:value="v.emailField.$model"
      :error="v.emailField.$errors"/>
      
    <Input
      label="Your lucky number"
      name="lucky"
      placeholder="Input your lucky number"
      v-model:value="v.luckyField.$model"
      :error="v.luckyField.$errors"/>
      
    <Input
      label="Your password"
      name="password"
      placeholder="Please input password"
      v-model:value="v.passwordField.$model"
      :error="v.passwordField.$errors"
      type="password"/>
      
    <Input
      label="Confirm password"
      name="confirm"
      placeholder="Please confirm password"
      v-model:value="v.confirmPasswordField.$model"
      :error="v.confirmPasswordField.$errors"
      type="password"/>

    <Input
      label="Frontend string"
      name="frontend"
      placeholder="Input string with frontend"
      v-model:value="v.frontendField.$model"
      :error="v.frontendField.$errors"/>

    <Button label="Submit" color="primary"></Button>
  </form>
</template>