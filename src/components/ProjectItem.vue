<script lang="ts">
import type { Project } from "@/types/Project";
import { ref, onMounted } from "vue";

export default {
  setup() {
    const projects = ref([] as Project[]);

    const fetchData = () => {
      fetch("/data/projects.json")
        .then((response) => response.json())
        .then((data) => {
          projects.value = data;
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    };

    const getImageUrl = (relativePath: string) => {
      return new URL(`../assets/${relativePath}`, import.meta.url).href;
    };

    onMounted(() => {
      fetchData();
    });

    return {
      projects,
      getImageUrl
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
              <img :src="getImageUrl(project.imageSrc)" />
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
