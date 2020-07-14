<template>
  <el-pagination
  background="true"
  class="el-pagination1"
  page-count="pagecount"
  current-page="10"
  page-size="10"
  layout="prev, pager, next"
  :total="100">
</el-pagination>
</template>
<script src="https://unpkg.com/element-ui/lib/index.js"></script>
<script>

export default {
  name: "changepage",
  data() {
    return {
        pagecount:5,
        
    };
  },
  methods: {},
  created() {},
};
</script>

<style >
@import "../../assets/css/normalize.css";
：：deep.el-pagination1:hover{
    background: #77cb7f;
    font-size: 20px;
}


</style>