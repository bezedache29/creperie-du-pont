<template>
  <h1>Fichier app.vue</h1>

  <router-link to="/">Accueil</router-link>
  <router-link to="/menus">Menus</router-link>

  <router-view />
</template>

<script>
export default {
  name: 'app'
}
</script>

<style scoped>

</style>