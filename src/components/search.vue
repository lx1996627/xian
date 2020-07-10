<template>
  <div>
    <input
      type="text"
      class="searchInpup"
      placeholder="请输入关键词搜索"
      v-model="queryInfo"
    />
    <button class="searchBtn" @click="getSearchedInfo">
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
    async getSearchedInfo() {
      const { data: res } = await this.$axios.get("/users", {
        params: this.queryInfo,
      });
      // console.log(res)
      // console.log(res.meta.status)
      if (res.meta.status !== 200) {
        return this.$message.error("获取用户列表失败");
      }
      console.log(res.data);
      this.searchedResult = res.data;
    },
  },
  created() {},
};
</script>

<style lang="less" scoped>
// element-ui修改样式，要么不要写在scoped里面，要么前面加 /deep/
.searchInpup {
  background-color: yellow !important;
  color: #ffffff;
  border-radius: 0;
}

.searchBtn {
  background-color: pink !important;
  span {
    color: #ffffff;
  }
}
</style>
