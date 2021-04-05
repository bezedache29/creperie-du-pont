<template>
  <div class="container">
    <navbar-app />
    <router-view />
    <footer-app />
  </div>
</template>

<script>

import '../assets/scss/style.scss'

import NavbarApp from './Layouts/Navbar/NavbarApp'
import FooterApp from './Layouts/Footer/FooterApp'

export default {
  name: 'app',

  components: {
    NavbarApp,
    FooterApp
  },
}
</script>