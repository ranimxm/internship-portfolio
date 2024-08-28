<script setup lang="ts">
import LoadingScreen from "@/components/LoadingScreen.vue";
import JobsTabs from "@/components/JobsTabs.vue";
</script>

<template>
  <LoadingScreen />

  <section class="about-container">
    <div class="about">
      <h1>About me</h1>
      <div class="container">
        <div class="left">
          <p>
            Hi, my name is Ranim Mohammad. I am a frontend developer based in Eindhoven,
            Netherlands. I currently am studying ICT & Media Design at
            <a link="https://www.fontys.nl/Home.htm" target="_blank" class="link"
              >Fontys University of Applied Sciences</a
            >. Right now, I am in my sixth semester.
          </p>
          <p>
            I chose the Media Design profile, which focuses on frontend development. Additionally,
            this profile has made me gain a broad knowledge about user research.
          </p>
          <p>Outside coding, I like to draw, playing games and read books.</p>
        </div>
        <div class="right">
          <p>My skills are the following:</p>
          <div class="container">
            <ul class="left">
              <li>- Javascript (ES6+)</li>
              <li>- HTML/CSS</li>
              <li>- React.js</li>
              <li>- Playwright</li>
              <li>- Figma</li>
            </ul>
            <ul class="right">
              <li>- Vue.js</li>
              <li>- React Native</li>
              <li>- Node.js</li>
              <li>- Docker</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="about" style="padding-bottom: 0">
      <h3>Experiences</h3>
      <JobsTabs />
    </div>
  </section>
</template>

<style scoped>
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
}
.left {
  width: 45%;
  display: flex;
  flex-direction: column;
  gap: 0.6em;
}
.right {
  width: 45%;
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
