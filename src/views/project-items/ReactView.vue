<script lang="ts">
import LoadingScreen from "../../components/LoadingScreen.vue";
import ProjectDetails from "../../components/ProjectDetails.vue";
import musicGif from "@/assets/img/mobile.gif";

export default {
  components: {
    LoadingScreen,
    ProjectDetails
  },
  data() {
    return {
      musicGif,
      headerTitle: "Music Application",
      headerSubtitle: "React Native"
    };
  }
};
</script>

<template>
  <LoadingScreen />

  <ProjectDetails
    :imageSrc="musicGif"
    :reverse="true"
    :headerTitle="headerTitle"
    :headerSubtitle="headerSubtitle"
  >
    <template #content>
      <div class="text">
        <p>
          Creating the PWA music app made me realize that there are more opportunities to make a
          better product than a pwa, which is an offline real application. Ultimately, my goal is to
          develop an application that functions seamlessly offline and is compatible with both IOS
          and Android, driven for my personal satisfaction. There were not a lot of frameworks known
          to me, aside from React Native. So i took the liberirty to learn React Native through
          creating a music player.
        </p>
        <p>
          During coding there were a lot of issues I was facing such as downloading multiple
          dependencies as well as making sure it is located in the correct folder and the
          redirecting of it, one of the things I learned during the creation was using the `--save`
          word after each npm installation.
        </p>
        <p>
          Compiling it into an APK for android was also not an easy task, even though there were
          multiple tutorials online. After iterating multiple times I finally was able to generate
          an apk file. Now the app works offline! Although the downside is that the APK is not
          secured, which means anyone with a slight of hacking skill is able to hack into the file
          =).
        </p>
      </div>
    </template>
  </ProjectDetails>

  <!-- <video class="video" width="250vw" height="auto" muted autoplay loop>
            <source src="./assets/video/test.mp4" type="video/mp4" />
          </video> -->
</template>
