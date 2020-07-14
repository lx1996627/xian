<template>
  <a href="" class="nearbyBox">
    <div class="hoverImg">
      <img :src="nearbySrc" alt="">
    </div>
    <div class="nearbyMsg">
      <div class="msg-tit">{{nearbyTit}}</div>
      <div class="msg-text">{{nearbyMsg}}</div>
      <div class="msg-price">¥ {{nearbyPrice}}.00</div>
    </div>
  </a>

</template>

<script>
    export default {
        name: "nearbyPro1",
      props:['nearbySrc','nearbyTit','nearbyMsg','nearbyPrice']
    }
</script>

<style scoped>
  .nearbyBox{
    display: inline-block;
    width: 386px;
    margin: 0 7px;
  }
  .nearbyMsg{
    display: inline-block;
    margin-top: 10px !important;
    text-align: left !important;
    width: 80%;
  }
  .msg-tit{
    color: #333;
    display: inline-block;
    width: 250px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  img{
    width: 386px;
  }
  .msg-text{
    display: block;
    margin-top: 12px;
    color: #777;
    text-align: left;
  }
  .msg-price{
    color: #f93d3d;
    font-size: 16px;
    font-weight: 700;
    margin: 0;
    margin-top: 12px;
    width: 154px;
    text-align: left;
    border-bottom: 0;
    display: block;
  }
  .hoverImg:hover{
    background-color: white;
    box-shadow: 2px 2px 5px #999999;
    transition: .5s;
  }



</style>
