<template>
  <div>
    <div class="wrapper">
      <div class="bg"></div>
      <loginr></loginr>
    </div>
  </div>
</template>
 
<script>
import loginr from "../loginregist/login";
export default {
  name: "loginpage",
  data() {
    return {
      msg: "Welcome to loginPage",
      components: {
        loginr
      }
    };
  },
  methods: {},
  created() {}
};
</script>
 
<style lang = "less" scoped>
.bg {
  background-image: url(../../assets/img/loginBg.png);
  background-repeat: no-repeat;
  /* background-position: center; */
  height: 700px;
  width: 100%;
}
.logReg {
  height: 600px;
}
</style>