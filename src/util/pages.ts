import Home from "../views/HomeView.vue";

export const routes = [
  {
    path: "/",
    name: "Portfolio",
    component: Home
  },
  {
    path: "/About",
    name: "About",
    component: () => import("../views/AboutView.vue")
  },
  {
    path: "/Amw",
    name: "AMW Veranda",
    component: () => import("../views/project-items/AmwView.vue")
  },
  {
    path: "/MusicApp",
    name: "Music App",
    component: () => import("../views/project-items/MusicAppView.vue")
  },
  {
    path: "/Twitter",
    name: "Twitter Recreation",
    component: () => import("../views/project-items/TwitterView.vue")
  },
  {
    path: "/note",
    name: "Note App",
    component: () => import("../views/project-items/NoteAppView.vue")
  },
  {
    path: "/ReactNative",
    name: "React Native",
    component: () => import("../views/project-items/ReactView.vue")
  },
  {
    path: "/ReactJS",
    name: "ReactJS Todo",
    component: () => import("../views/project-items/TodoView.vue")
  },
  {
    path: "*",
    name: "Page not found",
    component: () => import("../components/PageNotFound.vue")
  }
];
