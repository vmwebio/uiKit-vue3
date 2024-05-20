<template>
    <div class="table-wrapper">
      <div class="table">
        <!-- Заголовок таблицы -->
        <div
          class="table-head"
          :style="{'grid-template-columns': columnTemplates}">
          <!-- Элементы заголовка таблицы -->
          <div
            class="table-head__name"
            v-for="(element, i) of head"
            :key="i"
            @click="clickOnHead(element)">
             <!-- Выводим название столбца -->
            {{element}}
          </div>
        </div>
        <!-- Слот для вставки содержимого таблицы -->
        <slot></slot>
      </div>
    </div>
  </template>
  
  <script setup>
  // Определяем свойства компонента
  const props = defineProps({
    head: {
      type: Array,
      required: false
    },
    // Шаблон колонок для CSS Grid
    columnTemplates: {
      type: String,
      required: false
    }
  })
  
  // Определяем событие, которое будет отправлено
  const emit = defineEmits(['sorting'])
  
  // Функция, которая вызывается при клике на заголовок таблицы
  const clickOnHead = (name) => {
    emit('sorting', name.toLowerCase())
  }
  </script>
  
  
  <style lang="scss" scoped>
  .table {
    background-color: #fff;
    width: 100%;
    margin-bottom: 40px;
    margin-top: 15px;
    &-wrapper {
      display: flex;
      justify-content: center;
    }
    &-head {
      padding: 5px 16px;
      display: grid;
      column-gap: 10px;
      align-items: center;
      border-bottom: 2px solid #EEEFF4;
      background: #fff;
      &__name {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        color: #999;
        cursor: pointer;
      }
      @media screen and (max-width: 767px) {
        display: none;
      }
    }
  }
  </style>