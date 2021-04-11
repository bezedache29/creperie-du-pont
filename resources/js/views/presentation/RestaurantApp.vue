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
      
    </div>

    <!-- Restaurant galettes -->
    <div class="restaurant__section">

    </div>

    <!-- Restaurant Enfants -->
    <div class="restaurant__long-section">

    </div>

    <!-- Restaurant Concert -->
    <div class="restaurant__long-section">

    </div>

    <!-- Restaurant auberges -->
    <div class="restaurant__section">
      
    </div>

    <payment-methods></payment-methods>

  </section>
</template>

<script>

import PaymentMethods from '../../components/PaymentMethods/PaymentMethods'

export default {
  name: 'restaurant-app',

  components: {
    PaymentMethods
  }

}
</script>