<template>
  <navbar-app />

 <!-- Page accueil par defaut

  <router-link to="/">Accueil</router-link>
  <router-link to="/menus">Menus</router-link> -->

  <!-- <router-view />  -->
</template>

<script>

import '../assets/scss/style.scss'

import NavbarApp from './Navbar/NavbarApp'

export default {
  name: 'app',

  components: {
    NavbarApp
  },
}
</script>