<template>
  <div id="app">
    <el-container>
      <!-- 头部区域 -->
      <el-header class="header-container">
        <div class="header-left floatleft">
          <div class="logo"></div>
        </div>

        <search class="floatleft" @getQuery="getSearchedInfo"></search>

        <div class="header-right floatright">
          <div>全国1小时达</div>
          <div>低价折扣</div>
          <div>退赔服务</div>
        </div>
      </el-header>
    </el-container>
  </div>
</template>

<script>
//引入组件
import Search from "./search";
export default {
  name: "header",
  //注册组件 然后在实例中引用
  components: {
    Search,
  },
  created() {},
  data() {
    return {
      //左侧边栏菜单
    };
  },

  methods: {
    //根据关键字提交$axios搜索请求
    //   async getSearchedInfo() {
    //     const { data: res } = await this.$axios.get("/search", {
    //       params: this.queryInfo,
    //     });
    //     // console.log(res)
    //     // console.log(res.meta.status)
    //     if (res.meta.status !== 200) {
    //       return this.$message.error("获取搜索信息失败");
    //     }
    //     console.log(res.data);
    //     this.searchedResult = res.data;
    //   },
  },
};
</script>
<style>
/* .el-header {
  margin-bottom: 30px ;
  padding-top: 30px;
} */
</style>

<style lang="less" scoped>
// element-ui修改样式，要么不要写在scoped里面，要么前面加 /deep/

.header-container {
  width: 1200px;
  height: 110px;
  margin: 20px auto;

  display: flex;
  justify-content: space-between;
  align-items: center;
  // padding-left: 10px;
  font-size: 20px;

  .logo {
    // display: inline-block;
    width: 200px;
    height: 100px;
    background: url(../assets/img/logo2.png) no-repeat center;
  }
  .header-right {
    display: flex;
    align-items: center;

    div {
      padding-left: 40px;
      padding-right: 30px;
      height: 30px;
      font-size: 14px;
      line-height: 30px;
    }

    :nth-child(1) {
      background-image: url(../assets/img/spirit5.png);
      background-repeat: no-repeat;
      background-position: 0 0;
    }
    :nth-child(2) {
      background-image: url(../assets/img/spirit5.png);
      background-repeat: no-repeat;
      background-position: 0 -32px;
    }
    :nth-child(3) {
      background-image: url(../assets/img/spirit5.png);
      background-repeat: no-repeat;
      background-position: 0 -65px;
    }
  }
}
</style>
