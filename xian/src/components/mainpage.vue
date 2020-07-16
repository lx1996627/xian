<template>
  <div>
    <heading></heading>
    <simplenav></simplenav>

    <div class="main">
      <!-- 路由占位符 -->
      <router-view></router-view>
    </div>
  </div>
</template>
 
<script>
import heading from "./headers/heading";
import simplenav from "./nav/simplenav";
export default {
  name: "vueName",
  components: {
    heading,
    simplenav
  },
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
</style>