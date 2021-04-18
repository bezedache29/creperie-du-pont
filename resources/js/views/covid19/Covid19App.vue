<template>
  <section class="section covid19">

    <h1 class="section__title">Covid 19</h1>

    <div class="covid19__couvre-feu">
      <div class="covid19__couvre-feu__circle"></div>
      <h2 class="covid19__couvre-feu__title">Couvre feu !</h2>
      <div class="covid19__couvre-feu__circle"></div>
    </div>

    <h3 class="covid19__mini-title">La crêperie du pont continue sa vente à emporter</h3>

    <p class="covid19__content">Comme vous le savez, le gouvernement a annoncé l'interdiction de la restauration sur place depuis le vendredi 30 octobre 2020.</p>

    <p class="covid19__content">Toutefois, nous continuons de vous servir avec notre vente à emporter. Pour cela, vous pourrez commander par téléphone au afficher le n° téléphone. Les retraits peuvent s'effectuer entre 11h45 et 13h30 du lundi au vendredi. Malheureusement, en raison du couvre-feu à 19h, nous ne pouvons également plus vous servir le weekend au soir.</p>

    <p class="covid19__content">Parce que c’est grâce à vous, chers clients, que la crêperie du pont traversera cette longue période de turbulences, nous ne manquerons pas de vous tenir informés très vite, dès lors que des évolutions dans nos horaires pourront avoir lieu.</p>
  
    <p class="covid19__content">Alors restez connectés, inscrivez vous à la newsletter et à très vite ! ?</p>

    <p class="covid19__content">Retrouvez notre carte des pizzas à emporter ici et nos crêpes à emporter ici, chaque semaines sur notre page Facebook et en restaurant</p>
  
    <div class="covid19__protocole">
      <div class="covid19__protocole__commands" data-aos="fade-right">
        <div class="covid19__protocole__commands__desc">
          <p class="covid19__protocole__commands__desc__text">Port du masque obligatoire pour venir retirer vos commandes</p>
          <p class="covid19__protocole__commands__desc__text">Paiements sans contacts à privilégier</p>
        </div>
        <div class="covid19__protocole__commands__mask">
          <div class="covid19__protocole__commands__mask__image">
            <img src="../../assets/icons/covid19/mask.png" alt="icone port du masque obligatoire">
          </div>
        </div>
      </div>
      <div class="covid19__protocole__image" data-aos="fade-left">
        <img src="../../assets/icons/covid19/protocole.png" alt="image protocole COVID19">
      </div>
    </div>

  </section>
</template>

<script>

import AOS from 'aos'

export default {
  name: 'covid19-app',
  

  created() {
    AOS.init()
  }
}
</script>