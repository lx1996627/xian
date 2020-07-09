const state={
  //商品数据
  //购物车数据
};
const getters={
  //对视图提供获取数据的方法
};

const actions={
  //异步操作
  //添加购物车，删除指定商品，清空购物车
};
const mutations={
//添加：添加一条购物车数据--修改state.购物车数据 push
  //删除：state.购物车数据.splice()
  //清空:state.购物车数据=[]
};

export default {
  state,
  mutations,
  actions,
  getters
}
