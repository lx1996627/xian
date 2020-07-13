<template>
    <div class="flowerTitLe">
      <div class="flowerTitLe-t">
        <span class="ft-span">{{leftText}}</span>
        <img src="static/images/wf_con-titimg.png" alt="">
        <span class="ft-span1">{{rightText}}</span>
      </div>
      <div class="flowerTitLe-b">{{bottomText}}</div>
      <div class="h60"></div>
    </div>
</template>

<script>
    export default {
        name: "flowerTitle",
        props:['leftText','rightText','bottomText']
    }
</script>

<style scoped>
  .flowerTitLe{
    margin-top: 60px;
  }
  .flowerTitLe-t{
    text-align: center;
  }
  .ft-span{
    font-size: 24px;
    height: 65px;
    line-height: 65px;
    vertical-align: top;
    margin-right: -20px;
  }
  .ft-span1{
    font-size: 24px;
    height: 65px;
    line-height: 65px;
    vertical-align: top;
    margin-left: -32px;
  }
  .flowerTitLe-b{
    text-align: center;
    margin-top: 16px;
    font-size: 16px;
    color: #999;
  }
  .h60{
    height: 60px;
  }


</style>
