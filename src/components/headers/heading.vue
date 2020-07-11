<template>
  <div id="app">
    <!-- 头部区域 -->
    <div class="header-container">
      <div class="header-left floatleft">
        <div class="logo"></div>
      </div>

      <search class="search floatleft" @getQuery="getSearchedInfo"></search>

      <div class="header-right floatright">
        <div>全国1小时达</div>
        <div>低价折扣</div>
        <div>退赔服务</div>
      </div>
    </div>
  </div>
</template>

<script>
//引入组件
import Search from "./search";
export default {
  name: "heading",
  //注册组件 然后在实例中引用
  components: {
    Search
  },
  created() {},
  data() {
    return {
      //左侧边栏菜单
    };
  },

  methods: {
    //根据关键字提交$axios搜索请求
    async getSearchedInfo(queryInfo) {
      const { data: res } = await this.$axios.get("/search", {
        params: queryInfo
      });
      // console.log(res)
      // console.log(res.meta.status)
      if (res.meta.status !== 200) {
        return this.$message.error("获取搜索信息失败");
      }
      console.log(res.data);
      this.searchedResult = res.data;
    }
  }
};
</script>

<style lang="less" scoped>
// element-ui修改样式，要么不要写在scoped里面，要么前面加 /deep/
.header-container {
  width: 1200px;
  height: 110px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 20px;

  .logo {
    width: 200px;
    height: 100px;
    background: url(../../assets/img/logo2.png) no-repeat center;
  }
  .header-right {
    width: 400px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    div {
      padding-left: 40px;
      // padding-right: 30px;
      height: 30px;

      font-size: 14px;
      line-height: 30px;
    }

    :nth-child(1) {
      background-image: url(../../assets/img/spirit5.png);
      background-repeat: no-repeat;
      background-position: 0 0;
    }
    :nth-child(2) {
      background-image: url(../../assets/img/spirit5.png);
      background-repeat: no-repeat;
      background-position: 0 -32px;
    }
    :nth-child(3) {
      background-image: url(../../assets/img/spirit5.png);
      background-repeat: no-repeat;
      background-position: 0 -65px;
    }
  }
  .search {
    margin-left: 100px;
  }
}
</style>
