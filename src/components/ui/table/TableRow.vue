<template>
    <div
      class="table-row"
      :style="{
        'grid-template-columns': columnTemplates,
        'background-color': bgRow}">
        <!-- Слот для содержимого строки таблицы -->
      <slot></slot>
    </div>
  </template>
  
  <script setup>
  // Определяем свойства компонента
  const props = defineProps({
    // Шаблон колонок для CSS Grid
    columnTemplates: {
      type: String,
      required: false
    },
    // Фон строки таблицы
    bgRow: {
      type: String,
      required: false
    }
  })
  </script>
  
  <style lang="scss" scoped>
  .table-row {
    border-bottom: 2px solid #EEEFF4;
    position: relative;
    display: grid;
    column-gap: 10px;
    align-items: center;
    padding: 0 16px;
    @media screen and (max-width: 767px) {
      display: block;
    }
    &:last-child {
      border-bottom: none;
    }
    &--items-center {
      justify-items: center;
    }
  }
  </style>