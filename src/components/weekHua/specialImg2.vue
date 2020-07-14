<template>
  <div>
    <div class="h60"></div>
    <div class="specialBox">
      <img src="static/images/special3.jpg" alt="" class="specialB">
      <div>
        <img src="static/images/special-03.png" alt="" class="bgImg">
      </div>
      <specialText :special-msg="msg" :special-price="price" :special-tit="tit"></specialText>
    </div>
  </div>
</template>

<script>
  import specialText from "./specialText";
  export default {
    name: "specialImg",
    data(){
      return {
        tit:'每周一花系列混搭版',
        msg:'多重混搭',
        price:198
      }
    },
    components:{
      specialText:specialText
    }
  }
</script>
<style scoped>
  .h60{
    height: 60px;
  }
  .specialBox{
    height: 590px;
    position: relative;
    z-index: 20;
  }
  .specialB{
    float: left;
    width: 390px;
    height: 590px;
    position: relative;
    z-index: 20;
  }
  .bgImg{
    height: 126px;
    width: 1200px;
    position: absolute;
    z-index: 19;
    left: 0;
    bottom: 0;
  }

</style>

