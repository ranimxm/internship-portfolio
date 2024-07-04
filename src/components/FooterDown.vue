<script setup lang="ts">
import GitHubIcon from "./icons/IconGitHub.vue";
import EmailIcon from "./icons/IconMail.vue";
import LinkedInIcon from "./icons/IconLinkedIn.vue";
</script>

<template>
  <footer class="footer">
    <div class="name">
      <router-link to="/">Ranim Mohammad</router-link>
    </div>
    <div class="icons">
      <a href="https://github.com/ranimxm" target="_blank" class="github">
        <GitHubIcon />
      </a>

      <a href="mailto: ranimm01@hotmail.com" class="mail">
        <EmailIcon />
      </a>
      <a href="https://www.linkedin.com/in/ranim-m" target="_blank" class="linkedin-link">
        <LinkedInIcon />
      </a>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  flex-shrink: 0;
}
</style>
