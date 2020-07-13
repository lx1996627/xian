<template>
  <div id="app">
<!--    <huaYu></huaYu>-->
    <weekHua></weekHua>
  </div>
</template>

<script>
  // import huaYu from "./components/huayu/huaYu";
  import weekHua from "./components/weekHua/weekHua";

export default {
  name: 'App',
  data(){
    return {}
  },
  components:{
  //   huaYu:huaYu,
    weekHua:weekHua
  }
}
</script>

<style>
a{
  text-decoration: none;
}
#app {
  width: 1200px;
  margin: 0 auto;
  color: #333;
}
</style>
