<script setup>
  import Checkbox from '@/components/ui/checkbox/Checkbox.vue'

  // Определяем событие, которое будет отправляться родительскому компоненту
  const emit = defineEmits(['update:value'])

  // Определяем входные свойства для компонента
  const props = defineProps({
    value: {
      type: Array,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    options: {
      type: Array,
      required: true,
      // Валидатор для проверки, что каждый объект в массиве имеет ключи 'name' и 'id'
      validator: (value) => {
        const hasNameKey = value.every((option) => Object.keys(option).includes('name'))
        const hasIdKey = value.every((option) => Object.keys(option).includes('id'))
        return hasNameKey && hasIdKey
      }
    }
  })

  // Функция для обработки изменения состояния чекбокса
  const check = (params) => {
    // Создаем копию текущего значения
    let updateValue = [...props.value]
    if (params.checked) {
    // Если чекбокс отмечен, добавляем id в массив
      updateValue.push(params.optionId)
    } else {
        // Иначе удаляем id из массива
      updateValue.splice(updateValue.indexOf(params.optionId), 1)
    }
    // Эмитим событие с обновленным массивом значений
    emit('update:value', updateValue)
  }
</script>

<template>
  <div v-for="option in options" :key="option.id">
    <checkbox
      :label="option.name"
      :id="option.id"
      :name="name"
      :value="option.name"
      :checked="value.includes(option.id)"
      group
      @updateCheckboxGroup="check"
    />
  </div>
</template>