<template>
  <div id="app">
    <el-container>
      <!-- 头部区域 -->
      <el-header>
        <div class="header-left">
          <div class="logo"></div>
          <span>Heilay Stiker 后台管理系统</span>
        </div>
        <div>
          <el-button type="info" @click="logout">退出</el-button>
        </div>
      </el-header>
      <!-- 页面主体区域 -->
      <el-container>
        <!-- 左侧边栏 -->
        <el-aside :width="isCollapsed ? '64px' : '200px'">
          <!-- 菜单的折叠和展开按钮 -->
          <div class="toggle-button" @click="toggleCollapse">
            |||
          </div>
          <!-- 侧边栏菜单区 unique-opened属性是每次只能展开唯一的-->
          <!-- router 给菜单开启vue-router模式 以index作为path进行跳转 -->
          <el-menu
            active-text-color="#fff"
            :unique-opened="true"
            :collapse="isCollapsed"
            :collapse-transition="false"
            :router="true"
            default-active="/users"
          >
            <!-- 一级菜单 -->
            <!-- 两层菜单，用两层for循环  -->
            <!-- 靠index区分，所以每个一级菜单的index是唯一的 index只接收字符串，不接受数值 -->
            <el-submenu
              :index="item.path"
              v-for="item in menuList"
              :key="item.id"
            >
              <template slot="title">
                <!-- 根据id设计iconObj数据，存放字体图标的类名 -->
                <i :class="iconObj[item.id]"></i>
                <span>{{ item.authName }}</span>
              </template>
              <!-- 二级菜单 -->
              <el-menu-item
                :index="subItem.path"
                v-for="subItem in item.children"
                :key="subItem.id"
              >
                <template slot="title">
                  <i class="el-icon-menu"></i>
                  <span>{{ subItem.authName }}</span>
                </template></el-menu-item
              >
            </el-submenu>
          </el-menu>
        </el-aside>
        <!-- 右侧主体 -->
        <el-main>
          <!-- 路由占位符 -->
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  created() {
    this.getSidebarMenu();
  },
  data() {
    return {
      //左侧边栏菜单
      menuList: [],
      iconObj: {
        "101": "iconfont icon-users",
        "102": "iconfont icon-tubiaozhizuomobanyihuifu-",
        "103": "iconfont icon-shangpin",
        "104": "iconfont icon-dingdan",
        "105": "iconfont icon-shuju",
      },
      //是否折叠 false是不折叠
      isCollapsed: false,
    };
  },
  methods: {
    //退出功能
    logout() {
      //退出就是清空token 后继不带token就无法访问了
      sessionStorage.clear();
      //重定向
      this.$router.push("/login");
    },
    //获取左侧边栏的所有菜单
    // async await 是为了获取promise对象的值
    //async使得getSidebarMenu()函数里面会return一个promise对象
    //await是等待getSidebarMenu()函数执行完毕后再将promise对象里面的值赋值给result
    //用ES6的解构赋值直接提取了result对象的data
    async getSidebarMenu() {
      // console.log('获取左侧边栏')
      let { data } = await this.$axios.get("/menus");
      console.log(data.data);
      console.log(data.meta);
      if (data.meta.status !== 200)
        return this.$message.error("获取菜单列表失败");
      this.menuList = data.data;
    },
    //菜单的折叠与展开
    toggleCollapse() {
      this.isCollapsed = !this.isCollapsed;
    },
  },
};
</script>

<style lang="less" scoped>
@maincolor: #419cb9;
@fontcolor: #ffffff;
.home-container {
  height: 100vh;
}
.el-header {
  background-color: @maincolor;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 10px;
  color: @fontcolor;
  font-size: 20px;
  > div {
    display: flex;
    align-items: center;
    span {
      margin-left: 15px;
    }
  }
  .logo {
    display: inline-block;
    height: 50px;
    width: 50px;
    border-radius: 50%;
    background: url(../assets/img/OIP.jpeg) no-repeat center;
  }
}
.el-aside {
  background-color: @maincolor;
  .toggle-button {
    background-color: @maincolor;
    height: 24px;
    font-size: 16px;
    font-weight: 900;
    line-height: 24px;
    text-align: center;
    letter-spacing: 3px;
    cursor: pointer;
  }
  .el-menu {
    //优化菜单边框线，使菜单对齐
    border-right: none;
  }
  .el-menu-item {
    background-color: @maincolor;
  }
}
.el-main {
  background-color: #f6fff5;
}

.el-menu {
  background-color: @maincolor;
  color: #ccc;
}
.iconfont {
  margin-right: 10px;
}
</style>
