<script lang="ts">
import projects from "../assets/projects.json";

export default {
  data() {
    return {
      projects: projects
    };
  }
};
</script>

<template>
  <section class="projects-section" id="work">
    <h1>My projects</h1>
    <div class="projects-container">
      <ol class="projects-list reveal">
        <li v-for="project in projects" :key="project.route" class="project-item">
          <router-link :to="project.route">
            <figure class="item-top">
              <img :src="project.imageSrc" />
            </figure>
            <figcaption class="item-caption">
              <h2>{{ project.title }}</h2>
              <p>{{ project.description }}</p>
            </figcaption>
          </router-link>
        </li>
      </ol>
    </div>
  </section>
</template>
