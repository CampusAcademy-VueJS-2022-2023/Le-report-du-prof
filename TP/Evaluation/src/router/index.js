import { createRouter, createWebHistory } from "vue-router"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/HomeView.vue"),
    },
    {
      path: "/details-films/:id",
      name: "details-films",
      component: () => import("../views/DetailsMovie.vue"),
    },
    {
      path: "/search/:search",
      name: "search",
      component: () => import("../views/SearchMovie.vue"),
    },
    {
      path: "/series",
      name: "series",
      component: () => import("../views/SerieList.vue"),
    }
  ],
})

export default router
