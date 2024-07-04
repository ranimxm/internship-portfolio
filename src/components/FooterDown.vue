<script setup lang="ts">
import GitHubIcon from "./icons/IconGitHub.vue";
import EmailIcon from "./icons/IconMail.vue";
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
      <a
        href="https://www.linkedin.com/in/ranim-m-984169200/"
        target="_blank"
        class="linkedin-link"
      >
        <wow-image
          data-image-info='{"containerId":"dataItem-jzjc1xoe-comp-jzjbx2cc","displayMode":"fill","imageData":{"width":200,"height":200,"uri":"6ea5b4a88f0b4f91945b40499aa0af00.png","name":"","displayMode":"fill"}}'
          data-bg-effect-name=""
          data-has-ssr-src=""
          style="max-width: (200px, 100%)"
          data-src="https://static.wixstatic.com/media/6ea5b4a88f0b4f91945b40499aa0af00.png"
        >
          <img
            alt="Black LinkedIn Icon"
            fetchpriority="high"
            src="https://static.wixstatic.com/media/6ea5b4a88f0b4f91945b40499aa0af00.png/v1/fill/w_29,h_29,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/6ea5b4a88f0b4f91945b40499aa0af00.png"
            style="width: 23px; height: 23px; object-fit: cover"
          />
        </wow-image>
      </a>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  flex-shrink: 0;
}
</style>
