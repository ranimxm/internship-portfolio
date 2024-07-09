<script setup lang="ts">
import { onMounted } from "vue";
import createRibbons from "../util/ribbons.ts";
import LoadingScreen from "../components/LoadingScreen.vue";
import introView from "../components/IntroView.vue";
import ProjectItem from "../components/ProjectItem.vue";

onMounted(() => {
  createRibbons({
    colorSaturation: "60%",
    colorBrightness: "50%",
    colorAlpha: 0.5,
    colorCycleSpeed: 5,
    verticalPosition: "random",
    horizontalSpeed: 200,
    ribbonCount: 3,
    strokeSize: 0,
    parallaxAmount: -0.2,
    animateSections: true
  });
});
</script>

<template>
  <LoadingScreen />
  <main class="home-main" id="home-main">
    <introView />
  </main>

  <ProjectItem />
</template>

<style scoped>
.projects-section {
  display: flex;
  flex-direction: column;
}
</style>
