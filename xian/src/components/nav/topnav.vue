<template>
  <div>
    <div class="headnav">
      <el-collapse v-model="activeNames" class="sidedropdown">
        <!-- <div class="toggle-button bgPink colorF cursor" @click="toggleCollapse">
          <span></span> 鲜花导购
        </div>-->

        <el-collapse-item class="menu" @click="toggleCollapse" name="collapse">
          <span
            class="collapse-title toggle-button bgPink colorF cursor"
            slot="title"
            >鲜花导购</span
          >
          <!-- 两层菜单，用两层for循环  -->
          <!-- 一级菜单 -->
          <div class="submenu" v-for="item in menuList" :key="item.id">
            <div>{{ item.authName }}</div>
            <!-- 二级菜单 给菜单开启vue-router模式 以index作为path进行跳转-->
            <div class="subitemwrap">
              <div
                class="subitem"
                v-for="subItem in item.children"
                :key="subItem.id"
              >
                <a
                  class="subtitle"
                  :href="subItem.path"
                  @click.prevent.self="getNavInfo(subItem.authName)"
                  >{{ subItem.authName }}</a
                >
              </div>
            </div>
          </div>
        </el-collapse-item>
      </el-collapse>
      <ul class="colorGrey">
        <li>
          <a href>首页</a>
        </li>
        <li>
          <a href="#/mainpage">鲜花</a>
        </li>
        <li>
          <a href>永生花</a>
        </li>
        <li>
          <a href>礼品</a>
        </li>
        <li>
          <a href>每周一花</a>
        </li>
        <li>
          <a href>花语</a>
        </li>
        <li>
          <a href>企业团购</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "vueName",

  data() {
    return {
      msg: "Welcome to topnav",

      activeNames: "collapse",
      //左侧边栏菜单
      menuList: [
        {
          id: 101,
          authName: "鲜花用途",
          path: "",
          children: [
            {
              id: 111,
              authName: "爱情鲜花",
              path: "/sidebar",
              children: [],
            },
            {
              id: 112,
              authName: "生日鲜花",
              path: "/sidebar",
              children: [],
            },
            {
              id: 113,
              authName: "友情鲜花",
              path: "/sidebar",
              children: [],
            },
            {
              id: 114,
              authName: "周年纪念",
              path: "/sidebar",
              children: [],
            },
          ],
        },
        {
          id: 102,
          authName: "鲜花花材",
          path: "",
          children: [
            {
              id: 121,
              authName: "玫瑰花",
              path: "/flowermaterial",
              children: [],
            },
            {
              id: 122,
              authName: "康乃馨",
              path: "/flowermaterial",
              children: [],
            },
            {
              id: 123,
              authName: "百合花",
              path: "/flowermaterial",
              children: [],
            },
            {
              id: 124,
              authName: "向日葵",
              path: "/flowermaterial",
              children: [],
            },
          ],
        },
        {
          id: 103,
          authName: "鲜花类别",
          path: "",
          children: [
            {
              id: 131,
              authName: "日常花束",
              path: "/flowertype",
              children: [],
            },
            {
              id: 132,
              authName: "创意花盒",
              path: "/flowertype",
              children: [],
            },
            {
              id: 133,
              authName: "韩式花束",
              path: "/flowertype",
              children: [],
            },
            {
              id: 134,
              authName: "手提花篮",
              path: "/flowertype",
              children: [],
            },
          ],
        },
        {
          id: 104,
          authName: "价格筛选",
          path: "",
          children: [
            {
              id: 141,
              authName: "150元以内",
              path: "/flowerprice",
              children: [],
            },
            {
              id: 142,
              authName: "150-199元",
              path: "/flowerprice",
              children: [],
            },
            {
              id: 143,
              authName: "200-249元",
              path: "/flowerprice",
              children: [],
            },
            {
              id: 144,
              authName: "250-399元",
              path: "/flowerprice",
              children: [],
            },
          ],
        },
      ],
      //是否折叠 false是不折叠
      isCollapsed: false,
    };
  },
  methods: {
    //获取左侧边栏的所有菜单
    // async await 是为了获取promise对象的值
    //async使得getSidebarMenu()函数里面会return一个promise对象
    //await是等待getSidebarMenu()函数执行完毕后再将promise对象里面的值赋值给result
    //用ES6的解构赋值直接提取了result对象的data

    //  async getSidebarMenu() {
    //     // console.log('获取左侧边栏')
    //     let { data } = await this.$axios.get("/freshmenus");
    //     console.log(data.data);
    //     console.log(data.meta);
    //     if (data.meta.status !== 200)
    //       return this.$message.error("获取菜单列表失败");
    //     this.menuList = data.data;
    //   },

    //点击二级菜单，发起请求
    async getNavInfo(authName) {
      let { data: res } = await this.$axios.get("/sidebar?que= " + authName);

      console.log(res);
    },

    //菜单的折叠与展开
    toggleCollapse() {
      this.isCollapsed = !this.isCollapsed;
    },
  },
  created() {
    // this.getSidebarMenu();
  },
};
</script>

<style lang="less" scoped>
.headnav {
  width: 1200px;
  height: 40px;
  position: relative;
  left: 50%;
  transform: translateX(-50%);

  ul {
    display: flex;
    padding-left: 300px;
    font-size: 16px;
    line-height: 40px;
    align-items: start;
    li {
      padding-left: 55px;
    }
  }
}
/deep/ .el-icon-arrow-right:before {
  content: "";
}

/deep/ .el-collapse {
  border: none;
}
/deep/ .el-collapse-item__header {
  border: none;
}
.sidedropdown {
  height: 40px;
  width: 260px;
  position: absolute;

  .toggle-button {
    height: 40px;
    width: 100%;
    font-size: 20px;
    line-height: 40px;
    text-align: center;
    background-image: url(../../assets/img/dl-xian-nav.png);
    background-repeat: no-repeat;
    background-position: 50px center;
  }
  .subtitle {
    font-size: 14px;
  }
  .submenu {
    height: 100px;
    font-weight: 700;
    color: #333333;
    padding: 20px;
    border-bottom: 2px solid #f0eeee;
    .subitemwrap {
      padding-top: 15px;
      display: flex;
      flex-wrap: wrap;
      .subitem {
        padding-right: 15px;
        font-size: 12px;
        line-height: 20px;
        font-weight: 400;
      }
    }
  }
}
</style>
