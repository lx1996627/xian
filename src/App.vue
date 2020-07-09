<template>
  <div id="app">
<<<<<<< HEAD
    <header>
      <mynav></mynav>
    </header>
    <!--<transition enter-active-class="animated zoomInLeft" leave-active-class="animated zoomOutRight" mode="out-in">-->
    <keep-alive>
      <router-view></router-view>
    </keep-alive>

    <!--</transition>-->
    <!--transition的效果必须在  增加 删除 插入节点  条件渲染 条件展示 动态组件  组件根节点-->

=======
    <img src="./assets/logo.png">
    <router-view/>
>>>>>>> e0c7fc10e34252d6240c562cb9b8b93da6c685cf
  </div>
</template>

<script>
<<<<<<< HEAD

  import mynav from './components/nav/nav'


export default {
  name: 'App',
  components:{
    mynav:mynav
  }
=======
export default {
  name: 'App'
>>>>>>> e0c7fc10e34252d6240c562cb9b8b93da6c685cf
}
</script>

<style>
<<<<<<< HEAD
  @import "assets/animate.css";
=======
>>>>>>> e0c7fc10e34252d6240c562cb9b8b93da6c685cf
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
<<<<<<< HEAD
  a{
    color: #2190ff;
    text-decoration: none;
  }
  .active{
    font-weight: bold;
    background: #2190ff;
    color: white;
  }
=======
>>>>>>> e0c7fc10e34252d6240c562cb9b8b93da6c685cf
</style>
