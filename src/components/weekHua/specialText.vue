<template>
  <div class="info">
    <div class="info1">{{specialTit}}</div>
    <div class="info2">{{specialMsg}}</div>
    <div class="info3">¥ {{specialPrice}}.00</div>
    <a href="#">订阅惊喜</a>
  </div>
</template>

<script>
    export default {
        name: "specialText",
      data(){
          return {

          }
      },
      props:['specialTit','specialMsg','specialPrice']

    }
</script>

<style scoped>
  .info{
    float: right;
    width: 380px;
    position: relative;
    z-index: 20;
  }
  .info1{
    font-size: 26px;
    margin-top: 170px;
  }
  .info2{
    color: #777;
    margin-top: 22px;
  }

  .info3{
    font-size: 18px;
    color: #f93d3d;
    margin-top: 40px;
  }
  .info a{
    font-size: 16px;
    border: 1px solid #333;
    width: 156px;
    height: 42px;
    line-height: 42px;
    text-align: center;
    margin-top: 60px;
    cursor: pointer;
    display: block;
    color: #333;
  }
  .info a:hover{
    color: red;
    border: 1px solid red;

  }


</style>
