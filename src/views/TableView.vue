<script setup>
import {ref, computed} from 'vue'
import BaseTable from '@/components/ui/table/BaseTable.vue'
import TableRow from '@/components/ui/table/TableRow.vue'
import TableColumn from '@/components/ui/table/TableColumn.vue'
import Button from '@/components/ui/Button.vue'

// Заголовки таблицы
const tableHeads = ['Id', 'Author', 'Title', 'Cover', '']
// Шаблон для размеров столбцов таблицы
const tableSizeColumns = '50px 1fr 2fr 150px 140px'

// Поле, по которому производится сортировка
const sortField = ref('id')
// Тип сортировки (по возрастанию или убыванию)
const typeSort = ref('asc')

// Данные для таблицы (список книг)
const books = ref([
  {
    id: 1,
    author: 'Dmitry Glukhovsky',
    title: 'Metro 2033',
    image: 'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/81pNKLAG-cL._AC_UY436_FMwebp_QL65_.jpg',
    bg: '#FFA26B'
  },
  {
    id: 12,
    author: 'James Clear',
    title: 'Atomic Habits: An Easy',
    image: 'https://m.media-amazon.com/images/P/0735211299.01._SCLZZZZZZZ_SX500_.jpg',
    bg: '#00C48C'
  },
  {
    id: 2,
    author: 'J. K. Rowling',
    title: 'Harry Potter and the Order of the Phoenix',
    image: 'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/51bZujlJxlL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg',
    bg: '#00C48C'
  }
])

// Компонент для сортировки списка книг
const booksSorting = computed(() => {
  return books.value.sort((a, b) => {
    let modifier = 1;
    if (typeSort.value === 'desc') modifier = -1
    if (a[sortField.value] < b[sortField.value]) return -1 * modifier
    if (a[sortField.value] > b[sortField.value]) return 1 * modifier
    return 0
  })
})

// Функция для установки поля сортировки и направления сортировки
const setSort = (name) => {
  if (sortField.value === name) {
    if (typeSort.value === 'asc') {
      typeSort.value = 'desc'
    } else {
      typeSort.value = 'asc'
    }
  } else {
    sortField.value = name
  }
}
</script>

<template>
  <h1 class="heading-1">Table</h1>
   <!-- Отображение текущего поля и типа сортировки -->
  <span>Sort Field: {{sortField}}</span><br>
  <span>Type Sort: {{typeSort}}</span><br>
  <!-- Компонент таблицы -->
  <base-table
    :head="tableHeads"
    :columnTemplates="tableSizeColumns"
    @sorting="setSort">
    <!-- Строки таблицы -->
    <table-row
      v-for="book in booksSorting"
      :key="book.id"
      :columnTemplates="tableSizeColumns"
      :bgRow="book.bg">
      <!-- Столбцы таблицы с данными книги -->
      <table-column :columnTitle="tableHeads[0]">
        {{book.id}}
      </table-column>
      <table-column :columnTitle="tableHeads[1]">
        {{book.author}}
      </table-column>
      <table-column :columnTitle="tableHeads[2]">
        {{book.title}}
      </table-column>
      <!-- Столбец с изображением обложки книги -->
      <table-column :image="true" :srcImage="book.image"/>
      <table-column>
        <Button lavel="Read Online"></Button>
      </table-column>
    </table-row>
  </base-table>
</template>