<template>
  <div>
    <div class="bgGrey">
      <div class="wrapper">
        <div class="tel floatleft">
          <div>商务 024-31128100</div>
          <div>
            全国订购热线
            <span class="colorPink">400-888-1571</span>
          </div>
        </div>
        <div class="topright floatright">
          <div>
            <a href>联系客服</a>
          </div>
          <div>
            <a href>我的订单</a>
          </div>
          <div>
            <a href>登陆/注册</a>
          </div>
          <div>
            <a class="shopping" href>
              <span class="shoppingcart"></span>
              购物车
              <span class="colorPink">0</span>
            </a>
          </div>
        </div>
      </div>
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

<style lang="less" scoped>
.wrapper {
  height: 40px;
  width: 1200px;
  margin: 0 auto;
  font-size: 14px;
  line-height: 40px;
  .tel {
    display: flex;
    // width: 400px;
    div:nth-of-type(1) {
      width: 150px;
    }
    div:nth-of-type(2) {
      width: 200px;
      span {
        font-weight: 700;
      }
    }
  }
  .topright {
    display: flex;
    width: 400px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .shopping {
      position: relative;
      .shoppingcart {
        position: absolute;
        left: -25px;
        top: -6px;
        display: table-cell;
        width: 25px;
        height: 25px;
        background-image: url(../../assets/img/shoppingCart.png);
        background-repeat: no-repeat;
      }
    }
  }
}
</style>
