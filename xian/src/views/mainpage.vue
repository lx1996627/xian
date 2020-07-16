<template>
  <div>
    <heading></heading>
    <!-- 简单导航栏 -->
    <div class="wrapper clearfix">
      <ul class="nav1 floatright">
        <li>
          <a href="#/home">首页</a>
        </li>
        <li>
          <a href @mouseenter="freshhover" value="freshmenus">鲜花</a>
        </li>
        <li>
          <a href @mouseenter="dryhover" value="drymenus">永生花</a>
        </li>
        <li>
          <a href @mouseenter="gifthover" value="giftmenus">礼品</a>
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
        <li>
          <a href> <span class="cart"></span>购物车 </a>
        </li>
        <li>
          <a href="#/VipPerson"> <span class="personal"></span>个人中心 </a>
        </li>
      </ul>
    </div>
    <!-- 显示/隐藏菜单 -->
    <subnav
      v-if="show"
      :hoverIndex="this.hoverIndex"
      @mouseleave="leave"
    ></subnav>
    <div class="main">
      <!-- 路由占位符 -->
      <router-view></router-view>
    </div>
    <div class="foot">
      <foot></foot>
    </div>
  </div>
</template>

<script>
import heading from "../components/headers/heading";
import subnav from "../components/nav/subnav";
import foot from "../components/Footer/footer";
export default {
  name: "vueName",
  components: {
    heading,
    subnav,
    foot,
  },
  data() {
    return {
      msg: "Welcome to your vueName",
      show: false,
      //鼠标悬停时，把当前的index传递给子菜单，为方便，index直接命名为需要渲染的菜单名，默认是鲜花菜单
      hoverIndex: "freshmenus",
    };
  },
  methods: {
    freshhover() {
      this.show = true;
      this.hoverIndex = "freshmenus";
      console.log(this.hoverIndex);
    },
    leave() {
      this.show = false;
    },
    dryhover() {
      this.show = true;
      this.hoverIndex = "drymenus";
      console.log(this.hoverIndex);
    },

    gifthover() {
      this.show = true;
      this.hoverIndex = "giftmenus";
      console.log(this.hoverIndex);
    },
  },
  created() {},
};
</script>

<style lang="less" scoped>
.wrapper {
  width: 1200px;
  margin: 0 auto;
  border-bottom: 2px solid #ececec;
  /* position: relative; */
  .nav1 {
    display: inline-flex;
    li {
      padding: 0 26px;
      font-size: 14px;
      /* font-weight: 700; */
      line-height: 25px;
      /* position: absolute; */
    }
    li:hover {
      border-bottom: 2px solid #ececec;
    }
    span {
      display: inline-block;
      width: 20px;
      height: 20px;
      background-image: url(../assets/img/spirit2.png);
      background-repeat: no-repeat;
      padding-right: 5px;
    }
    .cart {
      background-position: -21px -20px;
    }
    .personal {
      background-position: -44px -20px;
    }
  }
}
</style>
