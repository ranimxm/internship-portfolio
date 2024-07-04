import { createRouter, createWebHistory } from "vue-router";
import { routes } from "../util/pages";

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
  // scrollBehavior() {
  //   return { top: 0 };
  // }
});

router.beforeEach((to, from, next) => {
  document.title = `${String(to.name)} | Ranim Mohammad `;
  next();
});
