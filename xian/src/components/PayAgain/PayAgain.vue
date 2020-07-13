<template>
  <div class="PayAgain">
    <div class="topTitle">
      <h3>在线补款</h3>
      <p>ONLINE SUPPLEMENT</p>
    </div>
    <div class="lineDiv"></div>
    <div class="foot">
      <h3>激活代金券</h3>
      <el-form ref="form" :model="form" label-width="180px">
        <el-form-item label="请输入订单号">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="补款金额">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="选择支付方式">
          <el-radio-group v-model="form.resource" size="medium">
            <el-radio border label="支付宝" id="zfb"></el-radio>
            <el-radio border label="微信" id="wx"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item>
          <el-button type="success" round @click="onSubmit">确定</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<style lang="less">
.PayAgain {
  padding-top: 50px;
  border: 1px solid rgb(229, 229, 229);
  .topTitle {
    margin: 0 auto;
    height: 80px;
    text-align: center;
    h3 {
      font-size: 24px;
      font-weight: 700;
      color: #333;
    }
  }
  .lineDiv {
    height: 1px;
    border-bottom: 5px solid rgb(229, 229, 229);
    width: 90%;
    margin: 0 auto;
  }
  .foot {
    width: 90%;
    padding: 50px;
    form {
      width: 550px;
      margin: 30px;
      .el-radio__input {
        display: none;
      }
      .el-radio__label {
        display: none;
      }
      #zfb {
        width: 160px;
        height: 68px;
        display: inline-block;
        background-image: url("../../assets/img/pay_alipay.gif");
        background-repeat: no-repeat;
        background-position: 0 0;
      }
      #wx {
        width: 160px;
        height: 68px;
        display: inline-block;
        background-image: url("../../assets/img/pay_wechat.gif");
      }
    }
  }
}
</style>

<script>
export default {
  name: "PayAgain",
  data() {
    return {
      form: {
        name: "",
        resource: ""
      }
    };
  },
  methods: {
    onSubmit() {}
  }
};
</script>