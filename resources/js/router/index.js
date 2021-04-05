import { createRouter, createWebHistory } from 'vue-router'
import Home from './../views/HomeApp.vue'
import Restaurant from './../views/RestaurantApp.vue'
import Contact from './../views/ContactApp.vue'

// const history = createWebHistory()
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/restaurant',
      name: 'restaurant',
      component: Restaurant
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    }
  ]
})

export default router