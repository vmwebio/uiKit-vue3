<template>
    <div class="table-column">
    <!-- Заголовок колонки, если передан columnTitle -->
      <span class="table-column__title" v-if="columnTitle">{{columnTitle}}: </span>
      <!-- Показ содержимого без image -->
      <slot v-if="!image"></slot>
      <!-- Показ содержимого с image -->
      <img v-else class="table-column-image" :src="srcImage" alt="">
    </div>
  </template>
  
  <script setup>
  // Определяем свойства компонента
  const props = defineProps({
    // Является ли содержимое изображением
    image: {
      type: Boolean,
      required: false
    },
    // URL изображения, если image равно true
    srcImage: {
      type: String,
      required: false
    },
    // Заголовок колонки
    columnTitle: {
      type: String,
      required: false
    }
  })
  </script>
  
  <style lang="scss" scoped>
  .table-column {
    padding: 15px 0;
    position: relative;
    &-image {
      max-width: 100%;
      @media screen and (max-width: 767px) {
        max-width: 200px;
      }
    }
    &__title {
      margin-right: 5px;
      display: none;
      @media screen and (max-width: 767px) {
        display: inline-block;
      }
    }
  }
  </style>