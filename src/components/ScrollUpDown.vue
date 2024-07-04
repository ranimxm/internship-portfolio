<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";

const goDownTop = ref<HTMLElement | null>(null);

const updateArrowDirection = () => {
  const currentPosition = window.pageYOffset;

  if (goDownTop.value) {
    if (currentPosition > 0) {
      goDownTop.value.classList.add("changed");
    } else {
      goDownTop.value.classList.remove("changed");
    }
  }
};

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
};

const scrollToBottom = () => {
  window.scrollTo({
    top: document.documentElement.scrollHeight,
    behavior: "smooth"
  });
};

onMounted(() => {
  goDownTop.value = document.querySelector(".go-down-top");

  window.addEventListener("scroll", updateArrowDirection);

  if (goDownTop.value) {
    goDownTop.value.addEventListener("click", () => {
      if (goDownTop.value?.classList.contains("changed")) {
        scrollToTop();
      } else {
        scrollToBottom();
      }
    });
  }
});

onUnmounted(() => {
  window.removeEventListener("scroll", updateArrowDirection);
  if (goDownTop.value) {
    goDownTop.value.removeEventListener("click", () => {
      if (goDownTop.value?.classList.contains("changed")) {
        scrollToTop();
      } else {
        scrollToBottom();
      }
    });
  }
});
</script>

<template>
  <div class="go-down-top-container">
    <div class="go-down-top"></div>
  </div>
</template>
