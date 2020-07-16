import Vue from "vue";
import Vuex from "vuex";
import car from "./modules/car"; //引入购物车模块

Vue.use(Vuex);

export default new Vuex.Store({

  modules: {
    //引入所有的子模块
    car,
  },
});
