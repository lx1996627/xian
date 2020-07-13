<template>
  <div class="showBox-F">
    <a href="">
      <div class="proShow">
        <img :src="productImg" alt="">
      </div>
      <div class="priceShow">
        <div class="showT">{{productMsg}}</div>
        <div class="showP">¥{{priceNow}}.00<span>原价 ¥{{pricePre}}.00</span></div>
        <div class="bought"><span>已售 {{outShop}}</span></div>
      </div>
    </a>

  </div>

</template>

<script>
    export default {
        name: "FlowerShowBox",
        props:['productImg','productMsg','priceNow','pricePre','outShop']
    }
</script>

<style scoped>
  .showBox-F{
    width: 279px;
    height: 480px;
    display: inline-block;
    float: left;
    position: relative;
  }
  .proShow img{
    max-width: 279px;
    max-height: 279px;
  }
 .priceShow{
    text-align: center;
    margin: 40px 0 58px 0;
    display: inline-block;
  }
  .showT{
    font-size: 14px;
    color: #333;
    display: inline-block;
    width: 250px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .showP{
    font-size: 18px;
    margin: 16px 20px 0 20px;
    width: auto;
    color: #ff2c2c;
    font-weight: 700;
    text-align: center;
    border-bottom: 1px solid #eaeaea;
    display: inline-block;
    padding-bottom: 12px;
  }
  .showP span{
    font-size: 14px;
    color: #999;
    text-decoration: line-through;
    font-weight: normal;
    padding: 2px 10px;
    margin-left: 10px;
    border-radius: 10px;
  }
  .bought{
    margin-top: 20px;
    text-align: center;
    color: #888;
    display: inline-block;
  }
  .bought span{
    color: #a17536;
    margin-right: 0;
  }
  .proShow:hover{
    background-color: white;
    box-shadow: 2px 2px 5px #999999;
    transition: .5s;
  }



</style>
