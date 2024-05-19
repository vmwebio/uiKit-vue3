<script setup>
  import { ref } from 'vue'
  import Checkbox from '@/components/ui/checkbox/Checkbox.vue'
  import CheckboxGroup from '@/components/ui/checkbox/CheckboxGroup.vue'

  // Создаем реактивную переменную для активного чекбокса
  const checkboxActive = ref(true)
  // Создаем реактивные переменные для отключенного чекбокса
  const checkboxDisabled = ref(true)
  const checkboxDisabledChecked = ref(true)

  // Создаем реактивную переменную для списка героев
  const listOfHeroes = ref([
    {name: 'Spider Man', id: 'h1'},
    {name: 'Batman', id: 'h2'},
    {name: 'Tor', id: 'h3'},
    {name: 'Loki', id: 'h4'},
  ])
  // Создаем реактивную переменную для выбранных героев по умолчанию
  const selectedHeroes = ref(['h1', 'h3'])

  // Создаем реактивную переменную для переключателя
  const switchProfessional = ref(false)

  // Вычисляемое свойство для отображения имен выбранных героев
  function getSelectedHeroNames() {
  return selectedHeroes.value.map(id => {
    const hero = listOfHeroes.value.find(hero => hero.id === id)
    return hero ? hero.name : null
  }).filter(name => name !== null)
}
</script>

<template>
  <h1 class="heading-1">Checkbox</h1>
  <h2 class="heading-2">Checkbox Active</h2>
  <div class="line">
     <!-- Компонент активного чекбокса -->
    <checkbox
      label="Checkbox Active"
      id="checkboxActive"
      name="checkboxActive"
      value="I like it"
      v-model:checked="checkboxActive"/>
  </div>
  <h2 class="heading-2">Checkbox Disabled</h2>
  <div class="line">
    <!-- Компонент отключенного чекбокса -->
    <checkbox
      label="Checkbox Disabled"
      id="checkboxDisabled"
      name="checkboxDisabled"
      value="I like it"
      :disabled="checkboxDisabled"
      v-model:checked="checkboxDisabledChecked"/>
  </div>
  <h2 class="heading-2">Checkbox Group</h2>
  <div class="line line_block">
    <!-- Отображение выбранных героев ({{selectedHero}} по id) -->
    <p>Selected Heroes: {{getSelectedHeroNames()}}</p>
    <checkbox-group v-model:value="selectedHeroes" name="heroes" :options="listOfHeroes"/>
  </div>
  <h2 class="heading-2">Switch</h2>
  <div class="line line_block">
    <!-- Отображение состояния переключателя -->
    <p>Switch: {{switchProfessional}}</p>
    <!-- Компонент переключателя -->
    <checkbox
      label="I'm a professional"
      id="switch"
      name="switch"
      value="I'm a professional"
      type="switch"
      v-model:checked="switchProfessional"/>
  </div>
</template>