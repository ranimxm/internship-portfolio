<script lang="ts">
import LoadingScreen from "../../components/LoadingScreen.vue";
import ProjectDetails from "../../components/ProjectDetails.vue";
import imageAmw from "@/assets/img/amw-i.gif";

export default {
  components: {
    LoadingScreen,
    ProjectDetails
  },
  data() {
    return {
      imageAmw,
      imageClass: "",
      headerTitle: "AMW Veranda",
      headerSubtitle: "Bootstrap, PHP"
    };
  }
};
</script>

<template>
  <LoadingScreen />

  <ProjectDetails
    :imageSrc="imageAmw"
    :reverse="true"
    :headerTitle="headerTitle"
    :headerSubtitle="headerSubtitle"
    :imageClass="imageClass"
  >
    <template #content>
      <div class="text">
        <p>
          <a href="http://amwveranda.nl/" target="_blank" class="link">The website</a> is currently
          being hosted on GoDaddy.
        </p>
        <p>
          I had the opportunity to create a website for a company that specializes in making
          verandas. The website included some useful features to enhance user experience.
        </p>
        <p>
          One of the main functions of the website was to make users easily send emails and contact
          the company. I implemented a feature using PHP that allowed users to send feedback or any
          other message through the website. This made it convenient for users as they don't have to
          switch accounts or tabs.
        </p>
        <p>
          Another important feature I added to the website was the ability for users to choose their
          preferred language. This way, users could view the website content in the language they
          were comfortable with.
        </p>
        <p>
          To make the website accessible to users, my partner and I hosted it on GoDaddy, a popular
          web hosting platform. GoDaddy provided reliable hosting services as well as good customer
          service in times of need.
        </p>
      </div>
    </template>
  </ProjectDetails>
</template>
