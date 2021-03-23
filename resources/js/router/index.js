import { createRouter, createWebHistory } from 'vue-router'
import Home from './../views/HomeApp.vue'
import Menus from './../views/MenusApp.vue'

const history = createWebHistory()
const router = createRouter({
  history,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/menus',
      name: 'Menus',
      component: Menus
    },
  ]
})

export default router