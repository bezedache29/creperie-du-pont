<template>
  <div class="navbar">
      <router-link to="/" class="navbar__logo">
        <img src="../../../assets/images/logo.png" alt="logo crêperie du pont" class="navbar__logo__img">
      </router-link>
    <nav class="navbar__links-group">
      <ul class="navbar__links">
        <li><router-link to="/" class="navbar__links__link">Accueil</router-link></li>
        <li class="dropdown">
          <a class="navbar__links__link dropdown__title">Présentation</a>
          <span class="dropdown__content">
            <router-link to="/restaurant" class="navbar__links__link">Le restaurant</router-link>
            <router-link to="/animations" class="navbar__links__link">Nos animations</router-link>
            <router-link to="/salles" class="navbar__links__link">Nos salles</router-link>
          </span>
        </li>
        <li class="dropdown">
          <a class="navbar__links__link dropdown__title">Cartes & Menu</a>
          <span class="dropdown__content">
            <router-link to="/galettes" class="navbar__links__link">Nos galettes</router-link>
            <router-link to="/pizzas" class="navbar__links__link">Nos pizzas</router-link>
            <router-link to="/crepes" class="navbar__links__link">Nos crêpes</router-link>
            <router-link to="/glaces" class="navbar__links__link">Nos glaces</router-link>
            <router-link to="/timousse" class="navbar__links__link">Menu Ti Mousse</router-link>
            <router-link to="/boissons" class="navbar__links__link">Carte boissons</router-link>
          </span>
        </li>
        <li class="dropdown">
          <a class="navbar__links__link dropdown__title">Témoignages</a>
          <span class="dropdown__content">
            <a href="https://www.tripadvisor.fr/Restaurant_Review-g2269303-d3422607-Reviews-Creperie_du_Pont-Lannilis_Finistere_Brittany.html" target="_blank" class="navbar__links__link">Tripadvisor</a>
            <a href="https://fr.restaurantguru.com/Creperie-du-Pont-de-Paluden-Lannilis" target="blank" class="navbar__links__link">Restaurant Guru</a>
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