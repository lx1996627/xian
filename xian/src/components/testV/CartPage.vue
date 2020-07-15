<template>
  <div>
    <product></product>
    <cartest></cartest>
    <!-- <info></info> -->
  </div>
</template>

<script>
import cartest from "./Cartest";
import product from "./product";
// import info from "./info";

export default {
  name: "cartpage",
  components: {
    cartest,
    product,
    // info
  }
};
</script>

<style>
</style>