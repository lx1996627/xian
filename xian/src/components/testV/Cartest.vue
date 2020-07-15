<template>
  <div id="cartest">
    <h1>购物车结算页面</h1>
    <el-table
      @selection-change="handleSelectionChange"
      :data="carProducts"
      style="width: 100%"
      empty-text="您的购物车空空如也哦~"
    >
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column align="center" prop="id" label="商品编号" width="180"></el-table-column>
      <el-table-column align="center" label="图片" width="180">
        <template slot-scope="scope">
          <img :src="scope.row.imgPath" style="width: 50px;height: 50px" />
        </template>
      </el-table-column>
      <el-table-column align="center" prop="name" label="商品名称" width="180"></el-table-column>
      <el-table-column align="center" prop="price" label="单价" width="180"></el-table-column>
      <el-table-column align="center" prop="num" label="数量" width="200">
        <template slot-scope="scope">
          <el-input-number
            v-model="scope.row.num"
            @change="handleChange"
            :min="1"
            :max="10"
            label="描述文字"
          ></el-input-number>
        </template>
      </el-table-column>
      <el-table-column align="center" label="操作" width="180">
        <template slot-scope="scope">
          <el-button @click="delToProduct(scope.row)" type="text" size="small">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <!-- 结算 -->
    <div class="info">
      <div class="infoitem">已选商品{{totalNum}}件</div>
      <div class="infoitem">总计:￥{{totalPrice}}</div>
      <el-row>
        <el-button type="danger" @click="jieS">结算</el-button>
      </el-row>
    </div>
  </div>
</template>
 
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "car",
  data() {
    return { multipleSelection: [], userid: "" };
  },
  methods: {
    handleChange() {
      console.log("点击了");
    },

    handleSelectionChange(val) {
      //全选按钮

      this.multipleSelection = val;
      console.log(this.multipleSelection);
    },

    ...mapActions(["delToProduct"]),

    jieS() {
      this.$router.push({
        name: "Order",
        params: {
          // selectGoods: this.multipleSelection
          selectGoods: this.carProducts
        }
      });
      console.log("点击了结算", this.carProducts);
    }
  },
  computed: {
    ...mapGetters(["carProducts"]), //拿到了car.js里面的getters里的数据
    // ...mapGetters(["totalNum", "totalPrice"]),
    totalPrice() {
      var totalprice = 0;
      for (var i = 0; i < this.carProducts.length; i++) {
        totalprice +=
          parseFloat(this.carProducts[i].price) *
          parseFloat(this.carProducts[i].num);
      }
      return totalprice;
    },
    // totalPrice() {
    //   let pay = 0;
    //   if (this.multipleSelection.length == 0) {
    //     return "￥00.00";
    //   } else {
    //     this.multipleSelection.forEach(item => {
    //       console.log(item.id);
    //       this.carProducts.forEach((value) => {
    //         if (value.id == item.id) {
    //           pay += parseFloat(value.price.split("￥")[1]);
    //         }
    //       });
    //     });
    //     return "￥" + pay;
    //   }
    // },
    totalNum() {
      var totalNum = 0;
      for (var i = 0; i < this.carProducts.length; i++) {
        totalNum += this.carProducts[i].num;
      }
      return totalNum;
    }
  }
};
</script>
 
<style scoped>
.info {
  display: flex;
  align-items: center;
  justify-self: center;
}

.infoitem {
  flex: 1;
}
img {
  width: 50px;
  height: 50px;
}
</style>