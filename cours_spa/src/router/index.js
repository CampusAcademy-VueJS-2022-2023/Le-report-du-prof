import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NotFound from '../components/NotFound.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/inscrits',
    name: 'inscrits',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/InscritListView.vue')
  },
  {
    path: '/compteur',
    name: 'compteur',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/CompteurDisplayView.vue')
  },
  {
    path: '/404', name:'NotFound', component: NotFound
  },
  {
    path: '/:catchAll(.*)', redirect: '404'
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
