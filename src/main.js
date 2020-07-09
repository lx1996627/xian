// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
<<<<<<< HEAD
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'


//购物车 vuex
import store from './store/index'




//elementUI
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI);


Vue.config.productionTip = false;
//在原型对象上添加$axios指向了axios
Vue.prototype.$axios=axios;
Vue.prototype.$host="http://172.16.2.56:8888/";

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
=======
import Vue from "vue";
import App from "./App";
import router from "./router";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

Vue.config.productionTip = false;
Vue.use(ElementUI);

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>"
});
>>>>>>> e0c7fc10e34252d6240c562cb9b8b93da6c685cf
