<script setup>
// Определяем входные свойства компонента
const props = defineProps({
// Свойство maxWidth для задания максимальной ширины компонента
  maxWidth: {
    type: String,
    default: '300px'
  },
  // Обязательное свойство percent для задания процента выполнения
  percent: {
    type: Number,
    required: true
  },
  // Свойство color для задания цвета прогресс-бара
  color: {
    type: String,
    default: 'primary'
  }
})
</script>

<template>
    <!-- Основной контейнер для прогресс-бара с максимальной шириной -->
  <div class="progress-container" :style="[{'max-width': maxWidth}]">
    <!-- Текст с процентом выполнения, цвет которого определяется значением -->
    <span class="progress-percent" :style="[{'color': `var(--${color})`}]">{{percent}}%</span>
    <!-- Контейнер для прогресс-бара с фоновым цветом -->
    <div class="progress" :style="[{'background': `var(--${color}-hover)`}]">
    <!-- Сам прогресс-бар с шириной и фоновым цветом -->
      <div class="progress-bar" :style="[{'width': `${percent}%`}, {'background': `var(--${color})`}]"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.progress {
  height: 10px;
  border-radius: 4px;
  &-container {
    margin-bottom: 20px;
    overflow: hidden;
  }
  &-bar {
    background: #000;
    height: 100%;
    border-radius: 4px;
    transition: .5s;
  }
  &-percent {
    display: block;
    text-align: center;

    font-weight: bold;
    font-size: 17px;
    margin-bottom: 10px;
  }
}
</style>