<template>
  <div>
    <div class="wrapper">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="登陆" name="login">
          <!--:model绑定数据  :rules绑定表单验证规则,与prop属性合并使用 -->
          <!-- ref给这个表单实例对象的引用起名 就指向这个实例对象 -->
          <el-form ref="loginFormRef" :model="loginForm" :rules="loginRules" class="login_form">
            <!-- 用户名 -->
            <el-form-item prop="username">
              <el-input
                type="text"
                placeholder="请使用手机号登陆"
                name="username"
                v-model="loginForm.username"
              ></el-input>
            </el-form-item>
            <!-- 密码  注意：验证项要加给form-item，而不是文本框-->
            <el-form-item prop="password">
              <el-input
                type="password"
                placeholder="请输入登陆密码"
                name="password"
                v-model="loginForm.password"
              ></el-input>
            </el-form-item>
            <!-- 按钮 -->
            <el-form-item class="btns">
              <el-button type="primary" @click="loginSubmit">登陆</el-button>
              <!-- <el-button type="info" @click="resetLoginForm">重置</el-button> -->
            </el-form-item>
          </el-form>
          <div>第三方登陆</div>
          <div class="otherAccount">
            <a href>
              <div class="wechat"></div>
            </a>
            <a href>
              <div class="qq"></div>
            </a>
            <a href>
              <div class="ali"></div>
            </a>
          </div>
        </el-tab-pane>

        <el-tab-pane label="注册" name="regist">
          <el-form ref="registFormRef" :model="registForm" :rules="loginRules" class="regist_form">
            <!-- 用户名 -->
            <el-form-item prop="username">
              <el-input
                type="text"
                placeholder="请使用手机号登陆"
                name="username"
                v-model="registForm.username"
              ></el-input>
            </el-form-item>
            <!-- 密码  注意：验证项要加给form-item，而不是文本框-->
            <el-form-item prop="password">
              <el-input
                type="password"
                placeholder="请输入登陆密码"
                name="password"
                v-model="registForm.password"
              ></el-input>
            </el-form-item>
            <!-- 随机数验证 -->
            <el-form-item prop="verify">
              <el-input
                type="text"
                placeholder="请输入图片验证码"
                name="verify"
                v-model="registForm.verify"
              ></el-input>
            </el-form-item>
            <!-- 按钮 -->
            <el-form-item class="btns">
              <el-button type="primary" @click="registSubmit">立即注册</el-button>
              <!-- <el-button type="info" @click="resetregistForm">重置</el-button> -->
            </el-form-item>
          </el-form>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
 
<script>
export default {
  name: "loginr",
  data() {
    return {
      msg: "Welcome to login",
      // tab 默认显示login组件
      activeName: "login",
      //login表单信息
      loginForm: {
        username: "",
        password: ""
      },
      // 注册表单信息
      registForm: {
        username: "",
        password: "",
        verify: ""
      },
      //登陆表单的验证规则对象
      loginRules: {
        username: [
          { required: true, message: "请输入11位手机密码", trigger: "blur" },
          {
            min: 1,
            max: 10,
            message: "手机号不合法",
            trigger: "blur"
          }
        ],
        password: [
          { required: true, message: "请设置登陆密码", trigger: "blur" },
          { min: 6, max: 15, message: "长度在6-15个字符之间", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
    //重置表单 为表单添加ref引用，值就是表单的对象 调用resetFields方法
    resetLoginForm() {
      //this就指向这个表单组件
      console.log(this.loginForm);
      this.$refs.loginFormRef.resetFields();
    },
    loginSubmit() {
      // console.log(this);
      // validate方法有回调，拿到我们表单预验证的结果 第一个返回值是布尔值，根据结果判断是否发起请求
      this.$refs.loginFormRef.validate(valid => {
        console.log(valid);
        if (!valid) return;
        //如果为true，发起axios请求
        //登陆数据双向绑定在data的loginForm
        //console.log(this);
        this.$axios({
          method: "post",
          url: "login",
          data: this.loginForm
        })
          .then(res => {
            console.log(res.data);
            //如果返回0 说明没有查到这个用户
            if (res.data.state == "0") {
              console.log(res.data.msg);
              return this.$message.error(res.data.msg);
            }
            if (res.data.state == "200") {
              //200 说明查找到用户 登陆成功后
              //1.token只应该在当前网站中有效，所以将token保存在客户端sessionStorage中
              //项目中别的API必须在登陆成功后才能访问
              sessionStorage.setItem("token", res.data.token);
              //2.弹框提示用户登陆成功
              this.$message.success(res.data.msg);
              //3.通过编程式导航跳转后台主页
              this.$router.push("/home");
            }
          })
          .catch(err => {
            console.log(err);
            return this.$message.error("请求失败");
          });
      });
    },
    registSubmit() {}
  },
  created() {}
};
</script>
 
<style lang = "less" scoped>
.wrapper {
  width: 400px;
}
.otherAccount {
  .wechat,
  .qq,
  .ali {
    display: inline-block;
    width: 20px;
    height: 20px;
    background-image: url(../../assets/img/spirit3.png);
    background-repeat: no-repeat;
  }
  .wechat {
    background-position: -8px -5px;
  }
  .qq {
    background-position: -40px -5px;
  }
  .ali {
    background-position: -76px -5px;
  }
}
</style>