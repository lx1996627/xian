<template>
  <div id="app">
    <day2></day2>
    <mynav></mynav>
    <img src="./assets/logo.png">
    <router-view/>

  </div>
</template>

<script>
  import day2 from './components/day2'
   import mynav from './nav/nav'

export default {
  name: 'App',
  components:{
    day2:day2,
    mynav:mynav
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
