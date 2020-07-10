<template>
  <figure class="imgHot">
    <a href="#">
        <img :src="imgSrc" alt="">
    </a>
    <div>{{flowerTitle}}</div>
  </figure>
</template>
<script>
    export default {
        name: "showHotFlower",
      data(){
          return {
          }
      },
      props:['imgSrc','flowerTitle']
    }
</script>

<style scoped>
  .imgHot{
    margin: 0 56px 0 0 ;
    width: 153px;
    height: 180px;
  }
  .imgHot div{
    text-align: center;
    font-family: 'Microsoft YaHei', Helvetica, sans-serif ;
    font-size: 14px;
    margin-top: 10px;
    margin-bottom: 6px;
  }
</style>
