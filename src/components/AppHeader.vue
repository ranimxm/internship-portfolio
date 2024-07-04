<script lang="ts">
import { ref, onMounted } from "vue";

export default {
  setup() {
    const navActive = ref(false);
    const menuActive = ref(false);
    const pdfUrl = "/files/CV Ranim.pdf";

    const toggleMenu = () => {
      navActive.value = !navActive.value;
      menuActive.value = !menuActive.value;
    };

    // const openPDF = () => {
    //   window.open(pdfUrl, "_blank");
    // };

    onMounted(() => {
      const navigation = document.getElementById("nav");
      const menu = document.getElementById("menu");

      menu?.addEventListener("click", () => {
        if (navigation) {
          navigation.style.setProperty("--childenNumber", navigation.children.length.toString());
        }
      });
    });

    return {
      navActive,
      menuActive,
      toggleMenu,
      pdfUrl
    };
  }
};
</script>

<template>
  <header id="top" class="header">
    <div class="logo"></div>
    <nav class="nav">
      <div>
        <ul :class="{ active: navActive }" id="nav">
          <li>
            <router-link to="/">Work</router-link>
          </li>
          <li>
            <router-link to="/about">About</router-link>
          </li>
          <li>
            <a :href="pdfUrl" target="_blank">CV</a>
          </li>
        </ul>
      </div>
      <div :class="{ active: menuActive }" class="menu" id="menu" @click="toggleMenu">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  </header>
</template>
