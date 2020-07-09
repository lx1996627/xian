import Vue from 'vue'
import Router from 'vue-router'

//引入子路由
import product from './product'



Vue.use(Router);

export default new Router({
  routes: [
    ...product
  ]
})
