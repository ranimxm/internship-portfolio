<script lang="ts">
import LoadingScreen from "@/components/LoadingScreen.vue";
import ProjectDetails from "@/components/ProjectDetails.vue";
import musicApp from "@/assets/img/mobile.gif";

export default {
  components: {
    LoadingScreen,
    ProjectDetails
  },
  data() {
    return {
      musicApp,
      headerTitle: "Music Application",
      headerSubtitle: "PWA"
    };
  }
};
</script>
<template>
  <LoadingScreen />

  <ProjectDetails
    :imageSrc="musicApp"
    :reverse="true"
    :headerTitle="headerTitle"
    :headerSubtitle="headerSubtitle"
  >
    <template #content>
      <div class="text">
        <p>
          The <a href="https://scara.netlify.app/" target="_blank" class="link">music app</a> is
          currently hosted on Netlify.
        </p>
        <p>
          As a devoted fan of a particular fandom, a friend approached me with an interesting
          request: to create a music app for our fandom's community. Coincidentally, while exploring
          the challenges set by my school, I discovered a concept called Progressive Web Application
          (PWA). This provided me with an opportunity to fulfill my friend's request and also
          contribute to my school assignment.
        </p>
        <p>
          With enthusiasm, I delved into research to bring this music app idea to life. Through my
          efforts, I successfully developed playlist, real-time updates and a sleek, easy to use
          interface, providing an enjoyable music experience.
        </p>
        <p>
          It is important to note that the app primarily is made to Android devices due to
          limitations. Unfortunately, creating a version for iOS devices was not feasible at that
          time.
        </p>
      </div>
    </template>
  </ProjectDetails>
</template>
