<template>
  <div>
    <div class="h60"></div>
    <div class="specialBox">
      <img src="static/images/special1.jpg" alt="" class="specialB">
      <div>
        <img src="static/images/special-01.png" alt="" class="bgImg">
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
            tit:'每周一花系列轻奢版',
            msg:'享受极致奢华',
            price:298
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
  height: 222px;
  bottom: -90px;
  width: 1200px;
  position: absolute;
  z-index: 19;
  left: 0;
}

</style>
