<template>
  <div class="navbar">
      <a href="" class="navbar__logo">
        <img src="../../assets/images/logo.png" alt="logo crêperie du pont" class="navbar__logo__img">
      </a>
    <nav class="navbar__links-group">
      <ul class="navbar__links">
        <li><router-link to="/" class="navbar__links__link">Accueil</router-link></li>
        <li class="dropdown">
          <a class="navbar__links__link dropdown__title">Présentation</a>
          <span class="dropdown__content">
            <a class="navbar__links__link">Le restaurant</a>
            <a class="navbar__links__link">Nos animations</a>
            <a class="navbar__links__link">Nos salles</a>
          </span>
        </li>
        <li class="dropdown">
          <a class="navbar__links__link dropdown__title">Cartes & Menu</a>
          <span class="dropdown__content">
            <a class="navbar__links__link">Nos galettes</a>
            <a class="navbar__links__link">Nos pizzas</a>
            <a class="navbar__links__link">Nos crêpes</a>
            <a class="navbar__links__link">Nos glaces</a>
            <a class="navbar__links__link">Menu Ti Mousse</a>
            <a class="navbar__links__link">Carte boissons</a>
          </span>
        </li>
        <li class="dropdown">
          <a class="navbar__links__link dropdown__title">Témoignages</a>
          <span class="dropdown__content">
            <a class="navbar__links__link">Tripadvisor</a>
            <a class="navbar__links__link">Restaurant Guru</a>
          </span>
        </li>
        <li><router-link to="/contact" class="navbar__links__link">Contact</router-link></li>
        <li><router-link to="/covid19" class="navbar__links__link">COVID 19</router-link></li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'navbar-app'
}
</script>