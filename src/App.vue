<template>
  <AppHeader />
  <ScrollUpDown />


  <router-view />

  <footerDown />
</template>

<script>
import AppHeader from '@/components/header.vue';
import footerDown from '@/components/footer.vue';
import ScrollUpDown from '@/components/scrollupdown.vue';

import '@/assets/js/animation-scroll.js';

import '@/assets/css/style.css';
import '@/assets/css/home.css';
import '@/assets/css/projects.css';
import '@/assets/css/work.css';


export default {
  name: 'App',
  components: {
    AppHeader,
    footerDown,
    ScrollUpDown
  }

};
</script>
