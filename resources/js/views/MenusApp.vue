<template>
  <div>
    <h1>Page menus</h1>

    <ul>
      <li v-for="(crepe, index) in this.$store.state.crepes" :key="index">{{ crepe.name }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'menus-app',

  created() {
    console.log(this.$store.state.crepes)
  }
}
</script>

<style>

</style>