import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import about from "@/views/AboutView.vue";
import SearchRuslt from "@/views/SearchRuslt.vue";
import AboutViewTV from "@/views/AboutViewTV.vue";
import AboutAll from "@/views/AboutAll.vue";
import AboutAlltv from "@/views/AboutAlltv.vue";
import WatchAllMov from "@/views/WatchAllMov.vue";
import WatchAllTV from "@/views/WatchAllTV.vue";
import ShowallTRND from "@/views/ShowallTRND.vue";
import ListsPage from "@/views/ListsPage.vue";
const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    meta: {
      titel: "Home",
    },
  },
  {
    path: "/about/:filmid",
    name: "about",
    component: about,
    meta: {
      titel: "About",
    },
  },
  {
    path: "/SEARCH",
    name: "search",
    component: SearchRuslt,
    meta: {
      titel: "result",
    },
  },
  {
    path: "/AboutTV/:filmid",
    name: "AboutTV",
    component: AboutViewTV,
    meta: {
      titel: "AboutTV",
    },
  },
  {
    path: "/AboutAll/:filmid",
    name: "AboutAll",
    component: AboutAll,
    meta: {
      titel: "AboutAll",
    },
  },
  {
    path: "/AboutAlltv/:filmid",
    name: "AboutAlltv",
    component: AboutAlltv,
    meta: {
      titel: "AboutAlltv",
    },
  },
  {
    path: "/WatchAllmov",
    name: "WatchAllmov",
    component: WatchAllMov,
    meta: {
      titel: "WatchM",
    },
  },
  {
    path: "/WatchAllTV",
    name: "WatchAllTV",
    component: WatchAllTV,
    meta: {
      titel: "WatchTV",
    },
  },
  {
    path: "/SHowAll",
    name: "SHowAll",
    component: ShowallTRND,
    meta: {
      titel: "show all",
    },
  },
  {
    path: "/listspage",
    name: "listpage",
    component: ListsPage,
    meta: {
      titel: "list",
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
