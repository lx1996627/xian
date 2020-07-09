<template>
  <div>
    <product></product>
    <cart></cart>
    <info></info>
  </div>
</template>

<script>
  import product from './product'
  import cart from './cart'
  import info from './info'

    export default {
        name: "cartpage",
      components:{
          product,
          cart,
          info
      }
    }
</script>

<style scoped>

</style>
