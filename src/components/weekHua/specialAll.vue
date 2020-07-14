<template>
  <div>
    <specialImg></specialImg>
    <specialImg1></specialImg1>
    <specialImg2></specialImg2>
    <specialImg3></specialImg3>
  </div>

</template>

<script>
  import specialImg from "./specialImg";
  import specialImg1 from "./specialImg1";
  import specialImg2 from "./specialImg2";
  import specialImg3 from "./specialImg3";
    export default {
        name: "specialAll",
      components:{
        specialImg:specialImg,
        specialImg1:specialImg1,
        specialImg2:specialImg2,
        specialImg3:specialImg3
      }
    }
</script>

<style scoped>

</style>
