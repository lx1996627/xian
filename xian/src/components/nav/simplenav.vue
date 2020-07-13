<template>
  <div>
    <div class="wrapper clearfix">
      <ul class="nav1 floatright">
        <li>
          <a href="#/home">首页</a>
        </li>
        <li>
          <a href>鲜花</a>
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
        <li>
          <a href>
            <span class="cart"></span>购物车
          </a>
        </li>
        <li>
          <a href>
            <span class="personal"></span>个人中心
          </a>
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
      msg: "Welcome to your vueName"
    };
  },
  methods: {},
  created() {}
};
</script>
 
<style lang = "less" scoped>
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
      background-image: url(../../assets/img/spirit2.png);
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