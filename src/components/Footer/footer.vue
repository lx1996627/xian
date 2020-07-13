<template>
  <div id="app">
    <div class="footer">
      <hr class="hrFooter" />

      <div class="footerLeft">
        <div class="footerConnect">
          <img src="../../assets/footerImg/wechat.png" alt />
          <img src="../../assets/footerImg/QQ.png" alt />
          <img src="../../assets/footerImg/tsina.png" alt />
        </div>
        <p class="footerCopy">
          Copyright 2018 鲜家 All rights reserved.
          <br />Powered by Bo Wen Technology Co., Ltd.
          <br />工信部备：辽ICP备18014953号-2
          <br />公安部备：21010202000602
        </p>
      </div>

      <div class="footerMid">
        <img src="../../assets/footerImg/r_code.png" alt />
        <p>微信关注鲜家，立享优惠</p>
      </div>

      <div class="footerRight">
        <div class="footerRight-link">
          <span>
            <a class="footerRightA" href="javascript:;">售后服务</a>
          </span>
          <span>
            <a class="footerRightA" href="javascript:;">同城鲜花</a>
          </span>
          <span>
            <a class="footerRightA" href="javascript:;">关于我们</a>
          </span>
        </div>
        <div class="footerRight-tel">
          全国订购热线:
          <span>400-888-1571</span>
        </div>
        <div class="footerRight-tel">
          商务合作热线:
          <span>024-31128100</span>
        </div>
        <div class="footerRight-b">
          <el-button>在线客服</el-button>
        </div>
      </div>
    </div>
  </div>
</template>
 
<script>
export default {
  name: "footer-main",
  data() {
    return {
      msg: ""
    };
  }
};
</script>
 
<style scoped>
.footer {
  height: 350px;
  margin-top: 100px;
  width: 100%;
  position: relative;
  bottom: 0;
  left: 0;
}
.hrFooter {
  width: 100%;
  background-color: lightgray;
  height: 1px;
  border: none;
}

/* 左边 */
.footerLeft {
  float: left;
  width: 400px;
  height: 180px;
  margin-left: 285px;
  margin-top: 150px;
}
.footerConnect {
  display: inline-block;
  float: none;
  cursor: pointer;
  margin-right: 295px;
}
.footerCopy {
  font-size: 12px;
  color: #333;
  line-height: 2;
  margin-top: 15px;
  text-align: left;
}

/* 中间 */
.footerMid {
  margin-top: 150px;
  margin-left: 195px;
  float: left;
  width: 132px;
  height: 132px;
  box-shadow: 0 0 20px #ccc;
}
.footerMid > p {
  font-size: 12px;
}

/* 右边 */
.footerRight {
  float: right;
  width: 400px;
  height: 180px;
  margin-right: 198px;
  margin-top: 150px;
  font-size: 12px;
}
.footerRight-tel > span {
  font-weight: bolder;
}
.footerRight-link {
  margin-bottom: 20px;
}
.footerRight-link > span:nth-child(1) {
  width: 50px;
  height: 20px;
  display: inline-block;
  border-right: 1px solid black;
  padding-right: 5px;
  padding-left: 5px;
}
.footerRight-link > span:nth-child(2) {
  width: 50px;
  height: 20px;
  display: inline-block;
  border-right: 1px solid black;
  padding-right: 5px;
  padding-left: 5px;
}
.footerRight-link > span:nth-child(3) {
  width: 50px;
  height: 20px;
  display: inline-block;
  /* border-right: 1px solid black; */
  padding-right: 5px;
  padding-left: 5px;
}
.footerRightA {
  text-decoration: none;
  color: black;
  line-height: 20px;
}
.footerRightA:hover {
  color: red;
}
.footerRight-tel {
  margin-bottom: 20px;
  margin-right: 16px;
}
.footerRight-b {
  margin-right: 83px;
}
</style>