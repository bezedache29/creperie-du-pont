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

          <auberges-app></auberges-app>
          
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

import AubergesApp from '../../components/Auberges/AubergesApp'
import PaymentMethods from '../../components/PaymentMethods/PaymentMethods'

export default {
  name: 'home-app',

  components: {
    PaymentMethods,
    AubergesApp
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