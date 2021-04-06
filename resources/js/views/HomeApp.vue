<template>
  <section class="section">
    <h1>Home</h1>
  </section>
</template>

<script>
export default {
  name: 'home-app',

  created() {
    console.log(this.$store.state.crepes)
  }
}
</script>