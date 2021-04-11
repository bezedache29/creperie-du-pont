<template>
  <div class="modal">
    <!-- Modal content -->
    <div class="modal__content">
      <span class="modal__close" @click="closeModal">&times;</span>
      <h2 class="modal__content__title">Mentions légales</h2>
      <div class="modal__content__section">
        <h3>Editeur</h3>
        <p>Le site <a href="https://creperie-du-pont.ripley.eu" class="modal__content__section__link">creperie-du-pont.ripley.eu</a> est édité par GIRFA SARL, dont le siège social est au lieu dit Paluden, 29870 Lannilis</p>
        <p @click="showTel" v-if="!this.$store.state.telCreperie" class="modal__content__section__tel">Cliquez pour voir le n° téléphone</p>
        <p v-else>Tél: 02 98 04 01 21</p>
        <p>Courriel: <router-link to="/contact" @click="closeModal" class="modal__content__section__link">lien vers formulaire</router-link></p>
        <p>SIREN: 504 786 443</p>
      </div>
      <div class="modal__content__section">
        <h3>Hébergeur</h3>
        <p>Le site <a href="https://creperie-du-pont.ripley.eu" class="modal__content__section__link">creperie-du-pont.ripley.eu</a> est hébergé par la société ionos by 1&1 , dont le siège social est 7 place de la Gare – 57200 Sarreguemines  – France</p>
        <p>Tél : 09 70 80 89 11</p>
      </div>
      <div class="modal__content__section">
        <h3>Propriété intellectuelle</h3>
        <p>La structure générale du site <a href="https://creperie-du-pont.ripley.eu" class="modal__content__section__link">creperie-du-pont.ripley.eu</a>, ainsi que les textes, graphiques, images, sons et vidéos la composant, sont la propriété de GIRFA SARL ou de ses partenaires. Toute représentation et/ou reproduction et/ou exploitation partielle ou totale de ce site, par quelque procédé que ce soit, sans l’autorisation préalable et par écrit de GIRFA SARL ou de ses partenaires est strictement interdite et serait susceptible de constituer une contrefaçon au sens des articles L 335-2 et suivants du Code de la propriété intellectuelle.</p>
      </div>
      <div class="modal__content__section">
        <h3>Loi informatique et liberté</h3>
        <p>Conformément à la loi Informatique et Liberté 78-17 du 6 janvier 1978 modifiée, vous disposez d’un droit d’opposition (art. 38), d’accès (art. 39), de rectification ou de suppression (art. 40) des données qui vous concernent. Vous pouvez exercer ce droit en vous adressant à GIRFA SARL,</p>
        <p>Ce droit s’exerce, en justifiant de son identité :</p>
        <p>par voie postale : GIRFA SARL, lieu dit Paluden, 29870 Lannilis.</p>
        <p>par courrier électronique : <router-link to="/contact" @click="closeModal" class="modal__content__section__link">via le formulaire de la page contact</router-link></p>
        <p>Toutes les données personnelles qui sont recueillies sont traitées avec la plus stricte confidentialité.</p>
        <p>Le site utilise également les cookies</p>
        <p>Encore une fois aucune donnée à caractère personnel ne sera collectée.</p>
      </div>
      <div class="modal__content__buttons">
        <button @click="closeModal">Fermer</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'modal-app',

  methods: {
    closeModal() {
      this.$store.commit('CLOSE_MODAL_MENTIONS')
    },
    showTel() {
      this.$store.commit('SHOW_TEL_CREPERIE')
    }
  },



}
</script>