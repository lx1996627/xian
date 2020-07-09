<template>
  <div id="app">
    <header>
      <mynav></mynav>
    </header>
    <!--<transition enter-active-class="animated zoomInLeft" leave-active-class="animated zoomOutRight" mode="out-in">-->
    <keep-alive>
      <router-view></router-view>
    </keep-alive>

    <!--</transition>-->
    <!--transition的效果必须在  增加 删除 插入节点  条件渲染 条件展示 动态组件  组件根节点-->

  </div>
</template>

<script>

  import mynav from './components/nav/nav'


export default {
  name: 'App',
  components:{
    mynav:mynav
  }
}
</script>

<style>
  @import "assets/animate.css";
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
  a{
    color: #2190ff;
    text-decoration: none;
  }
  .active{
    font-weight: bold;
    background: #2190ff;
    color: white;
  }
</style>
