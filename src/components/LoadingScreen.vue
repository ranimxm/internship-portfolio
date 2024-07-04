<template>
  <div class="loader-container">
    <div id="loader"></div>
  </div>
</template>

<style scoped>
.loader-container {
  background-color: #ffff;
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  animation: slideIn 1.1s forwards;
  overflow: hidden;
}
@keyframes slideIn {
  0% {
    /* width: 100%; */
    transform: translateX(0%);
  }
  50% {
    /* width: 100%; */

    transform: translate(0%);
  }
  100% {
    /* width: 0; */

    transform: translateX(100%);
  }
}
#loader {
  background: #6853f1;
  position: fixed;
  top: 0;
  left: 0;
  width: 50%;
  height: 100%;
  z-index: 999;
  overflow: hidden;
  animation: slideOut 1.1s forwards;
}

@keyframes slideOut {
  0% {
    width: 0%;
    transform: translateX(0%);
  }
  50% {
    transform: translate(0%);
  }
  100% {
    width: 100%;
    transform: translateX(100%);
  }
}
</style>
