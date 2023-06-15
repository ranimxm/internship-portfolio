<template>
  <AppHeader/>
  <ScrollUpDown />
  <router-view/>

  <footerDown/>
</template>

<script>
import LoadingScreen from '@/components/loadingscreen.vue';
import AppHeader from '@/components/header.vue';
import footerDown from '@/components/footer.vue';
import ScrollUpDown from '@/components/scrollupdown.vue';

import '@/assets/js/animation-scroll.js';

import '@/assets/css/style.scss';
import '@/assets/css/home.scss';
import '@/assets/css/projects.scss';
import '@/assets/css/work.scss';


export default {
  name: 'App',
  components: {
    AppHeader,
    footerDown,
    LoadingScreen,
    ScrollUpDown
  }

};
</script>
<style>
#app{
  display: flex;
  flex-direction: column;
}
</style>