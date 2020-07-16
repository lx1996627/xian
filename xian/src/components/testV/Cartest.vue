<template>
  <div id="cartest">
    <hr />
    <div class="carBox">
      <h3>购物车</h3>
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
        <el-table-column align="center" prop="GoodsName" label="商品名称" width="180"></el-table-column>
        <el-table-column align="center" prop="Price" label="单价" width="180"></el-table-column>
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
        <div class="infoitem">
          已选商品
          <span style="font-size:18px;margin:5px">{{totalNum}}</span>件
        </div>
        <div class="infoitem" style="float:right;margin-right:34px">
          总计:￥
          <span style="color:rgb(200,100,87);font-size:18px">{{totalPrice}}.00</span>
        </div>
        <el-row>
          <el-button
            type="danger"
            style="background-color: #c86457;color: #fff;border-radius: 5px;width: 143px;height: 44px;font-size: 18px;margin-left:10px"
            @click="jieS"
          >结算</el-button>
        </el-row>
      </div>

      <!-- 下面 -->
      <div>
        <div class="h60"></div>
        <div class="wrap">
          <div class="select-bar">
            <ul>
              <li class="active">购买该商品的还购买了</li>
              <li>
                <a href="javascript:;">我的收藏</a>
              </li>
            </ul>
          </div>
          <div class="select-info comment">
            <div class="infos fshot-content active">
              <div class="column-content-item">
                <div class="hover">
                  <a href>
                    <img src="../../assets/img/car/1.jpg" alt style="width:153px;height:153px" />
                  </a>
                </div>
                <div class="goods-info">
                  <div class="fshot-content-t1">爱你久久.99枝红玫瑰纯美花束</div>
                  <div class="fshot-content-t2" style="color:red">￥588.00</div>
                </div>
              </div>
              <div class="column-content-item">
                <div class="hover">
                  <a href>
                    <img src="../../assets/img/car/2.jpg" alt style="width:153px;height:153px" />
                  </a>
                </div>
                <div class="goods-info">
                  <div class="fshot-content-t1">爱你久久.99枝红玫瑰纯美花束</div>
                  <div class="fshot-content-t2" style="color:red">￥588.00</div>
                </div>
              </div>
              <div class="column-content-item">
                <div class="hover">
                  <a href>
                    <img src="../../assets/img/car/3.jpg" alt style="width:153px;height:153px" />
                  </a>
                </div>
                <div class="goods-info">
                  <div class="fshot-content-t1">爱你久久.99枝红玫瑰纯美花束</div>
                  <div class="fshot-content-t2" style="color:red">￥588.00</div>
                </div>
              </div>
              <div class="column-content-item">
                <div class="hover">
                  <a href>
                    <img src="../../assets/img/car/1.jpg" alt style="width:153px;height:153px" />
                  </a>
                </div>
                <div class="goods-info">
                  <div class="fshot-content-t1">爱你久久.99枝红玫瑰纯美花束</div>
                  <div class="fshot-content-t2" style="color:red">￥588.00</div>
                </div>
              </div>
              <div class="column-content-item">
                <div class="hover">
                  <a href>
                    <img src="../../assets/img/car/2.jpg" alt style="width:153px;height:153px" />
                  </a>
                </div>
                <div class="goods-info">
                  <div class="fshot-content-t1">爱你久久.99枝红玫瑰纯美花束</div>
                  <div class="fshot-content-t2" style="color:red">￥588.00</div>
                </div>
              </div>
              <div class="column-content-item last_child">
                <div class="hover">
                  <a href>
                    <img src="../../assets/img/car/3.jpg" alt style="width:153px;height:153px" />
                  </a>
                </div>
                <div class="goods-info">
                  <div class="fshot-content-t1">爱你久久.99枝红玫瑰纯美花束</div>
                  <div class="fshot-content-t2" style="color:red">￥588.00</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <foter></foter>
  </div>
</template>
 
<script>
import { mapGetters, mapActions } from "vuex";
import foter from "../Footer/footer";
export default {
  name: "car",
  components: {
    foter
  },
  data() {
    return { multipleSelection: [], userid: "" };
  },
  // created() {
  //   this.userid = localStorage.getItem("userid");
  //   this.getUserCar();
  // },
  methods: {
    // 获取用户id
    // ...mapState(["setSrc"]),

    // 删除用户购物车东西
    // handleDelete(row) {
    //   console.log(row);
    //   this.axios({
    //     method: "POST",
    //     url: "/cars/delData",
    //     data: {
    //       carid: row.CarId
    //     }
    //   })
    //     .then(res => {
    //       console.log("请求成功", res.data);
    //       this.getUserCar();
    //     })
    //     .catch(err => {
    //       console.log("请求失败", err);
    //     });
    // },

    // //获取当前用户购物车信息
    // getUserCar() {
    //   this.axios({
    //     method: "POST",
    //     url: "/cars/getCount",
    //     data: {
    //       userid: this.userid
    //     }
    //   })
    //     .then(res => {
    //       console.log("请求成功", res.data.data);
    //       // this.list = res.data.data
    //       this.list = res.data.data.map(item => {
    //         item.GoodsPic = "http://127.0.0.1:3000" + "/image" + item.GoodsPic;
    //         item.isSelect = true;
    //         return item.GoodsPic;
    //       });
    //     })
    //     .catch(err => {
    //       console.log("请求失败", err);
    //     });
    // },

    handleChange() {
      console.log("点击了商品数量");
    },

    //全选按钮
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },

    // 删除商品
    ...mapActions(["delToProduct"]),

    //点击结算
    jieS() {
      if (this.multipleSelection != 0) {
        this.$router.push({
          path: "/Order",
          name: "Order",
          params: {
            selectGoods: this.multipleSelection,
            totalNum: this.totalNum,
            pay: this.pay
          }
        });
      } else {
        this.$confirm("不要急着去买单哦~", "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning",
          center: true
        })
          .then(() => {
            this.$message({
              type: "success",
              message: "你已经知道要选择商品了!"
            });
          })
          .catch(() => {
            this.$message({
              type: "info",
              message: "快去选择商品！"
            });
          });
      }
      // console.log(this.carProducts);
    }
  },
  computed: {
    ...mapGetters(["carProducts"]), //拿到了car.js里面的getters里的数据
    // ...mapGetters(["totalNum", "totalPrice"]),
    // totalPrice() {
    //   var totalprice = 0;
    //   for (var i = 0; i < this.carProducts.length; i++) {
    //     totalprice +=
    //       parseFloat(this.carProducts[i].Price) *
    //       parseFloat(this.carProducts[i].num);
    //   }
    //   return totalprice;
    // },
    totalPrice() {
      let pay = 0;
      if (this.multipleSelection.length == 0) {
        return "00";
      } else {
        this.multipleSelection.forEach(item => {
          console.log(this.carProducts);
          this.carProducts.forEach(value => {
            console.log(value.Price);
            if (value.id == item.id) {
              pay += value.Price * value.num;
            }
          });
        });
        return pay;
      }
    },
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
 
<style scoped lang="less">
/* 购物车 */
#cartest {
  .carBox {
    width: 1200px;
    margin: 0 auto;
    position: relative;
  }
  hr {
    opacity: 0.5;
  }
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
  h3 {
    font-size: 18px;
    margin-top: 76px;
    margin-bottom: 22px;
    font-weight: 700;
  }
  .h60 {
    height: 60px;
  }
  .clearfix:before,
  .wrap:before,
  .clearfix:after,
  .wrap:after {
    content: "";
    display: table;
  }
  .wrap {
    width: 1200px;
    margin: 0 auto;
    position: relative;
    margin-bottom: 100px;
  }
  .select-bar .active {
    color: #333;
    border-bottom: 1px solid #333;
    font-weight: 700;
    font-size: 18px;
    *border: 0;
  }
  .select-bar ul li {
    padding: 22px 42px;
    margin-bottom: -1px;
    cursor: pointer;
    display: inline-block;
  }
  a {
    color: #333;
    text-decoration: none;
    font-size: 18px;
  }
  a:hover {
    color: red;
  }
  .comment .column-content-item {
    border-radius: 8px;
    width: 153px;
    float: left;
    margin-right: 56px;
  }
  .comment .column-content-item .hover img {
    background-color: #f9f9f9;
  }
  .select-info .active {
    align-items: center;
    height: 180px;
  }
  .select-info .infos {
    margin-top: 46px;
  }
  .fshot-content-t1 {
    margin-top: 10px;
    margin-bottom: 6px;
    width: 153px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: center;
  }
  .fshot-content-t2 {
    text-align: center;
  }
  .last_child {
    margin: 0 !important;
  }
}
</style>