<script setup>
// Определение свойства компонента
  const props = defineProps({
    names: {
      type: Array,
      required: true
    },
    selectedTab: {
      type: String,
      required: false
    }
  })

  // Определение события для отправки
  const emit = defineEmits(['changeTab'])

  // Функция обработки клика на вкладку
  const clickOnTab = (tabName) => {
    emit('changeTab', tabName)
  }
</script>

<template>
  <div class="tab-nav">
    <span
      v-for="tab in names"
      :key="tab.name"
      :class="['tab-nav__item', {'selected': tab.name === selectedTab}]"
      @click="clickOnTab(tab.name)">{{tab.label}}
    </span>
  </div>
  <div class="tab-content">
    <slot/>
  </div>
</template>

<style lang="scss" scoped>
  .tab {
    &-nav {
      display: flex;
      align-items: center;
      margin-bottom: 20px;
      &__item {
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 10px;
        border-radius: 7px;
        cursor: pointer;
        border: 1px solid var(--primary);
        padding: 0 20px;
        font-size: 15px;
        &:hover {
          background: var(--primary-hover);
          color: #fff;
          transition: 0.2s;
        }
        &.selected {
          background: var(--primary);
          color: #fff;
        }
      }
    }
    &-content {
      padding: 20px;
      border-radius: 7px;
      background: #fff;
    }
  }
  </style>
  