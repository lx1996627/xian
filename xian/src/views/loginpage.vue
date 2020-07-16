<template>
  <div>
    <div class="wrapper">
      <div class="bg"></div>
      <loginregist class="log"></loginregist>
    </div>
  </div>
</template>
 
<script>
import loginregist from "../components/loginregist/login";
export default {
  name: "loginpage",
  data() {
    return {
      msg: "Welcome to loginPage"
    };
  },
  components: {
    loginregist
  },
  methods: {},
  created() {}
};
</script>
 
<style lang = "less" scoped>
.wrapper {
  position: relative;
}
.bg {
  background-image: url(../assets/img/loginBg.png);
  background-repeat: no-repeat;
  /* background-position: center; */
  height: 800px;
  width: 100%;
  /* position: relative; */
}
.logReg {
  height: 600px;
}
.log {
  /* position: absolute; */
  z-index: 1;
  /* margin-top: -100px; */
}
</style>