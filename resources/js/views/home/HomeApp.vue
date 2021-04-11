<template>
  <section class="section">

    <!-- Les cards -->
    <div class="cards">
      <!-- Spécialitéss -->
      <a class="cards__card cards__card--hover">
        <ul class="cards__card__images">
          <li class="cards__card__images__image">
            <img src="../../assets/images/spes/crepe_spe1.jpg" class="cards__card__images__image__img" alt="photo crêpe spécialité">
          </li>
          <li class="cards__card__images__image">
            <img src="../../assets/images/spes/crepe_spe2.jpg" class="cards__card__images__image__img" alt="photo crêpe spécialité">
          </li>
          <li class="cards__card__images__image">
            <img src="../../assets/images/spes/crepe_spe3.jpg" class="cards__card__images__image__img" alt="photo crêpe spécialité">
          </li>
        </ul>
        <p class="cards__card__title cards__card__title--hover">Spécialités</p>
      </a>

      <!-- Jours & Horaires -->
      <div class="cards__card">
        <div class="cards__card__border">
          <ul class="cards__card__border__infos">
            <li>Dimanche 09:00 - 23:00</li>
            <li>Lundi Fermé</li>
            <li>Mardi Fermé</li>
            <li>Mercredi 09:00 - 20:00</li>
            <li>Jeudi 09:00 - 23:00</li>
            <li>Vendredi 09:00 - 00:00</li>
            <li>Samedi 09:00 - 00:00</li>
          </ul>
        </div>
        <p class="cards__card__title">Jours & Horaires d'ouverture</p>
      </div>

      <!-- Idées Cadeaux -->
      <a class="cards__card cards__card--hover">
        <div class="cards__card__image">
          <img src="../../assets/images/idees_cadeaux.png" alt="image idées cadeaux">
        </div>
        <p class="cards__card__title cards__card__title--hover">Idées Cadeaux</p>
      </a>
    </div>

    <!-- Nos Salles -->
    <router-link to="../presentation/salles" class="salles animate__animated animate__backInLeft">
      <div class="salles__image">
        <img src="../../assets/images/salles/presentation.jpg" alt="" class="salles__image__img">
      </div>
      <p class="salles__title">Nos salles</p>
    </router-link>

    <div class="big-cards">
      
      <!-- Nos auberges -->
      <div class="big-cards__card big-cards__card--auberges">
        <p class="big-cards__card--auberges__title">Nos auberges</p>
        <div class="big-cards__card--auberges__content">

          <!-- Auberge du Pont -->
          <div class="big-cards__card--auberges__content__container">
            <div class="big-cards__card--auberges__content__container__image">
              <img src="../../assets/images/auberges/auberge-du-pont.jpg" alt="Photo Auberge du Pont">
            </div>
            <p class="big-cards__card--auberges__content__container__title">Auberge du Pont</p>
            <p class="big-cards__card--auberges__content__container__role">Restaurant</p>
            <p class="big-cards__card--auberges__content__container__description">
              Petite Auberge décorée d'antiquités marines, où l'on sert une cuisine authentique.
            </p>
            <div class="big-cards__card--auberges__content__container__social-container">
              <a href="https://www.facebook.com/Auberge-du-pont-133158610052974/" target="_blank"><i class="fab fa-facebook"></i></a>
              <a href="https://twitter.com/aubergedupont" target="_blank"><i class="fab fa-twitter"></i></a>
              <a href="https://www.tripadvisor.fr/Restaurant_Review-g2269303-d2541283-Reviews-Auberge_du_Pont-Lannilis_Finistere_Brittany.html" target="_blank"><i class="fab fa-tripadvisor"></i></a>
            </div>
          </div>

          <!-- Auberge de Meneham -->
          <div class="big-cards__card--auberges__content__container big-cards__card--auberges__content__container--right">
            <div class="big-cards__card--auberges__content__container__image">
              <img src="../../assets/images/auberges/auberge-de-meneham.jpg" alt="Photo Auberge de Meneham">
            </div>
            <p class="big-cards__card--auberges__content__container__title">Auberge de Meneham</p>
            <p class="big-cards__card--auberges__content__container__role">Bar, Restaurant</p>
            <p class="big-cards__card--auberges__content__container__description">
              Pour une pause gourmande lors de votre visite à Meneham, rendez-vous à l'auberge, l’ancien bistrot du village.
            </p>
            <div class="big-cards__card--auberges__content__container__social-container">
              <a href="https://www.facebook.com/Auberge-de-Meneham-802403739827619/" target="_blank"><i class="fab fa-facebook"></i></a>
              <a href="https://twitter.com/aubergedupont" target="_blank"><i class="fab fa-twitter"></i></a>
              <a href="https://www.tripadvisor.fr/Restaurant_Review-g1736200-d2255546-Reviews-Auberge_de_Meneham-Kerlouan_Finistere_Brittany.html" target="_blank"><i class="fab fa-tripadvisor"></i></a>
            </div>
          </div>
        </div>
      </div>

      <!-- Reservations -->
      <div class="big-cards__card big-cards__card--border">
        <p class="big-cards__card--border__title">Reservations</p>
        <div class="big-cards__card--border__content">
          <img src="../../assets/icons/telephone.svg" alt="">
          <p class="big-cards__card--border__content__info">Reservation uniquement par téléphone</p>
          <p @click="showTel" v-if="!tel" class="big-cards__card--border__content__click-tel">Cliquez pour voir le n° téléphone</p>
          <p v-else class="big-cards__card--border__content__tel animate__animated animate__tada">02 98 04 01 21</p>
        </div>
      </div>

    </div>

    <payment-methods></payment-methods>
    
  </section>
</template>

<script>

import PaymentMethods from '../../components/PaymentMethods/PaymentMethods'

export default {
  name: 'home-app',

  components: {
    PaymentMethods
  },
  
  data() {
    return {
      tel: false
    }
  },

  methods: {
    showTel() {
      this.tel = true
    }
  }
}
</script>