import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Amw from '../views/Amw.vue'
import Music from '../views/MusicApp.vue'
import Twitter from '../views/Twitter.vue'
import Note from '../views/NoteApp.vue'
import react from '../views/react.vue'

const routes = [
  {
    path: '/',
    name: 'Portfolio',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/amw',
    name: 'AMW Veranda',
    component: Amw
  },
  {
    path: '/MusicApp',
    name: 'Music App',
    component: Music
  },
  {
    path: '/Twitter',
    name: 'Twitter Recreation',
    component: Twitter
  },
  {
    path: '/note',
    name: 'Note App',
    component: Note
  },
  {
    path: '/ReactNative',
    name: 'React Native',
    component: react
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior() {
    return { top: 0 };
  },
})

router.beforeEach((to, from, next) => {
  document.title = `${to.name} | Ranim Mohammad `;
  next();
});

export default router
