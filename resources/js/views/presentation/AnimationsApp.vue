<template>
  <section class="section animations">

    <h1 class="section__title">Nos animations</h1>

    <div class="animations__descriptions">
      <p class="animations__descriptions__info">Tous les 1er samedi soir de chaque mois, nous organisons un "repas concert".</p>
      <p class="animations__descriptions__info">Les artistes sont affichés dans la rubrique concert du site (actuellement COVID 19). Sinon inscrivez-vous à notre <a href="#newsletter">newsletter</a> pour avoir des informations sur les prochains concerts.</p>
      <p class="animations__descriptions__info animations__descriptions__info--mt">Vous êtes intéressé ? N'hésitez plus et contactez-nous pour réserver votre place par téléphone ou via ce <router-link to="/contact">formulaire de contact</router-link></p>
    </div>
    
    <!-- Slider -->
    <div class="animations__slider animate__animated animate__zoomInDown" id="slider1">
      <input type="radio" name="slides" checked="checked" id="slides_1"/>
      <input type="radio" name="slides" id="slides_2"/>
      <input type="radio" name="slides" id="slides_3"/>
      <input type="radio" name="slides" id="slides_4"/>
      <input type="radio" name="slides" id="slides_5"/>
      <input type="radio" name="slides" id="slides_6"/>
      <input type="radio" name="slides" id="slides_7"/>
      <input type="radio" name="slides" id="slides_8"/>
      <input type="radio" name="slides" id="slides_9"/>
      <input type="radio" name="slides" id="slides_10"/>
      <ul>
        <li>
            <img src="../../assets/images/animations/concert1.jpg" alt="Photo de concert" />
        </li>
        <li>
            <img src="../../assets/images/animations/concert2.jpg" alt="Photo de concert" />
        </li>
        <li>
            <img src="../../assets/images/animations/concert3.jpg" alt="Photo de concert" />
        </li>
        <li>
            <img src="../../assets/images/animations/concert4.jpg" alt="Photo de concert" />
        </li>
        <li>
            <img src="../../assets/images/animations/concert5.jpg" alt="Photo de concert" />
        </li>
        <li>
            <img src="../../assets/images/animations/concert6.jpg" alt="Photo de concert" />
        </li>
        <li>
            <img src="../../assets/images/animations/concert7.jpg" alt="Photo de concert" />
        </li>
        <li>
            <img src="../../assets/images/animations/concert8.jpg" alt="Photo de concert" />
        </li>
        <li>
            <img src="../../assets/images/animations/concert9.jpg" alt="Photo de concert" />
        </li>
        <li>
            <img src="../../assets/images/animations/concert10.jpg" alt="Photo de concert" />
        </li>
      </ul>
      <div class="arrows">
        <label for="slides_1"></label>
        <label for="slides_2"></label>
        <label for="slides_3"></label>
        <label for="slides_4"></label>
        <label for="slides_5"></label>
        <label for="slides_6"></label>
        <label for="slides_7"></label>
        <label for="slides_8"></label>
        <label for="slides_9"></label>
        <label for="slides_10"></label>
        <label class="goto-first" for="slides_1"></label>
        <label class="goto-last" for="slides_10"></label>
      </div>
      <div class="navigation"> 
        <div>
          <label for="slides_1"></label>
          <label for="slides_2"></label>
          <label for="slides_3"></label>
          <label for="slides_4"></label>
          <label for="slides_5"></label>
          <label for="slides_6"></label>
          <label for="slides_7"></label>
          <label for="slides_8"></label>
          <label for="slides_9"></label>
          <label for="slides_10"></label>
        </div>
      </div>

    </div>
    
    <payment-methods />

  </section>
</template>

<script>

import PaymentMethods from '../../components/PaymentMethods/PaymentMethods'

export default {
  name: 'animations-app',

  components: {
    PaymentMethods
  }
}
</script>