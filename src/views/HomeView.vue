<script setup lang="ts">
import { onMounted } from "vue";
import createRibbons from "../util/ribbons.ts";
import LoadingScreen from "../components/LoadingScreen.vue";
import introView from "../components/HomeView/IntroView.vue";

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

  <!-- =====================================work============================================== -->
  <!-- <section class="projects-section" id="work">
    <h1>My projects</h1>

    <div class="projects-container">
      <ol class="projects-list reveal">
        <li class="project-item">
          <router-link to="/ReactNative">
            <figure class="item-top">
              <img class="react" src="@/assets/img/react.png" />
            </figure>
            <figcaption class="item-caption">
              <h2>React Native Music Application 2</h2>
              <p>View more</p>
            </figcaption>
          </router-link>
        </li>
        <li class="project-item">
          <router-link to="/Twitter">
            <figure class="item-top">
              <img src="@/assets/img/twt-ii.png" />
            </figure>
            <figcaption class="item-caption">
              <h2>Recreated Twitter partly using MongoDB</h2>
              <p>View more</p>
            </figcaption>
          </router-link>
        </li>
        <li class="project-item">
          <router-link to="/ReactJS">
            <figure class="item-top">
              <img class="react" src="@/assets/img/todo.png" />
            </figure>
            <figcaption class="item-caption">
              <h2>ReactJS Todo list</h2>
              <p>View more</p>
            </figcaption>
          </router-link>
        </li>
        <li class="project-item">
          <router-link to="/amw">
            <figure class="item-top">
              <img src="@/assets/img/amw.png" />
            </figure>
            <figcaption class="item-caption">
              <h2>AMW Veranda using PHP</h2>
              <p>View more</p>
            </figcaption>
          </router-link>
        </li>
        <li class="project-item">
          <router-link to="/note">
            <figure class="item-top">
              <img src="@/assets/img/img.png" />
            </figure>
            <figcaption class="item-caption">
              <h2>Note App with EJS</h2>
              <p>View more</p>
            </figcaption>
          </router-link>
        </li>
        <li class="project-item">
          <router-link to="/MusicApp">
            <figure class="item-top">
              <img src="@/assets/img/music.png" />
            </figure>
            <figcaption class="item-caption">
              <h2>Music Application using PWA</h2>
              <p>View more</p>
            </figcaption>
          </router-link>
        </li>
      </ol>
    </div>
  </section> -->
</template>

<!-- 
<style>
.projects-section {
  display: flex;
  flex-direction: column;
}
</style> -->
