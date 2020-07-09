<template>
  <div>
    <h1>
      计数器：{{$store.state.count}}
    </h1>
    <button @click="increment(5)">+</button>
    <button @click="incrementAsync(10)">异步+</button>
  </div>

</template>

<script>
  import {mapActions} from 'vuex'

    export default {
        name: "vuex",
      data(){
          return {}
      },
      methods:{
        ...mapActions([
          'increment',
          'incrementAsync'
        ])
        // increment(){
        //   console.log(this.$store);
        //   this.$store.dispatch('addnum',10)
        // },
        // incrementAsync(n){
        //   this.$store.dispatch("incrementAsync",n)
        // }
      }
    }
</script>

<style scoped>

</style>
