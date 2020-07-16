<template>
  <div>
    <div class="wrapper">
      <div class="innerbox">
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="登陆" name="login">
            <!--:model绑定数据  :rules绑定表单验证规则,与prop属性合并使用 -->
            <!-- ref给这个表单实例对象的引用起名 就指向这个实例对象 -->
            <el-form
              ref="loginFormRef"
              :model="loginForm"
              :rules="loginRules"
              class="login_form"
            >
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
            <!-- <div>第三方登陆</div> -->
            <div class="a-oauth-hr"></div>
            <hr class="line floatleft" />
            <span>第三方登录</span>
            <hr class="line floatright" />
            <div class="otherAccount">
              <i href>
                <div class="wechat">
                  <!-- <div class="wechatScan"></div> -->
                </div>
              </i>
              <i href>
                <div class="qq">
                  <!-- <div class="qqScan"></div> -->
                </div>
              </i>
              <i href>
                <div class="ali">
                  <!-- <div class="aliScan"></div> -->
                </div>
              </i>
            </div>
          </el-tab-pane>

          <el-tab-pane label="注册" name="regist">
            <el-form
              ref="registFormRef"
              :model="registForm"
              :rules="registRules"
              class="regist_form"
            >
              <!-- 用户名 -->
              <el-form-item prop="username" class="userAvail">
                <el-input
                  type="text"
                  placeholder="请输入11位手机号登陆"
                  name="username"
                  v-model="registForm.username"
                ></el-input>

                <div class="availability" v-show="availMsg">
                  {{ availMsg }}
                </div>
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
              <el-form-item prop="verify" class="verify">
                <el-input
                  type="text"
                  placeholder="请输入图片验证码"
                  name="verify"
                  v-model="registForm.verify"
                ></el-input>
                <div class="randomNum">{{ randomNum }}</div>
                <button class="randomBtn cursor" @click="random4">
                  刷新
                </button>
              </el-form-item>
              <!-- 按钮 -->
              <el-form-item class="btns">
                <el-button type="primary" @click="registSubmit"
                  >立即注册</el-button
                >
                <!-- <el-button type="info" @click="resetregistForm">重置</el-button> -->
              </el-form-item>
            </el-form>
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    //自定义校验规则，无论成功还是失败，都必须要回调，否则导致提交表单时methos不被调用
    let validatePass = (rule, value, callback) => {
      if (this.registForm.username.length != 11) {
        this.availMsg = "";
        return;
      }
      this.$axios({
        method: "post",
        url: "/checkAvailability",
        data: this.registForm || {},
      })
        .then((res) => {
          // console.log(res.data);
          //如果返回0 说明没有查到这个手机号，手机号就可以用
          if (res.data.state == "0") {
            // console.log(res.data.msg);
            callback();
          }
          if (res.data.state == "200") {
            //200 说明查找到手机号 手机号已注册
            callback(new Error("该手机号已注册，请重新输入"));
          }
          this.availMsg = res.data;
          console.log(this.availMsg);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    let verifyPass = (rule, value, callback) => {
      if (this.registForm.verify != this.randomNum) {
        console.log(false);
        callback(new Error("该手机号已注册，请重新输入"));
      }
      //验证码一致
      console.log(true);
      callback();
    };
    return {
      msg: "Welcome to login",
      // tab 默认显示login组件
      activeName: "login",
      //login表单信息
      loginForm: {
        username: "",
        password: "",
      },
      // 注册表单信息
      registForm: {
        username: "",
        password: "",
        verify: "",
      },
      //注册手机号是否可用,由后端返回字符串信息
      availMsg: "",
      // availability: false,
      //登陆表单的验证规则对象
      loginRules: {
        username: [
          { required: true, message: "请输入11位手机号", trigger: "blur" },
          {
            min: 11,
            max: 11,
            message: "请输入11位正确手机号",
            trigger: "blur",
          },
        ],
        password: [
          { required: true, message: "请设置登陆密码", trigger: "blur" },
          { min: 6, max: 15, message: "长度在6-15个字符之间", trigger: "blur" },
        ],
      },
      //注册表单的验证规则对象
      registRules: {
        username: [
          { required: true, message: "请输入11位手机号", trigger: "blur" },
          {
            min: 11,
            max: 11,
            message: "请输入11位正确手机号",
            trigger: "blur",
          },
          { required: true, validator: validatePass, trigger: "change" },
        ],
        password: [
          { required: true, message: "请设置登陆密码", trigger: "blur" },
          { min: 6, max: 15, message: "长度在6-15个字符之间", trigger: "blur" },
        ],
        verify: [
          { required: true, message: "请输入右侧四位验证码", trigger: "blur" },
          { min: 4, max: 4, message: "长度为4个数字", trigger: "blur" },
          {
            validator: verifyPass,
            message: "验证码不符",
            trigger: "change",
          },
          {
            validator: verifyPass,
            message: "验证码不符",
            trigger: "blur",
          },
        ],
      },
      //注册页面生成的随机数
      randomNum: "",
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
    //提交登陆
    loginSubmit() {
      // console.log(this);
      // validate方法有回调，拿到我们表单预验证的结果 第一个返回值是布尔值，根据结果判断是否发起请求
      this.$refs.loginFormRef.validate((valid) => {
        console.log(valid);
        if (!valid) return;
        //如果为true，发起axios请求
        //登陆数据双向绑定在data的loginForm
        //console.log(this);
        this.$axios({
          method: "post",
          url: "/login",
          data: this.loginForm,
        })
          .then((res) => {
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
          .catch((err) => {
            console.log(err);
            return this.$message.error("请求失败");
          });
      });
    },

    //提交注册
    registSubmit() {
      console.log(this.randomNum);
      console.log(this.registForm.verify);
      //判断验证码
      if (this.randomNum == this.registForm.verify) {
        this.$refs.registFormRef.validate((valid) => {
          // console.log(valid);
          // validate方法有回调，拿到我们表单预验证的结果 第一个返回值是布尔值，根据结果判断是否发起请求
          if (!valid) return;
          //登陆数据双向绑定在data的registForm
          this.$axios({
            method: "post",
            url: "/regist",
            data: this.registForm,
          })
            .then((res) => {
              console.log(res.data.data);
              console.log(res.data.meta);

              //如果返回201 说明注册成功
              if (res.data.meta.state != "201") {
                // console.log(res.meta.msg);
                return this.$message.error("注册失败");
              }
              //1.token只应该在当前网站中有效，所以将token保存在客户端sessionStorage中
              //项目中别的API必须在登陆成功后才能访问
              sessionStorage.setItem("token", res.data.meta.token);
              //2.弹框提示用户登陆成功
              this.$message.success(res.data.meta.msg);
              //3.通过编程式导航跳转后台主页
              this.$router.push("/home");
            })

            .catch((err) => {
              console.log(err);
              return this.$message.error("请求失败");
            });
        });
      }
    },
    random4() {
      // let a = Math.floor(Math.random * 10000);
      let a = Math.floor(Math.random() * 10000);
      this.randomNum = a.toString().padStart(4, "0");
    },
  },
  computed: {},
  created() {
    this.random4();
  },
};
</script>

<style lang="less" scoped>
.wrapper {
  width: 565px;
  height: 565px;
  box-shadow: 5px 5px 3px #eee;
  background-color: #fff;
  border-radius: 10px;
  padding-top: 50px;
  position: absolute;
  bottom: 5px;
  right: 5px;
  .innerbox {
    width: 330px;
    margin: 0 auto;
    text-align: center;
  }
}
/deep/ .el-tabs__header {
  margin: 0px 0 55px;
}

/deep/ .el-tabs__item.is-top {
  font-size: 20px;
  font-weight: 400;
}

/deep/ .el-tabs__item.is-active {
  color: #63c27c;
  font-weight: 700;
}

/deep/ .el-tabs__active-bar {
  width: 100px;
  background-color: #63c27c;
}

/deep/ .el-input__inner {
  border-top: none;
  border-left: none;
  border-right: none;
  border-radius: 0;
  :focus {
    border-bottom: solid 1px #63c27c;
  }
}

/deep/ .el-button {
  width: 100%;
  margin-top: 60px;
  background-color: #63c27c;
  border: none;
}
.userAvail {
  position: relative;
  .availability {
    position: absolute;
    right: 0;
    top: 0;
    height: 15px;
    // border: orangered 1px solid;
    color: #63c27c;
  }
}

.a-oauth-hr {
  text-align: center;
  color: #999;
}
.line {
  display: block;
  width: 110px;
  border: 0;
  height: 2px;
  border-bottom: 1px solid #e5e5e5;
}
.verify {
  position: relative;
  .randomNum {
    position: absolute;
    bottom: 5px;
    right: 60px;
    width: 50px;
    height: 30px;
    border: 1px solid #63c27c;
    font-size: 18px;
    line-height: 30px;
  }
  .randomBtn {
    position: absolute;
    bottom: 5px;
    right: 0;
    width: 50px;
    height: 30px;
    color: #fff;
    background-color: #63c27c;
  }
}

.otherAccount {
  /* width: 120px; */
  /* margin: 0 auto; */
  display: flex;
  align-content: space-around;
  i {
    width: 34px;
    height: 34px;
    border-radius: 50%;
    border: 1px solid #dcdcdc;
    display: inline-block;
    cursor: pointer;
    margin: 10px;
  }
  .wechat,
  .qq,
  .ali {
    /* display: inline-block; */
    width: 34px;
    height: 34px;
    background-image: url(../../assets/img/spirit3.png);
    background-repeat: no-repeat;
    position: relative;
  }
  .wechat {
    background-position: 0px 0px;
  }
  .qq {
    background-position: -33px 0px;
  }
  .ali {
    background-position: -69px 0px;
  }

  .wechatScan {
    position: absolute;
    top: -385px;
    left: -125px;
    // background-color: red;
    width: 335px;
    height: 335px;
    background-image: url(../../assets/img/codeWechat.jpg);
    background-repeat: no-repeat;
    background-size: contain;
    z-index: 2;
  }
  .qqScan {
    position: absolute;
    top: -385px;
    left: -125px;
    // background-color: red;
    width: 335px;
    height: 335px;
    background-image: url(../../assets/img/codeQq.jpg);
    background-repeat: no-repeat;
    background-size: contain;
  }
  .aliScan {
    position: absolute;
    top: -385px;
    left: -125px;
    // background-color: red;
    width: 335px;
    height: 335px;
    background-image: url(../../assets/img/codeAli.jpg);
    background-repeat: no-repeat;
    background-size: contain;
  }
}
</style>
