<template>
  <div class="container">
    <navbar-app />
    <transition
      mode="out-in"
      enter-active-class="animate__animated animate__fadeIn"
      leave-active-class="animate__animated animate__fadeOut"
    >
      <router-view class="section"/>
    </transition>
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