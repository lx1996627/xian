<template>
  <div>
    <topinfo></topinfo>
    <heading></heading>
    <topnav></topnav>
  </div>
</template>

<script>
import topinfo from "../components/headers/topinfo";
import heading from "../components/headers/heading";
import topnav from "../components/nav/topnav";
export default {
  name: "vueName",
  components: {
    heading,
    topnav,
    topinfo
  },
  data() {
    return {
      msg: "Welcome to Home"
    };
  },
  methods: {},
  created() {}
};
</script>

<style lang="less" scoped></style>
