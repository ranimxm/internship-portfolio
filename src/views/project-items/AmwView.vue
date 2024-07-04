<script lang="ts">
import LoadingScreen from "../../components/LoadingScreen.vue";
import WorkItem from "../../components/WorkItem.vue";

export default {
  components: {
    LoadingScreen,
    WorkItem
  }
};
</script>

<template>
  <LoadingScreen />

  <section class="work-section" id="work">
    <div class="work-container">
      <WorkItem :imageSrc="'./assets/img/amw-i.gif'" :reverse="true">
        <template #content>
          <h3>Bootstrap, PHP</h3>
          <h1>AMW Veranda</h1>
          <div class="text">
            <p>
              <a href="http://amwveranda.nl/" target="_blank">The website</a> is currently being
              hosted on GoDaddy.
            </p>
            <p>
              I had the opportunity to create a website for a company that specializes in making
              verandas. The website included some useful features to enhance user experience.
            </p>
            <p>
              One of the main functions of the website was to make users easily send emails and
              contact the company. I implemented a feature using PHP that allowed users to send
              feedback or any other message through the website. This made it convenient for users
              as they don't have to switch accounts or tabs.
            </p>
            <p>
              Another important feature I added to the website was the ability for users to choose
              their preferred language. This way, users could view the website content in the
              language they were comfortable with.
            </p>
            <p>
              To make the website accessible to users, my partner and I hosted it on GoDaddy, a
              popular web hosting platform. GoDaddy provided reliable hosting services as well as
              good customer service in times of need.
            </p>
          </div>
        </template>
      </WorkItem>
      <!-- <div class="work-item reverse">
        <div class="right">
          <h3>Bootstrap, PHP</h3>
          <h1>AMW Veranda</h1>
          <div class="text">
            <p>
              <a href="http://amwveranda.nl/" target="_blank">The website</a> is currently being
              hosted on GoDaddy.
            </p>
            <p>
              I had the opportunity to create a website for a company that specializes in making
              verandas. The website inclded some useful features to enhance user experience.
            </p>
            <p>
              One of the main functions of the website was to make users to easily send emails and
              contact the company. I implemented a feature using PHP that allowed users to send
              feedback or any other message through the website. This made it convenient for users
              as they dont have to switch accounts or switch tabs.
            </p>
            <p>
              Another improtant feature I added to the website was the ability for users to choose
              their preferred language. This way, users could view the website content the language
              they were comfortable with.
            </p>
            <p>
              To make the website accessible to users, me and my partner hosted it on GoDaddy, a
              popular web hosting platform. GoDaddy provided reliable hosting services as well as a
              good customer services in time of need.
            </p>
          </div>
        </div>
        <div class="left">
          <img src="./assets/img/amw-i.gif" />
        </div>
      </div> -->
      <!-- <div class="work-item">
                    <div class="left">
                        <img src="/img/gojo.png">
                    </div>
                    <div class="right">
                        <p class="reveal">Text 2</p>
                    </div>
                </div> -->
    </div>
  </section>
</template>
