<template>
  <div>
    <weekbanner></weekbanner>
    <threeSlogan></threeSlogan>
    <flowerProduct1></flowerProduct1>
    <flowerProduct2></flowerProduct2>
    <specialAll></specialAll>
    <nearbyPro></nearbyPro>
    <finallyMsgAll></finallyMsgAll>
  </div>
</template>
<script>
  import weekbanner from "./weekbanner";
  import threeSlogan from "./threeSlogan";
  import flowerProduct1 from "./flowerProduct1";
  import flowerProduct2 from "./flowerProduct2";
  import specialAll from "./specialAll";
  import nearbyPro from "./nearbyPro";
  import finallyMsgAll from "./finallyMsgAll";
    export default {
        name: "weekHua",
      components:{
        threeSlogan:threeSlogan,
        flowerProduct1:flowerProduct1,
        flowerProduct2:flowerProduct2,
        specialAll:specialAll,
        nearbyPro:nearbyPro,
        finallyMsgAll:finallyMsgAll,
        weekbanner:weekbanner
      }
    }
</script>

<style scoped>

</style>
