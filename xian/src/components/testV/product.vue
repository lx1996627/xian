<template>
  <div id="product">
    <el-table :data="shoplist"  style="width: 100%">
      <el-table-column align="center" prop="id" label="商品编号" width="180"></el-table-column>
      <el-table-column align="center" label="图片" width="180">
        <template slot-scope="scope">
          <img :src="scope.row.imgPath" style="width: 50px;height: 50px" />
        </template>
      </el-table-column>
      <el-table-column align="center" prop="GoodsName" label="商品名称" width="180"></el-table-column>
      <el-table-column align="center" prop="Price" label="单价" width="180"></el-table-column>
      <el-table-column align="center" label="操作" width="180">
        <template slot-scope="scope">
          <el-button @click="addToCart(scope.row)" type="text" size="small">添加购物车</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
 
<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "shoplist",
  data() {
    return { };
  },
  methods: {
    // addToCart() {
    //   console.log("点击添加按钮");
    // },
    ...mapActions(["addToCart"]),
    handleChange() {
      console.log("点击添加了");
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
      console.log(this.multipleSelection);
    }
  },

  //computed是在html dom加载后马上执行
  computed: {
    ...mapGetters(["shoplist"]) //拿取到car.js里面的购物车数据
  }
};
</script>
 
<style scoped>
</style>