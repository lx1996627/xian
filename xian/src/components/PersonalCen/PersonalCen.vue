<template>
  <div class="personC">
    <el-form ref="form" :model="sizeForm" label-width="100px">
      <el-form-item label="登录名：">
        <el-input disabled></el-input>
        <div class="change">更换</div>
      </el-form-item>
      <el-form-item label="昵称：" :required="true">
        <el-input></el-input>
      </el-form-item>
      <el-form-item label="真实姓名：" :required="true">
        <el-input></el-input>
      </el-form-item>
      <el-form-item label="性别：" :required="true">
        <el-radio-group v-model="radio2" class="right">
          <el-radio :label="3">男</el-radio>
          <el-radio :label="6">女</el-radio>
          <el-radio :label="9">保密</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="生日：">
        <el-date-picker type="date" placeholder="选择日期" v-model="sizeForm.date1"></el-date-picker>
      </el-form-item>
      <el-form-item label="邮箱：">
        <el-input disabled></el-input>
        <div class="change">立即验证</div>
      </el-form-item>
      <el-form-item label="手机：">
        <el-input disabled></el-input>
        <div class="change">立即验证</div>
      </el-form-item>
      <el-form-item>
        <el-button type="success" @click="onSubmit" round>提交</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
 
<script>
export default {
  name: "personC",
  data() {
    return {
      msg: "",
      radio2: 3,
      sizeForm: {
        date1: ""
      }
    };
  },
  methods: {
    onSubmit() {
      console.log("点击提交了");
    }
  }
};
</script>
 
<style scoped lang="less">
.personC {
  padding-top: 50px;
  border: 1px solid rgb(229, 229, 229);
  form {
    width: 500px;
    margin: 0 auto;
    button {
      background-color: rgb(99, 193, 112);
    }
    .el-radio__input.is-checked + .el-radio__label {
      color: #fd7624 !important;
    }
    .el-radio__input.is-checked .el-radio__inner {
      background: #fd7624 !important;
      border-color: #fd7624 !important;
    }
    .change {
      color: #1630d3;
      float: right;
    }
    .change:hover {
      cursor: pointer;
      color: red;
    }
  }
}
</style>