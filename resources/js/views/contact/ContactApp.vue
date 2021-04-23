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
          <p class="contact__content__adress__infos__click-tel">Cliquez pour voir le n° téléphone</p>
          <p class="contact__content__adress__infos__tel">02 98 04 01 21</p>
        </div>
      </div>
    </div>

    <h2 class="section__mini-title">Formulaire de contact</h2>

    <form class="section__formulaire">

      <div class="section__formulaire__civ">
        <p>Civilité*:</p>
        <input type="radio" id="mr">
        <label for="mr">Monsieur</label>
        <input type="radio" id="mme">
        <label for="mme">Madame</label>
      </div>

      <div class="section__formulaire__inputs">
        <div class="section__formulaire__inputs__input">
          <label for="name">Nom*</label>
          <input type="text">
        </div>
        <div class="section__formulaire__inputs__input">
          <label for="name">Prénom*</label>
          <input type="text">
        </div>
      </div>

      <div class="section__formulaire__inputs">
        <div class="section__formulaire__inputs__input">
          <label for="name">Date du repas</label>
          <input type="text">
        </div>
        <div class="section__formulaire__inputs__input">
          <label for="name">Téléphone*</label>
          <input type="text">
        </div>
      </div>

      <div class="section__formulaire__inputs">
        <div class="section__formulaire__inputs__input">
          <label for="name">Nombre de personnes</label>
          <input type="text">
        </div>
        <div class="section__formulaire__inputs__input">
          <label for="name">E-mail*</label>
          <input type="text">
        </div>
      </div>

      <div class="section__formulaire__radios">
        <div class="section__formulaire__radios__radio">
          <input type="radio">
          <label for="">Midi</label>
        </div>
        <div class="section__formulaire__radios__radio">
          <input type="radio">
          <label for="">Soir</label>
        </div>
      </div>

      <div class="section__formulaire__comments">
        <label for="">Commentaires</label>
        <textarea name="" id="" cols="30" rows="10"></textarea>
      </div>

      <p class="section__formulaire__infos">Aucune donnée personnelle n'est conservée par notre site via ce formulaire</p>

    </form>

  </section>
</template>

<script>


export default {
  name: 'contact-app',

}
</script>