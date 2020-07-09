<template>
    <div id="app">
      <nav>
        <ul>



            <router-link to="/vuex" active-class="active"  tag="li">Vuex</router-link>

            <router-link to="/vuexcart" active-class="active"  tag="li">Vuex-Cart</router-link>


        </ul>
      </nav>
    </div>
</template>

<script>
    export default {
        name: "mynav"
    }
</script>

<style scoped>
  *{
    margin: 0;
    padding: 0;
  }
  ul{
    height: 45px;
  }
  ul li{
    list-style: none;
    float: left;
    width: 150px;
    height: 45px;
    text-align: center;
    line-height: 45px;
    border: 1px solid #2190ff;
    color: deepskyblue;
  }
</style>
