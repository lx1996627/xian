const state = {
  //商品数据,数据库查出来的数据放此处
  shop_list: [
    {
      id: 1,
      imgPath: require("../../assets/img/goods/goods-test1.1.jpg"),
      GoodsName: "花衣服",
      Price: 500.00,
      CarSum: 1,
    },
    {
      id: 2,
      imgPath: require("@/assets/img/goods/goods-test1.2.jpg"),
      GoodsName: "黄衣服",
      Price: 300.00,
      CarSum: 1,
    },
    {
      id: 3,
      imgPath: require("@/assets/img/goods/goods-test1.3.jpg"),
      GoodsName: "绿衣服",
      Price: 200.00,
      CarSum: 1,
    },
  ],

  //购物车数据
  added: [
    // {
    //   id: 1,
    //   imgPath: "../assets/img/goods/goods-test1.1.jpg",
    //   name: "花衣服",
    //   price: 500,
    //   num: 1,
    // },
  ],
};

const getters = {
  //拿到商品信息
  shoplist: (state) => state.shop_list,

  //拿到购物车信息
  carProducts: (state) => state.added,

  //获取总数和总价
  // totalPrice: (state, getters) => {
  //   //在方法内可以通过形参获取getter自己，从而拿到购物车的信息:getter.carProducts
  //   let totalprice = 0;
  //   getters.carProducts.forEach((item) => {
  //     //循环购物车的信息，来使得总价增加
  //     totalprice += item.price * item.num;
  //   });
  //   return totalprice;
  // },

  //取总数
  // totalNum: (state, getters) => {
  //   let totalNum = 0;
  //   getters.carProducts.forEach((item) => {
  //     totalNum += item.num;
  //   });
  //   return totalNum;
  // },
};

const actions = {
  //当页面发送操作时
  addToCart(ctx, product) {
    console.log(product);
    ctx.commit("add", product);
  },

  //删除指定商品
  delToProduct(ctx, product) {
    ctx.commit("del", product);
  },
};

const mutations = {
  //add是actions里的add
  add(state, product) {
    console.log("action提交到了mutations的方法");

    //es6的语法find
    let record = state.added.find((selfitem) => selfitem.id == product.id);
    console.log(record);
    if (record) {
      //已经拥有产品，则数量++
      record.num++;
    } else {
      //没有产品则push进去一个产品
      state.added.push({ ...product, num: 1 });
    }
  },

  del(state, product) {
    state.added.map((item, index) => {
      if (item.id === product.id) {
        state.added.splice(index, 1);
      }
    });
  },
};

export default {
  state,
  mutations,
  actions,
  getters,
};
