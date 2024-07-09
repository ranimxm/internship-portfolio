<script lang="ts">
import LoadingScreen from "../../components/LoadingScreen.vue";
import ProjectDetails from "../../components/ProjectDetails.vue";
import noteApp from "@/assets/img/note.gif";

export default {
  components: {
    LoadingScreen,
    ProjectDetails
  },
  data() {
    return {
      noteApp,
      headerTitle: "Note Application",
      headerSubtitle: "EJS, NodeJs"
    };
  }
};
</script>

<template>
  <LoadingScreen />

  <ProjectDetails
    :imageSrc="noteApp"
    :reverse="true"
    :headerTitle="headerTitle"
    :headerSubtitle="headerSubtitle"
  >
    <template #content>
      <div class="text">
        <p>
          The <a href="https://duocase.onrender.com/" target="_blank">note app</a> is currently
          hosted on Render.
        </p>
        <p>
          For school I had to create a solution which helps students to gather evidence for their
          portfolio, and the solution was to create a note-app which generates texts based on the
          image you uploaded, and summarizes it. It's also able to record and transcribe as well as
          summarize the recording it uploaded. This way the time to write down a summary for a
          portfolio is less. It also helps to create a startpoint for documentation. I was
          responsible for the 'database' and adding images with text generator using tesseract.js
        </p>
        <p>
          For this project I had to store notes as well as projects, which means a 'database' was
          needed. Using NodeJS I was able to store files to their corresponded folders as well as
          storing objects inside a json file. To display the data which is stored properly as well
          as less as possible files, I used EJS. To my knowledge, it almost works the same as jinja,
          however ejs uses javascript as jinja works for python.
        </p>
      </div>
    </template>
  </ProjectDetails>
</template>
