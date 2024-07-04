<script setup lang="ts">
import { RouterView } from "vue-router";
import AppHeader from "./components/AppHeader.vue";
import footerDown from "./components/FooterDown.vue";
import ScrollUpDown from "./components/ScrollUpDown.vue";

// import "./assets/js/animation-scroll.js";

import "./assets/css/style.scss";
import "./assets/css/home.scss";
import "./assets/css/projects.scss";
import "./assets/css/work.scss";
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
