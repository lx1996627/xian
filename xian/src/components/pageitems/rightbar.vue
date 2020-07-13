<template>
  <div>
    <div class="wrapper">
      <a href>
        <div class="cart"></div>
      </a>
      <a href>
        <div class="favorit"></div>
      </a>
      <a href>
        <div class="scan"></div>
      </a>
      <a href>
        <div class="top"></div>
        <img src alt />
      </a>
    </div>
  </div>
</template>
 
<script>
export default {
  name: "vueName",
  data() {
    return {
      msg: "Welcome to your vueName"
    };
  },
  methods: {},
  created() {}
};
</script>
 
<style lang = "less" scoped>
.wrapper {
  width: 45px;
  height: 150px;
  border: solid 1px grey;
  border-radius: 3px;
  .cart,
  .favorit,
  .scan,
  .top {
    width: 25px;
    height: 25px;
    margin: 10px;
    background-image: url(../../assets/img/spirit4.png);
    background-repeat: no-repeat;
  }
  .cart {
    background-position: -245px 0;
  }
  .favorit {
    background-position: -245px -30px;
  }
  .scan {
    background-position: -245px -90px;
  }
  .top {
    background-position: -245px -120px;
  }
}
</style>