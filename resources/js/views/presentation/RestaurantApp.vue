<template>
  <section class="section restaurant">

    <h1 class="restaurant__title">Le restaurant</h1>

    <!-- Restaurant header -->
    <div class="restaurant__long-section">
      <p class="restaurant__long-section__description">Situé entre les bourgs de Lannilis et de Plougerneau, sur la route de la côte, la Crêperie de Pont bénéficie d'un cadre magnifique.</p>
      <div class="restaurant__long-section__image">
        <img src="../../assets/images/restaurant/creperie.jpg" alt="Crêperie du Pont">
      </div>
    </div>

    <!-- Restaurant description -->
    <div class="restaurant__section">
      <div class="restaurant__section__w50 restaurant__section__w50--left" data-aos="fade-right">
        <p class="restaurant__section__w50__desc">Vous ne pouvez pas la rater, avec ses beaux volets rouges. Vielles pierres, bois et murs blancs rendent l'intérieur châlereux, à l'image de notre équipe. Nous mettons en place une terrasse, ouverte l'été, qui vous permet d'admirer l'Aber.</p>
      </div>
      <div class="restaurant__section__w50 restaurant__section__w50--right" data-aos="fade-left">
        <img src="../../assets/images/restaurant/salle.jpg" alt="Salle restaurant">
      </div>
    </div>

    <!-- Restaurant galettes -->
    <div class="restaurant__section">
      <div class="card" data-aos="flip-right">
        <ul class="card__images">
          <li class="card__images__image">
            <img src="../../assets/images/restaurant/carte/galette.jpg" class="card__images__image__img" alt="photo galette">
          </li>
          <li class="card__images__image">
            <img src="../../assets/images/restaurant/carte/salade.jpg" class="card__images__image__img" alt="photo salade">
          </li>
          <li class="card__images__image">
            <img src="../../assets/images/restaurant/carte/paptez.jpg" class="card__images__image__img" alt="photo patatez">
          </li>
          <li class="card__images__image">
            <img src="../../assets/images/restaurant/carte/pizza.jpg" class="card__images__image__img" alt="photo pizza">
          </li>
          <li class="card__images__image">
            <img src="../../assets/images/restaurant/carte/burger.jpg" class="card__images__image__img" alt="photo burger">
          </li>
          <li class="card__images__image">
            <img src="../../assets/images/restaurant/carte/crepe.jpg" class="card__images__image__img" alt="photo crêpe">
          </li>
        </ul>
      </div>
      <div class="restaurant__section__w50 restaurant__section__w50--solo" data-aos="fade-left">
        <p class="restaurant__section__w50__desc">Notre chef vous propose toute une gamme de galettes, ainsi que des salades, des pommes de terre cuisinées (les fameuses Patatez), des omelettes, des pizzas et des burgers, de quoi contenter tout le monde. En ce qui concerne les desserts, vous aurez l'embarras du choix entre les crêpes au froment et les coupes de glace.</p>
      </div>
    </div>

    <!-- Restaurant Enfants -->
    <div class="restaurant__long-section" data-aos="flip-up">
      <p class="restaurant__long-section__description">La Crêperie du Pont veille à satisfaire aussi les petits, avec un menu adapté aux enfants et un coin étudié pour eux.</p>
      <div class="restaurant__long-section__image">
        <img src="../../assets/images/restaurant/enfants.jpg" alt="espace enfants">
      </div>
    </div>

    <!-- Restaurant Concert -->
    <div class="restaurant__long-section" data-aos="flip-down">
      <p class="restaurant__long-section__description">Enfin, la crêperie propose réguilièrement des diners-concerts, ce qui permet de passer une agréable soirée en musique.</p>
      <div class="restaurant__long-section__image restaurant__long-section__image--center">
        <img src="../../assets/images/restaurant/concert.jpg" alt="Diner concert">
      </div>
    </div>

    <!-- Restaurant auberges -->
    <div class="restaurant__section restaurant__section--auberges">
      <h2 class="restaurant__section--auberges__title">Nos auberges</h2>

      <div class="big-cards__card--auberges__content big-cards__card--auberges__content--restaurant">

          <auberges-app></auberges-app>
          
      </div>

    </div>

    <payment-methods></payment-methods>

  </section>
</template>

<script>

import AOS from 'aos'

import AubergesApp from '../../components/Auberges/AubergesApp'
import PaymentMethods from '../../components/PaymentMethods/PaymentMethods'

export default {
  name: 'restaurant-app',

  components: {
    PaymentMethods,
    AubergesApp
  },

  created() {
    AOS.init()
  }

}
</script>