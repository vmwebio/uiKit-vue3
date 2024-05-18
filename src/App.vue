<script setup>
import LayoutHeader from "@/components/layout/Header.vue";
</script>

<template>
  <div class="container">
    <layout-header />
    <div class="content">
      <router-view/>
    </div>
  </div>
</template>

<style lang="scss">
@import "./styles/global.scss";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.content {
  max-width: 1400px;
  margin-left: 250px;
  padding: 30px;
  transition: 0.2s;
  &_full {
    margin-left: 0;
  }
}

</style>
