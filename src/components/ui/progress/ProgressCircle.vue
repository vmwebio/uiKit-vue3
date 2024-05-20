<script setup>
// Определяем входные свойства компонента
const props = defineProps({
  // Обязательное свойство для задания процента выполнения
  percent: {
    type: Number,
    required: true
  },
  // Свойство color для задания цвета прогресс-круга
  color: {
    type: String,
    default: 'primary'
  }
})
</script>

<template>
    <!-- SVG элемент для отображения прогресс-круга -->
  <div class="progress-circle">
    <span class="progress-circle-percent" :style="[{'color': `var(--${color})`}]">{{percent}}%</span>
    <svg width="120" height="120" viewBox="0 0 120 120" class="progress-circle-svg">
        <!-- Задний круг, отображающий фон прогресс-круга -->
      <circle
        cx="60"
        cy="60"
        r="54"
        fill="none"
        :stroke="`var(--${color}-hover)`"
        stroke-width="12" />
         <!-- Передний круг, отображающий прогресс -->
      <circle
        class="progress-circle-line"
        :style="[{'stroke-dashoffset': `calc(100 - ${percent})`}]"
        cx="60"
        cy="60"
        r="54"
        fill="none"
        :stroke="`var(--${color})`"
        stroke-width="12"
        pathLength="100" />
    </svg>
  </div>
  
</template>

<style lang="scss" scoped>
.progress {
  &-circle {
    position: relative;
    margin-bottom: 20px;
    width: 120px;
    height: 120px;
    &-svg {
      transform: rotate(-90deg);
    }
    &-percent {
      position: absolute;
      left: 0;
      width: 100%;
      top: 0;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: bold;
      font-size: 18px;
    }
    &-line {
      stroke-dasharray: 100;
      transition: .5s;
    }
  }
}
</style>