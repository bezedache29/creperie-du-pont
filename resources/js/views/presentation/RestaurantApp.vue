<template>
    <h1>Page restaurant</h1>
</template>

<script>
export default {
  name: 'restaurant-app',

  created() {
    console.log(this.$store.state.crepes)
  }
}
</script>

<style scoped>
h1 {
  padding-top: 150px;
}
</style>