<template>
<div>
  <h1>info组件-汇总信息</h1>
  <div class="infoContainer">
    <div class="infoItem">总数：{{totalNum}}</div>
    <div class="infoItem">总价：{{totalPrice}}</div>
    <div class="infoItem">
      <button @click="clearAllCart">清空购物车</button>
    </div>
  </div>
</div>
</template>

<script>
    export default {
        name: "info",
      data(){
          return {
            totalNum:5,
            totalPrice:266
          }
      },
      methods:{
        clearAllCart(){

        }
      }
    }
</script>

<style scoped>
  .infoContainer{
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #5c5c5c;
    padding: 25px;
  }
  .infoItem{
    flex: 1;
    color: white;
  }
</style>
