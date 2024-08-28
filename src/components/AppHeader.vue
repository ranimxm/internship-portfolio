<script lang="ts">
import { ref, onMounted } from "vue";

export default {
  setup() {
    const navActive = ref(false);
    const menuActive = ref(false);
    const isDarkTheme = ref(false);

    const toggleMenu = () => {
      navActive.value = !navActive.value;
      menuActive.value = !menuActive.value;
    };

    const applyTheme = (isDark: boolean) => {
      if (isDark) {
        document.body.classList.add("dark");
      } else {
        document.body.classList.remove("dark");
      }
    };

    const toggleTheme = () => {
      isDarkTheme.value = !isDarkTheme.value;
      localStorage.setItem("isDarkTheme", JSON.stringify(isDarkTheme.value));
      applyTheme(isDarkTheme.value);
    };

    onMounted(() => {
      const savedTheme = localStorage.getItem("isDarkTheme");
      const navigation = document.getElementById("nav");
      const menu = document.getElementById("menu");

      if (savedTheme) {
        isDarkTheme.value = JSON.parse(savedTheme);
        applyTheme(isDarkTheme.value);
      } else {
        isDarkTheme.value = true;
        applyTheme(isDarkTheme.value);
      }

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
      toggleTheme,
      isDarkTheme
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
            <router-link to="/" @click="toggleMenu">Work</router-link>
          </li>
          <li>
            <router-link to="/about" @click="toggleMenu">About</router-link>
          </li>
          <li>
            <router-link to="/contact" @click="toggleMenu">Contact</router-link>
          </li>
        </ul>
      </div>
      <div :class="{ active: menuActive }" class="menu" id="menu" @click="toggleMenu">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <button @click="toggleTheme">Toggle Theme</button>
    </nav>
  </header>
</template>
