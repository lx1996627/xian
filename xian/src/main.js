import Vue from "vue";
import App from "./App.vue";
import router from "./router";
//手动配置element-ui
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
// 导入弹框提示 便于使用$message上的弹框方法
import { Message } from "element-ui";
Vue.prototype.$message = Message;
//单独引用messagebox 确认类的弹框
import { MessageBox } from "element-ui";
Vue.prototype.$confirm = MessageBox;

Vue.use(ElementUI);

//购物车的vuex
import store from "./store/index";

// axios 实际是ajax请求
import axios from "axios";
//指定axios请求的根路径
axios.defaults.baseURL = "http://localhost:8888";
// 请求拦截
axios.interceptors.request.use((config) => {
  //config对象就包含了请求头
  console.log(config);
  config.headers.Authorization = sessionStorage.getItem("token") || "";
  //最后必须return config 这个修改后的对象
  return config;
});
//挂载到vue原型对象上添加$axios，这样所有的vue组件都可以通过this直接访问$axios，发起ajax请求
Vue.prototype.$axios = axios;

//导入全局样式表
import "./assets/css/normalize.css";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
