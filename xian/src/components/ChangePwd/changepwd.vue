<template>
  <div class="changepwd">
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="会员">
        <el-input disabled></el-input>
      </el-form-item>
      <el-form-item label="旧密码" :required="true">
        <el-input></el-input>
      </el-form-item>
      <el-form-item label="新密码" :required="true">
        <el-input></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="success" round @click="onSubmit">提交</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "changepwd",
  data() {
    return {
      form: {
        name: ""
      }
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    }
  }
};
</script>

<style lang="less">
.changepwd {
  padding-top: 50px;
  border: 1px solid rgb(229, 229, 229);
  form {
    width: 500px;
    margin: 0 auto;
    button {
      background-color: rgb(99, 193, 112);
    }
  }
}
</style>