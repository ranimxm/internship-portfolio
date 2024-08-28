<script lang="ts">
import LoadingScreen from "../../components/LoadingScreen.vue";
import ProjectDetails from "../../components/ProjectDetails.vue";
import giftodo from "@/assets/img/todo.gif";

export default {
  components: {
    LoadingScreen,
    ProjectDetails
  },
  data() {
    return {
      giftodo,
      headerTitle: "Todo List",
      headerSubtitle: "ReactJS"
    };
  }
};
</script>

<template>
  <LoadingScreen />

  <ProjectDetails
    :imageSrc="giftodo"
    :reverse="true"
    :headerTitle="headerTitle"
    :headerSubtitle="headerSubtitle"
  >
    <template #content>
      <div class="text">
        <p>
          The
          <a href="https://todo-list-2k6n.onrender.com/" class="link" target="_blank">todo list</a>
          is currently hosted on Render.
        </p>
        <p></p>
      </div>
    </template>
  </ProjectDetails>
</template>
