<template>
  <div>
    <h1>Page Home</h1>
  </div>
</template>

<script>
export default {
  name: 'home-app',

  created() {
    console.log(this.$store.state.crepes)
  }
}
</script>

<style>

</style>