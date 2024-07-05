import Home from "../views/HomeView.vue";
// import Amw from "../views/AmwView.vue";
// import Music from "../views/MusicAppView.vue";
// import Twitter from "../views/TwitterView.vue";
// import Note from "../views/NoteAppView.vue";
// import react from "../views/ReactView.vue";
// import todo from "../views/TodoView.vue";

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
  }
  // {
  //   path: "/amw",
  //   name: "AMW Veranda",
  //   component: Amw
  // },
  // {
  //   path: "/MusicApp",
  //   name: "Music App",
  //   component: Music
  // },
  // {
  //   path: "/Twitter",
  //   name: "Twitter Recreation",
  //   component: Twitter
  // },
  // {
  //   path: "/note",
  //   name: "Note App",
  //   component: Note
  // },
  // {
  //   path: "/ReactNative",
  //   name: "React Native",
  //   component: react
  // },
  // {
  //   path: "/ReactJS",
  //   name: "ReactJS Todo",
  //   component: todo
  // }
];