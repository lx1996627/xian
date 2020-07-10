<template>
  <div>
    <input
      type="text"
      class="searchInpup bgGrey color000"
      placeholder="请输入关键词搜索"
      v-model="queryInfo"
    />
    <button class="searchBtn bgPink cursor colorF" @click="getSearchedInfo">
      <span>搜索</span>
    </button>
  </div>
</template>

<script>
export default {
  name: "search",
  data() {
    return {
      msg: "Welcome to search",
      //搜索的信息
      queryInfo: "",
      searchedResult: {},
    };
  },
  methods: {
    getSearchedInfo() {
      //需要告诉父组件我们接收到的数据，再由父组件发起$axios请求
      //父组件得到相应数据后，交给页面渲染组件进行渲染
      this.$emit("getQuery", this.queryInfo);
      //清空搜索框
      this.queryInfo = "";
    },
  },
  created() {},
};
</script>

<style lang="less" scoped>
// element-ui修改样式，要么不要写在scoped里面，要么前面加 /deep/
.searchInpup {
  height: 45px;
  width: 285px;
  padding-left: 20px;
  // color: #ffffff;
  border-radius: 23px 0 0 0 23px;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
}

.searchBtn {
  height: 45px;
  width: 85px;
  background-image: url(../assets/img/dl-xian-search.png);
  background-repeat: no-repeat;
  background-position: 15px center;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  span {
    // color: #ffffff;
    padding-left: 20px;
  }
}
</style>
