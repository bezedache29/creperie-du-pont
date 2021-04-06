import { createRouter, createWebHistory } from 'vue-router'
import Home from './../views/home/HomeApp.vue'
import Restaurant from './../views/presentation/RestaurantApp.vue'
import Animations from './../views/presentation/AnimationsApp.vue'
import Salles from './../views/presentation/Salles.vue'
import Galettes from './../views/cartes-menu/GalettesApp.vue'
import Pizzas from './../views/cartes-menu/PizzasApp.vue'
import Crepes from './../views/cartes-menu/CrepesApp.vue'
import Glaces from './../views/cartes-menu/GlacesApp.vue'
import Timousse from './../views/cartes-menu/TimousseApp.vue'
import Boissons from './../views/cartes-menu/BoissonsApp.vue'
import Contact from './../views/contact/ContactApp.vue'
import Covid19 from './../views/covid19/Covid19App.vue'

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
      path: '/animations',
      name: 'animations',
      component: Animations
    },
    {
      path: '/salles',
      name: 'salles',
      component: Salles
    },
    {
      path: '/galettes',
      name: 'galettes',
      component: Galettes
    },
    {
      path: '/pizzas',
      name: 'pizzas',
      component: Pizzas
    },
    {
      path: '/crepes',
      name: 'crepes',
      component: Crepes
    },
    {
      path: '/glaces',
      name: 'glaces',
      component: Glaces
    },
    {
      path: '/timousse',
      name: 'timousse',
      component: Timousse
    },
    {
      path: '/boissons',
      name: 'boissons',
      component: Boissons
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    },
    {
      path: '/covid19',
      name: 'covid19',
      component: Covid19
    },
  ]
})

export default router