<template>
  <div>
    <home></home>
    <product></product>
    <cartest></cartest>
    <!-- <info></info> -->
  </div>
</template>

<script>
import cartest from "./Cartest";
import home from "../../views/vipheader";
import product from "./product";
// import info from "./info";

export default {
  name: "cartpage",
  components: {
    cartest,
    product,
    home
    // info
  }
};
</script>

<style>
</style>