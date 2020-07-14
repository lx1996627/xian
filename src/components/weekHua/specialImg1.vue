<template>
  <div>
    <div class="h60"></div>
    <div class="specialBox">
      <img src="static/images/special2.jpg" alt="" class="specialB">
      <div>
        <img src="static/images/special-02.png" alt="" class="bgImg">
      </div>
      <specialText :special-msg="msg" :special-price="price" :special-tit="tit" class="floatLeft"></specialText>

    </div>
  </div>
</template>

<script>
  import specialText from "./specialText";
  export default {
    name: "specialImg1",
    data(){
      return {
        tit:'每周一花系列双拼版',
        msg:'不同花材的浪漫',
        price:238
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
    float: right;
    width: 390px;
    height: 590px;
    position: relative;
    z-index: 20;
  }
  .bgImg{
    height: 178px;
    bottom: 84px;
    width: 1200px;
    position: absolute;
    z-index: 19;
    left: 0;
  }
  .floatLeft{
    float: left;
  }

</style>
