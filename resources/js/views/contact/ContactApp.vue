<template>
  <section class="section contact">

    <h1 class="section__title">Contact</h1>

    <div class="contact__content">
      <div class="contact__content__map">
        <img src="../../assets/images/contact/map.jpg" alt="">
      </div>
      <div class="contact__content__adress">
        <div class="contact__content__adress__infos">
          <h2 class="contact__content__adress__infos__title">Crêperie du pont</h2>
          <p class="contact__content__adress__infos__ld">Paluden</p>
          <p class="contact__content__adress__infos__city">29870 LANNILIS</p>
          <p class="contact__content__adress__infos__click-tel" @click="showTel" v-if="!tel">Cliquez pour voir le n° téléphone</p>
          <p class="contact__content__adress__infos__tel" v-else>02 98 04 01 21</p>
        </div>
      </div>
    </div>

    <h2 class="contact__mini-title">Formulaire de contact</h2>

    <form class="contact__formulaire">

      <div class="contact__formulaire__civ">
        <p>Civilité*:</p>
        <input type="radio" id="mr" class="radio" checked>
        <label for="mr">Monsieur</label>
        <input type="radio" id="mme" class="radio">
        <label for="mme">Madame</label>
      </div>

      <div class="contact__formulaire__inputs">
        <div class="contact__formulaire__inputs__input">
          <label for="name">Nom*</label>
          <input type="text">
        </div>
        <div class="contact__formulaire__inputs__input contact__formulaire__inputs__input--ml">
          <label for="name">Prénom*</label>
          <input type="text">
        </div>
      </div>

      <div class="contact__formulaire__inputs">
        <div class="contact__formulaire__inputs__input">
          <label for="name">Date du repas</label>
          <input type="text">
        </div>
        <div class="contact__formulaire__inputs__input contact__formulaire__inputs__input--ml">
          <label for="name">Téléphone*</label>
          <input type="text">
        </div>
      </div>

      <div class="contact__formulaire__inputs">
        <div class="contact__formulaire__inputs__input">
          <label for="name">Nombre de personnes</label>
          <input type="text">
        </div>
        <div class="contact__formulaire__inputs__input contact__formulaire__inputs__input--ml">
          <label for="name">E-mail*</label>
          <input type="text">
        </div>
      </div>

      <div class="contact__formulaire__radios">
        <div class="contact__formulaire__radios__radio">
          <input type="radio" class="radio" checked>
          <label for="">Midi</label>
        </div>
        <div class="contact__formulaire__radios__radio">
          <input type="radio" class="radio">
          <label for="">Soir</label>
        </div>
      </div>

      <div class="contact__formulaire__comments">
        <label for="">Commentaire</label>
        <textarea name="" id="" cols="30" rows="20"></textarea>
      </div>

      <p class="contact__formulaire__infos">Aucune donnée personnelle n'est conservée par notre site via ce formulaire</p>

      <div class="contact__footer">
        <div class="contact__footer__recaptcha">
          <input type="checkbox">
          <p>reCAPTCHA</p>
        </div>
        <div class="contact__footer__button">
          <button>ENVOYER</button>
        </div>
      </div>

    </form>

  </section>
</template>

<script>


export default {
  name: 'contact-app',

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