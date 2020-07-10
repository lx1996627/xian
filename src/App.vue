<template>
  <div id="app">
    <hotFlower></hotFlower>
  </div>
</template>

<script>
  import hotFlower from "./components/huayu/hotFlower";
export default {
  name: 'App',
  components:{
    hotFlower:hotFlower
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
