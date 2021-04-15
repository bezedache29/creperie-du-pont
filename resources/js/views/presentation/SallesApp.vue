<template>
  <section class="section salles-app">

    <h1 class="section__title">Nos salles</h1>

    <p class="salles-app__description">Le restaurant dispose d'un bar, d'une salle avec une vue sur l'Aber, et d'une terrasse ouverte l'été au bord de plage.</p>

    <div class="salles-app__aber animate__animated animate__zoomIn">
      <p class="salles-app__aber__title salles-app__aber__title--rl">Vue imprenable sur l'Aber</p>
      <div class="salles-app__aber__image">
        <img src="../../assets/images/salles/vue-aber.jpg" alt="photo vue sur l'Aber">
      </div>
    </div>

    <hr class="salles-app__hr" />

    <div class="salles-app__aber" data-aos="zoom-in-up">
      <p class="salles-app__aber__title salles-app__aber__title--rr">Les pieds dans l'eau</p>
      <div class="salles-app__aber__image">
        <img src="../../assets/images/salles/terrasse.jpg" alt="photo de la terrasse">
      </div>
    </div>

    <hr class="salles-app__hr" />

    <div class="salles-app__children">
      <p class="salles-app__children__description">Le restaurant dispose également d'un coin réservé aux enfants.</p>
      <div class="salles-app__children__image">
        <img src="../../assets/images/salles/children.jpg" alt="image salle enfant">
      </div>
    </div>

    <hr class="salles-app__hr" />

    <div class="salles-app__events" data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
      <p class="salles-app__events__description">Modulables au gré de vos envies et de vos événements :</p>
      <div class="salles-app__events__cards">

        <div class="salles-app__events__cards__card">
          <div class="salles-app__events__cards__card__image">
            <img src="../../assets/images/salles/reunions.jpg" alt="photo réunions">
          </div>
          <p class="salles-app__events__cards__card__title">Réunions</p>
        </div>

        <div class="salles-app__events__cards__card">
          <div class="salles-app__events__cards__card__image">
            <img src="../../assets/images/salles/bapteme.jpg" alt="photo baptèmes">
          </div>
          <p class="salles-app__events__cards__card__title">Baptèmes</p>
        </div>

        <div class="salles-app__events__cards__card">
          <div class="salles-app__events__cards__card__image">
            <img src="../../assets/images/salles/mariage.jpg" alt="photo mariages">
          </div>
          <p class="salles-app__events__cards__card__title">Mariages</p>
        </div>

        <div class="salles-app__events__cards__card">
          <div class="salles-app__events__cards__card__image">
            <img src="../../assets/images/salles/anniversaire.jpg" alt="photo anniversaires">
          </div>
          <p class="salles-app__events__cards__card__title">Anniversaires</p>
        </div>
      </div>

    </div>
  </section>
</template>

<script>

import AOS from 'aos'

export default {
  name: 'salles-app',

  created() {
    AOS.init()
  }
}
</script>