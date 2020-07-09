import Vue from 'vue'
import Vuex from 'vuex'

import cart from './modules/cart'//引入购物车模块


Vue.use(Vuex);

export default new Vuex.Store({
  modules:{//modules 属性 引入所有子模块
    cart
  }
})
