<script setup lang="ts">
import LoadingScreen from "@/components/LoadingScreen.vue";
import GitHubIcon from "../components/icons/IconGitHub.vue";
import EmailIcon from "../components/icons/IconMail.vue";
import LinkedInIcon from "../components/icons/IconLinkedIn.vue";
import BurgerAnimation from "@/components/BurgerAnimation.vue";
</script>

<template>
  <LoadingScreen />

  <section class="about-container">
    <div class="about">
      <div class="padding">
        <h1>Contact me</h1>
        <p>Want to discuss about new challenges and opportunities?</p>
        <p>Feel free to contact me through these options down below!</p>
      </div>
      <div class="container">
        <div class="left">
          <h3>Email</h3>
          <a href="mailto: ranimm01@hotmail.com" class="mail icons">
            <EmailIcon />
            <p class="link">ranimm01@hotmail.com</p>
          </a>
        </div>
        <div class="right">
          <h3 style="color: inherit; font-size: 18px">Other platforms</h3>
          <ul style="display: flex; flex-direction: column; gap: 0.5em">
            <li>
              <a href="https://github.com/ranimxm" target="_blank" class="github icons">
                <GitHubIcon />
                <p class="link">ranimxm</p>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/ranim-m" target="_blank" class="github icons">
                <LinkedInIcon />
                <p class="link">Ranim Mohammad</p>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
  <div class="bottomg">
    <BurgerAnimation />
  </div>
</template>

<style scoped>
.bottomg {
  position: relative;
  height: 55vh;
  background-color: #9685ff;
  width: 100%;
}

.about-container {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  padding: 3em;
  width: 100%;
}

.about {
  display: flex;
  width: 100%;
  padding: 2em;
  flex-direction: column;
  align-items: flex-start;
  gap: 1em;
}

.container {
  display: flex;
  flex-direction: row;
  gap: 1em;
  width: 100%;
}

.left {
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 0.6em;
}

.right {
  width: 50;
  display: flex;
  flex-direction: column;
  gap: 0.6em;
}

@media screen and (max-width: 768px) {
  .container {
    flex-direction: column;
  }

  .about-container {
    padding: 0;
  }

  .left {
    width: 100%;
  }

  .right {
    width: 100%;
  }
}
</style>
