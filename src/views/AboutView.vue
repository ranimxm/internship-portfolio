<script lang="ts">
import LoadingScreen from "../components/LoadingScreen.vue";
import BurgerAnimation from "../components/BurgerAnimation.vue";

export default {
  components: {
    LoadingScreen,
    BurgerAnimation
  }
};
</script>

<template>
  <LoadingScreen />

  <section class="about-container">
    <div class="about">
      <h1>About me</h1>
      <div class="container">
        <div class="left">
          <p>
            I have a strong basis in front-end development, making websites with user-friendly
            interfaces. My toolkit includes technologies like MongoDB, React Native, Vue, FLutter,
            Flask, EJS, React and NodeJS. While my Python skills are still growing, I am always
            aeger to learn more.
          </p>
          <p>Outside coding, I like to draw, playing games and read books.</p>
        </div>
        <div class="right">
          <p>
            I chose the Media profile at Fontys University, which focuses on frontend development.
            Additionally, this profile has made me gain a broad knowledge about user research.
          </p>
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
