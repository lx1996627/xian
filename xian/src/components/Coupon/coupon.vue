<template>
  <div class="coupon">
    <div class="topTitle">
      <h1>我的优惠券</h1>
      <p>MY VOUCHER</p>
    </div>
    <div class="lineDiv"></div>
    <div class="foot">
      <h3>激活代金券</h3>
      <el-form ref="form" :model="form" label-width="180px">
        <el-form-item label="请输入代金券编号">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="请输入激活密码">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="success" round @click="onSubmit">确定</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>



<script>
export default {
  name: "coupon",
  data() {
    return {
      form: {
        name: ""
      }
    };
  },
  methods: {
    onSubmit() {}
  }
};
</script><style lang="less">
.coupon {
  padding-top: 50px;
  border: 1px solid rgb(229, 229, 229);
  h1 {
    font-size: 24px;
  }
  .topTitle {
    margin: 0 auto;
    height: 80px;
    text-align: center;
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
      width: 500px;
      margin: 30px;
    }
  }
}
</style>