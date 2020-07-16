<template>
  <div id="footer-main">
    <hr />
    <div class="foot-content">
      <div class="left-footer">
        <div class="left-icon">
          <div class="circular">
            <img src="../../assets/footerImg/wechat.png" alt />
          </div>
          <div class="circular">
            <img src="../../assets/footerImg/QQ.png" alt />
          </div>
          <div class="circular">
            <img src="../../assets/footerImg/tsina.png" alt />
          </div>
        </div>
        <div class="left-p">
          <p>Copyright © 2018 鲜家 All rights reserved.</p>
          <p>Powered by Bo Wen Technology Co., Ltd.</p>
          <p>工信部备：辽ICP备18014953号-2</p>
          <p>公安部备：21010202000602</p>
        </div>
      </div>
      <div class="vx-img">
        <img src="../../assets/footerImg/r_code.png" alt />
        <p>微信关注鲜家，立享优惠</p>
      </div>
      <div class="right-footer">
        <div class="right-a">
          <a href>售后服务</a> |
          <a href>同城鲜花</a> |
          <a href>关于我们</a>
        </div>
        <div class="right-tel">
          <div>
            全国订购热线:
            <b>400-888-1571</b>
          </div>
          <div>
            商务合作热线:
            <b>024-31128100</b>
          </div>
        </div>
        <div>
          <el-button id="kefu-btn">在线客服</el-button>
        </div>
      </div>
    </div>
    <!-- <FixedNav />
    <FixedService />-->
  </div>
</template>

<script>
// import FixedNav from "../components/FixedNav";
// import FixedService from "../components/FixedService";

export default {
  name: "footer-main",
  // components: {
  //   FixedService,
  //   FixedNav
  // },
  methods: {}
};
</script>

<style lang="less">
#footer-main {
  position: relative;
  background-color: white;
  z-index: 800;
  a:link,
  a:active,
  a:visited {
    text-decoration: none;
    color: black;
  }
  padding-top: 30px;
  text-align: center;
  #kefu-btn {
    color: black;
  }
  .foot-content {
    width: 1200px;
    margin: 20px auto;
    display: flex;
    justify-content: space-between;
  }
  .left-icon {
    width: 150px;
    margin: 20px 0;
    display: flex;
    justify-content: space-between;
    .circular {
      width: 30px;
      height: 30px;
      // border: 1px solid #777;
      border-radius: 15px;
      line-height: 30px;
      text-align: center;
    }
    .circular:hover {
      box-shadow: 0 0 15px #e5e5e5;
      transition: all 0.5s;
      transform: scale(1.05);
      cursor: pointer;
    }
  }
  .left-p {
    font-size: 13px;
    text-align: left;
    p {
      margin: 5px 0;
    }
  }
  .vx-img {
    img {
      box-shadow: 0 0 20px #e5e5e5;
      margin: 10px auto;
    }
    p {
      color: rgb(255, 0, 0);
    }
  }
  .right-footer {
    width: 300px;
    text-align: left;
    margin-top: 30px;
    .right-a {
      display: flex;
      justify-content: space-between;
    }
    a:hover {
      color: red;
    }
    .right-tel {
      margin: 20px 0;
      div {
        margin-bottom: 20px;
        b {
          margin-left: 20px;
        }
      }
    }
  }
  #kefu-btn:hover {
    transform: scale(1.1);
    color: red;
    background-color: white;
    transition: all 0.7s;
    box-shadow: 0 0 5px #e5e5e5;
    border: 1px solid #e5e5e5;
    cursor: pointer;
  }
}
</style>