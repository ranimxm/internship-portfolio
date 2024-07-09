<script setup lang="ts">
import { RouterView } from "vue-router";
import AppHeader from "./components/AppHeader.vue";
import footerDown from "./components/FooterDown.vue";
import ScrollUpDown from "./components/ScrollUpDown.vue";
import "./util/animationScroll";
import "./styles/style.scss";
import "./styles/home.scss";
import "./styles/projects.scss";
import "./styles/work.scss";
</script>

<template>
  <AppHeader />
  <ScrollUpDown />
  <RouterView />
  <footerDown />
</template>

<style scoped>
#app {
  display: flex;
  flex-direction: column;
}
</style>
