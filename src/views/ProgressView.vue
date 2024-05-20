<script setup>
import {ref} from 'vue'
import ProgressBar from '@/components/ui/progress/ProgressBar.vue'
import ProgressCircle from '@/components/ui/progress/ProgressCircle.vue'
import Button from '@/components/ui/Button.vue'

// Создаем реактивные переменные для процентов прогресс-бара и прогресс-круга
const percentBar = ref(40)
const percentCircle = ref(60)

// Функция для увеличения процента прогресс-бара на 10
const addPercentBar = () => {
  percentBar.value += 10
  // Проверка, чтобы значение не превышало 100
  if (percentBar.value > 100) {
    percentBar.value = 100
  }
}

// Функция для увеличения процента прогресс-круга на 10
const addPercentCircle = () => {
  percentCircle.value += 10
  // Проверка, чтобы значение не превышало 100
  if (percentCircle.value > 100) {
    percentCircle.value = 100
  }
}
</script>

<template>
  <h1 class="heading-1">Progress</h1>
  <h2 class="heading-2">Progress Bar</h2>
  <div class="line line_block">
    <!-- Компонент ProgressBar с максимальной шириной, процентом и цветом -->
    <ProgressBar maxWidth="400px" :percent="percentBar" color="danger"/>
    <!-- Кнопка для увеличения процента прогресс-бара -->
    <Button label="Add 10%" @click="addPercentBar"/>
  </div>
  <h2 class="heading-2">Progress Circle</h2>
  <div class="line line_block">
    <!-- Компонент ProgressCircle с процентом и цветом -->
    <ProgressCircle :percent="percentCircle" color="warning"/>
    <!-- Кнопка для увеличения процента прогресс-круга -->
    <Button label="Add 10%" @click="addPercentCircle"/>
  </div>
</template>