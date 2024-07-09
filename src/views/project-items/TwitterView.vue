<script lang="ts">
import LoadingScreen from "../../components/LoadingScreen.vue";
import ProjectDetails from "../../components/ProjectDetails.vue";
import gifTwt from "@/assets/img/twt.gif";

export default {
  components: {
    LoadingScreen,
    ProjectDetails
  },
  data() {
    return {
      gifTwt,
      imageClass: "",
      headerTitle: "Twitter Recreation",
      headerSubtitle: "MongoDB, NodeJs ExpressJs"
    };
  }
};
</script>

<template>
  <LoadingScreen />

  <ProjectDetails
    :imageSrc="gifTwt"
    :reverse="true"
    :headerTitle="headerTitle"
    :headerSubtitle="headerSubtitle"
    :imageClass="imageClass"
  >
    <template #content>
      <div class="text">
        <p>
          <a href="https://twittah.onrender.com" target="_blank">The website</a> is being hosted on
          Render.
        </p>
        <p>
          As part of a school challenge, I was tasked with recreating a website, and I decided to
          take on the challenge of recreating Twitter. Initialy, my plan was to make use of a JSON
          file as a data source for the website. However, my teacher recommended using MongoDB as a
          database solution, and I followed his suggestion.
        </p>
        <p>
          With MongoDB being connected into the project, the website became capable of posting
          tweets and displaying the data on the page. It provided users to create their thoughts in
          a familiar Twitter-like environment.
        </p>
        <p>
          When it came to hosting the website, my first plan was to attempt to use Netlify. However,
          I discovered that connecting a database directly to Netlify was not capable for my
          project.
        </p>
        <p>
          After a few months I discovered a new free hosting platform, outside Heroku and combining
          Postman, called Render. Now the website is live on render while connected to MongoDB.
        </p>
      </div>
    </template>
  </ProjectDetails>
</template>
