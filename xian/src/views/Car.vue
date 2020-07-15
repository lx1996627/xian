<template>
  <div id="car">
    <hr />
    <div class="carBox">
      <h3>购物车</h3>
      <el-table
        :data="list"
        border
        style="width:100%"
        @selection-change="handleSelectionChange"
        empty-text="您的购物车空空如也哦~"
      >
        <el-table-column label="选择" type="selection" width="50" align="center"></el-table-column>
        <el-table-column label="商品名称" width="680">
          <template slot-scope="scope">
            <div style="margin-left:50px">
              <img :src="scope.row.GoodsPic" alt style="height:50px;width:50px" />
              <span style="font-size:18px;padding-left:200px;">{{scope.row.GoodsName}}</span>
            </div>
          </template>
        </el-table-column>
        <el-table-column label="单价" align="center" prop="price" width="150">
          <template slot-scope="scope">
            <span>{{scope.row.Price}}</span>
          </template>
        </el-table-column>
        <el-table-column label="数量" align="center" width="200">
          <template slot-scope="scope">
            <div>
              <el-input v-model="scope.row.CarSum" style="text-align:center">
                <el-button slot="prepend" @click="del(scope.row)">
                  <i class="el-icon-minus"></i>
                </el-button>
                <el-button slot="append" @click="add(scope.row)">
                  <i class="el-icon-plus"></i>
                </el-button>
              </el-input>
            </div>
          </template>
        </el-table-column>
        <el-table-column label="操作" align="center">
          <template slot-scope="scope">
            <span @click="handleDelete(scope.row)" style="font-size:18px" id="deleteBtn">
              <i class="el-icon-close"></i>
            </span>
          </template>
        </el-table-column>
      </el-table>
      <br />
      <span>已选商品{{totalNumber}}件</span>
      <div style="float:right;margin-right:34px">
        <span style="height:18px">总计：￥{{ moneyTotal}}</span>
        <el-button
          type="danger"
          @click="toSettlement"
          style="background-color: #c86457;color: #fff;border-radius: 5px;width: 143px;height: 44px;font-size: 18px;margin-left:10px"
        >结算</el-button>
      </div>
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
                  <img src="../assets/img/car/1.jpg" alt style="width:153px;height:153px" />
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
                  <img src="../assets/img/car/2.jpg" alt style="width:153px;height:153px" />
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
                  <img src="../assets/img/car/3.jpg" alt style="width:153px;height:153px" />
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
                  <img src="../assets/img/car/1.jpg" alt style="width:153px;height:153px" />
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
                  <img src="../assets/img/car/2.jpg" alt style="width:153px;height:153px" />
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
                  <img src="../assets/img/car/3.jpg" alt style="width:153px;height:153px" />
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
    <foter></foter>
  </div>
</template>
 
<script>
import foter from "../components/Footer/footer";
export default {
  name: "Car",
  components: {
    foter
  },
  data() {
    return {
      list: [{ GoodsName: "鲜花一号", Price: 500, CarSum: 1 }],
      totalNumber: 2,
      moneyTotal: 500
    };
  },
  methods: {
    handleSelectionChange(val) {
      this.multipleSelection = val;
      console.log(this.multipleSelection);
    },
    toSettlement() {
      this.$router.push({
        name: "Order",
        params: {
          selectGoods: this.multipleSelection
        }
      });
    }
  }
  // data() {
  //   return {
  //     list: [],
  //     multipleSelection: [],
  //     userid: ""
  //   };
  // },
  // created() {
  //   this.userid = localStorage.getItem("userid");
  //   this.getUserCar();
  // },

  //   handleDelete(row) {
  //     console.log(row);
  //     this.axios({
  //       method: "POST",
  //       url: "/cars/delData",
  //       data: {
  //         carid: row.CarId
  //       }
  //     })
  //       .then(res => {
  //         console.log("请求成功", res.data);
  //         this.getUserCar();
  //       })
  //       .catch(err => {
  //         console.log("请求失败", err);
  //       });
  //   },
  //   add: function(addGood) {
  //     if (typeof addGood.CarSum == "string") {
  //       addGood.CarSum = parseInt(addGood.CarSum);
  //     }
  //     addGood.CarSum += 1;
  //   },
  //   del: function(delGood) {
  //     if (typeof delGood.CarSum == "string") {
  //       delGood.CarSum = parseInt(delGood.CarSum);
  //     }
  //     if (delGood.CarSum > 1) {
  //       delGood.CarSum -= 1;
  //     }
  //   },
  //   //获取当前用户购物车信息
  //   getUserCar() {
  //     this.axios({
  //       method: "POST",
  //       url: "/cars/getCount",
  //       data: {
  //         userid: this.userid
  //       }
  //     })
  //       .then(res => {
  //         console.log("请求成功", res.data.data);
  //         // this.list = res.data.data
  //         this.list = res.data.data.map(item => {
  //           item.GoodsPic = "http://127.0.0.1:3000" + "/image" + item.GoodsPic;
  //           item.isSelect = true;
  //           return item.GoodsPic;
  //         });
  //       })
  //       .catch(err => {
  //         console.log("请求失败", err);
  //       });
  //   },
  //   //结算
  //   toSettlement() {
  //     this.$router.push({
  //       name: "Order",
  //       params: {
  //         selectGoods: this.multipleSelection
  //       }
  //     });
  //   }
  // },
  // computed: {
  //   moneyTotal() {
  //     var price_total = 0;
  //     for (var i = 0; i < this.multipleSelection.length; i++) {
  //       price_total +=
  //         parseFloat(this.multipleSelection[i].Price) *
  //         parseFloat(this.multipleSelection[i].CarSum);
  //     }
  //     return price_total;
  //   },
  //   totalNumber() {
  //     var number_total = 0;
  //     for (var i = 0; i < this.multipleSelection.length; i++) {
  //       number_total += this.multipleSelection[i].CarSum;
  //     }
  //     return number_total;
  //   }
  // }
};
</script>
 
<style scoped lang="less">
#car {
  .carBox {
    width: 1200px;
    margin: 0 auto;
    position: relative;
  }
  #deleteBtn {
    cursor: pointer;
    font-size: 2em;
  }
  hr {
    opacity: 0.5;
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

