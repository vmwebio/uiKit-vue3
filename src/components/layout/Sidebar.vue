<script>
import { ref } from "vue";

export default {
  setup() {
    const links = ref([
      { name: "Typography", href: "/typography" },
      { name: "Button", href: "/button" },
    ]);

    return { links };
  },
};
</script>

<template>
  <div>
    <router-link
      class="sidebar__link"
      v-for="link in links"
      :key="link.name"
      :to="link.href"
      >{{ link.name }}</router-link
    >
  </div>
</template>

<style lang="scss" scoped>
.sidebar {
  left: 0;
  top: 62px;
  height: 100%;
  background: #fff;
  position: fixed;
  width: 250px;
  padding: 20px;
  transition: 0.2s;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.07);
  transform: translateX(-250px);
  &_isopen {
    transform: translateX(0px);
  }
}
</style>
