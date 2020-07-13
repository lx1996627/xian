<template>
  <div class="myorder">
    <div class="order-item" v-for="(fan,index) in list" :key="index">
      <div class="order-top">
        <div class="order-top-date">
          <span class="order-time">
            <b>{{fan.OrderTime}}</b>
          </span>
          <p>
            订单号：
            <span>{{fan.OrderNo}}</span>
          </p>
        </div>
        <div>
          <span v-if="fan.OrderStatus == 1">等待付款</span>
          <span v-else-if="fan.OrderStatus == 2">今日配送</span>
          <span v-else-if="fan.OrderStatus == 3">待评价</span>
          <span v-else-if="fan.OrderStatus == 4">已取消</span>
        </div>
        <div>
          <a href class="lxkefu">联系客服</a>
        </div>
      </div>
      <div class="order-body">
        <div class="o-body-l">
          <div class="o-body-goods">
            <div v-for="(item,index) in orderList" :key="index">
              <img :src="item.GoodsPic" alt />
              <a href>{{item.GoodsName}}</a>
              <span>¥{{item.Total}}</span>
            </div>
          </div>
          <div class="o-body-info">
            <div>
              <p>
                送达时间：
                <span class="info-detail">{{fan.Service}}</span>
              </p>
            </div>
            <div>
              <p>
                订货电话：
                <span class="info-detail">{{fan.OrderPhone}}</span>
              </p>
            </div>
            <div>
              <p>
                送货来源：
                <span class="info-detail">鲜家电脑</span>
              </p>
            </div>
            <div>
              <p>留言信息：</p>
              <p>
                <span class="info-detail">{{fan.msgInfo}}</span>
              </p>
            </div>
            <div>
              <p style="border-top:1px solid rgb(231,231,231)"></p>
            </div>
            <div>
              <p>
                <span>收货人：</span>
                {{fan.Consignee}}
                <span>联系电话：</span>
                {{fan.Tel}}
                <span>收货地址：</span>
                {{fan.Province}}{{fan.City}}{{fan.Area}}{{fan.Street}}
              </p>
            </div>
          </div>
        </div>
        <div class="o-body-r">
          <div>
            <p>
              商品总价：
              <span>￥{{total}}</span>
            </p>
            <p>
              +运费：
              <span>￥{{yunfei}}</span>
            </p>
            <p>
              订单支付金额：
              <b>
                <span>￥{{total + yunfei}}</span>
              </b>
            </p>
          </div>
          <p style="border-top:1px solid rgb(231,231,231)"></p>
          <div class="abq">
            <div>
              <a href class="payBtn">立即支付</a>
            </div>
            <div class="redBtn" @click="CancelOrder">取消订单</div>
            <div class="redBtn">查看订单</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "myorder",
  data() {
    return {
      id: "",
      list: [],
      orderList: [],
      total: "",
      yunfei: 10
    };
  },
  created() {
    this.id = localStorage.getItem("userid");
    this.getOrders();
    this.getlist();
    this.getTotal();
  },
  methods: {
    ...mapState(["setSrc"]),
    getOrders() {
      this.axios({
        method: "POST",
        url: "/order/getOrder",
        data: {
          userid: this.id
        }
      })
        .then(res => {
          this.orderList = res.data.data;
          this.orderList.map(item => {
            item.GoodsPic = this.setSrc + item.GoodsPic;
            return item;
          });
          console.log(this.orderList);
        })
        .catch(err => {
          console.log("请求失败", err);
        });
    },
    getlist() {
      this.axios({
        method: "POST",
        url: "/order/getlist",
        data: {
          userid: this.id
        }
      })
        .then(res => {
          this.list = res.data.data;
          console.log(this.list);
        })
        .catch(err => {
          console.log("请求失败", err);
        });
    },
    getTotal() {
      this.axios({
        method: "POST",
        url: "/order/getTotal",
        data: {
          userid: this.id
        }
      })
        .then(res => {
          console.log(res.data);
          this.total = res.data.data[0].s;
          console.log(this.total);
        })
        .catch(err => {
          console.log("请求失败", err);
        });
    },
    CancelOrder() {}
  }
};
</script>

<style lang="less">
.myorder {
  .order-item {
    margin-bottom: 10px;
    border: 1px solid rgb(231, 231, 231);
    .order-top {
      width: 100%;
      height: 50px;
      padding: 0 10px;
      box-sizing: border-box;
      background-color: rgb(231, 231, 231);
      display: flex;
      justify-content: space-between;
      font-size: 12px;
      .order-top-date {
        display: flex;
        align-items: center;
        span {
          margin-right: 10px;
        }
        .order-time {
          color: black;
        }
      }
      div {
        text-align: center;
        line-height: 50px;
        .lxkefu {
          color: blue;
        }
        .lxkefu:hover {
          color: red;
        }
      }
      span {
        color: red;
      }
    }
    .order-body {
      display: flex;
      justify-content: space-between;
      .o-body-l {
        width: 700px;
        .o-body-goods {
          div {
            height: 80px;
            line-height: 80px;
            border-bottom: 1px solid rgb(231, 231, 231);
            padding: 8px;
          }
        }
        .o-body-info {
          p {
            margin: 8px;
          }
          div {
            p {
              span {
                color: red;
              }
              .info-detail {
                color: rgb(153, 146, 146);
                font-size: 15px;
              }
            }
          }
        }
      }
      .o-body-r {
        width: 200px;
        border-left: 1px solid rgb(231, 231, 231);
        font-size: 12px;
        div {
          text-align: center;
          margin: 15px 0;
          .payBtn {
            display: inline-block;
            width: 80px;
            height: 30px;
            color: white;
            border-radius: 15px;
            background-color: rgb(99, 193, 112);
            line-height: 30px;
          }
          p span {
            font-size: 14px;
          }
        }
        .abq {
          font-size: 12px;
          .redBtn:hover {
            color: red;
            cursor: pointer;
          }
        }
        p {
          margin: 8px;
        }
        b {
          color: rgb(99, 193, 112);
        }
      }
    }
  }
}
</style>