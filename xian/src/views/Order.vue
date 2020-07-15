<template>
  <div id="order">
    <hr />
    <div class="wrap nav">
      <el-breadcrumb separator-class="el-icon-arrow-right" style="margin-top:20px">
        <el-breadcrumb-item :to="{ path: '/' }">鲜家首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/membercenter' }">会员中心</el-breadcrumb-item>
        <el-breadcrumb-item>支付订单</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="wrap">
      <div class="shoppinglist-info">
        <div class="sl-title">收货信息：</div>
        <div class="sl-content">
          <div class="sl-content-l">
            <a href="#" type="button" class="modi-address" @click="open">使用新地址</a>
            <div v-for="(item,index) in addressList" :key="index">
              <div class="radioBtn" :class="{onChecked: item.isChecked}" @click="onChecked(index)"></div>
              <p>{{item.Consignee}}—{{item.Tel}}—{{item.Province}}{{item.City}}{{item.Area}}{{item.Street}}</p>
            </div>
          </div>
          <div class="sl-content-r" style="width:510px">
            <div class="p">
              <div>订单来源：鲜家电脑</div>
              <!--   class="frm-row"-->
              <div class="frm-row">
                <label class="row-label">送达日期：</label>
                <span class="demonstration"></span>
                <el-date-picker
                  v-model="value1"
                  type="date"
                  placeholder="请选择送达日期"
                  style="border-radius: 0;height: 35px;width: 180px;"
                ></el-date-picker>
                <select
                  name
                  class="row-input select-input"
                  value="不限时段"
                  style="width:165px; margin-left: 6px;"
                  v-model="value2"
                >
                  <option value="不限时段">不限时段</option>
                  <option value="上午">上午</option>
                  <option value="下午">下午</option>
                  <option value="晚上">晚上</option>
                </select>
              </div>
              <div class="frm-row">
                <label class="row-label">订货电话：</label>
                <input
                  type="text"
                  name="mobile"
                  class="row-input"
                  maxlength="11"
                  v-model="phone2"
                  pattern="/^1[0-9]{10}$/"
                  style="width:230px;height:35px"
                  placeholder="请输入收货人电话号码"
                  autocomplete="off"
                  value
                />
              </div>
              <div class="frm-row">
                <label class="row-label" style="float:left">留言信息：</label>
                <textarea
                  type="text"
                  name="memo_body"
                  class="cart-demo-input"
                  maxlength="20"
                  v-model="mes"
                  pattern="/^.+$/"
                  placeholder="留下你想说的话"
                  autocomplete="off"
                ></textarea>
              </div>
            </div>
          </div>
          <div class="clearfix"></div>
        </div>
        <div id="SD_window" v-show="condition">
          <table cellspacing="0" cellpadding="0">
            <tbody>
              <tr>
                <td class="SD_bg"></td>
                <td class="SD_bg"></td>
                <td class="SD_bg"></td>
              </tr>
              <tr>
                <td class="SD_bg"></td>
                <td id="SD_container">
                  <h3 id="SD_title">收货人信息</h3>
                  <div id="SD_body">
                    <div id="SD_content">
                      <div class="order-address-frm">
                        <el-form ref="form" :model="form" label-width="100px">
                          <el-form-item label="收货人姓名">
                            <el-input v-model="form.name" placeholder="请输入收货人姓名"></el-input>
                          </el-form-item>
                          <el-form-item label="收货人电话">
                            <el-input v-model="form.telphone" placeholder="请输入收货人电话"></el-input>
                          </el-form-item>
                          <el-form-item label="配送地区">
                            <v-distpicker
                              :province="user.xtrysf"
                              :city="user.xtrycs"
                              :area="user.area"
                              @province="onChangeProvince"
                              @city="onChangeCity"
                              @area="onChangeArea"
                              @selected="onSelected"
                              placeholder="请输入配送地区"
                            ></v-distpicker>
                          </el-form-item>
                          <el-form-item label="配送地址">
                            <el-input v-model="form.address" placeholder="请输入收货人地址"></el-input>
                          </el-form-item>
                          <el-form-item>
                            <el-button @click="submitCancel">取 消</el-button>
                            <el-button type="success" @click="submitSure">确 定</el-button>
                          </el-form-item>
                        </el-form>
                      </div>
                    </div>
                  </div>
                  <div class="SD_button"></div>
                  <a href="#" id="SD_close" title="关闭" @click="close">×</a>
                </td>
                <td class="SD_bg"></td>
              </tr>
              <tr>
                <td class="SD_bg"></td>
                <td class="SD_bg"></td>
                <td class="SD_bg"></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="h40"></div>
      <table class="table" style="margin-bottom:40px">
        <el-table :data="list" border style="width:100%">
          <el-table-column label="商品名称" align="center" width="720">
            <template slot-scope="scope">
              <div style="margin-left:50px">
                <img :src="scope.row.imgPath" style="height:50px;width:50px" />
                <span style="font-size:18px;padding-left:200px;">{{scope.row.GoodsName}}</span>
              </div>
            </template>
          </el-table-column>
          <el-table-column label="数量" align="center" prop="num" width="192">
            <template slot-scope="scope">
              <span>{{scope.row.num}}</span>
            </template>
          </el-table-column>
          <el-table-column label="支付金额" align="center" prop="price" width="288">
            <template slot-scope="scope">
              <span>{{scope.row.num * scope.row.Price}}</span>
            </template>
          </el-table-column>
        </el-table>
      </table>
      <div class="h400"></div>
      <div class="payment">
        <label class="left input-label" style="width:95px">选择支付方式</label>
        <div class="left" style="width:630px">
          <ul class="payment_list clearfix">
            <li class="active">
              <img
                src="../assets/order/pay_alipay.gif"
                style="border:2px solid #7fc573;width:126px;height:53px"
              />
            </li>
            <li id="act">
              <img
                src="../assets/order/pay_wechat.gif"
                style="border:2px solid grey;width:126px;height:53px;margin-left:15px"
              />
            </li>
          </ul>
          <div class="clear"></div>
        </div>
      </div>
      <div class="total">
        <div class="checkall"></div>
        <div class="totalpay">
          <span style="float: left;margin-top: 40px;margin-left: 82px;">
            支付总金额：
            <span class="totalnum">{{"￥"+moneyTotal}}</span>
          </span>
        </div>
        <el-button
          type="danger"
          style="background-color: #c86457;color: #fff;border-radius: 5px;width: 192px;
          height: 50px;font-size: 18px;float:right"
          @click="toPay"
        >立即支付</el-button>
      </div>
      <div class="h60"></div>
    </div>
    <foter></foter>
  </div>
</template>
<style lang="less">
#order {
  .clearfix:before,
  .wrap:before,
  .clearfix:after,
  .wrap:after {
    content: "";
    display: table;
  }
  .nav {
    height: 54px;
    line-height: 54px;
    font-size: 14px;
    color: #333;
  }
  .wrap {
    width: 1200px;
    margin: 0 auto;
    position: relative;
  }
  .clearfix:after,
  .wrap:after {
    clear: both !important;
  }
  .shoppinglist-info {
    border: 1px solid #e5e5e5;
  }
  .shoppinglist-info .sl-title {
    font-weight: 700;
    background-color: #f8f8f8;
    height: 40px;
    line-height: 40px;
    text-indent: 40px;
  }
  .h40 {
    height: 40px;
  }
  .shoppinglist-info .sl-content {
    padding: 40px;
    overflow: hidden;
  }
  .shoppinglist-info .sl-content .sl-content-l {
    float: left;
    width: 500px;
  }
  .shoppinglist-info .sl-content .sl-content-l .span-t {
    width: 250px;
    display: inline-block;
    vertical-align: middle;
  }
  .shoppinglist-info .sl-content .sl-content-l .locinfo-t {
    vertical-align: top;
  }
  .shoppinglist-info .sl-content .sl-content-l div {
    margin-top: 10px;
    height: 50px;
    display: flex;
    align-items: center;
    .radioBtn {
      width: 20px;
      height: 20px;
      background-color: silver;
      border-radius: 10px;
      margin: 0 5px 0 0;
      // border-radius: 10px;
    }
    .onChecked {
      background-color: rgb(126, 193, 123);
    }
  }
  .p {
    line-height: 25px;
    padding: 0 20px;
  }
  .p > div {
    margin-top: 10px;
    input[name="mobile"] {
      border: 1px solid #dcdcdc;
      padding-left: 5px;
    }
  }
  .shoppinglist-info .sl-content .sl-content-r {
    float: right;
    min-height: 100px;
    border-left: 1px solid #e5e5e5;
  }
  .h400 {
    height: 40px;
    border-top: 1px solid;
    opacity: 0.5;
  }
  .clearfix {
    clear: both !important;
  }
  .left {
    float: left;
  }
  .input-label {
    width: 150px;
    padding-right: 30px;
    text-align: right;
    font-size: 14px;
    color: #333;
    display: inline-block;
  }

  .address-active {
    height: 35px;
    line-height: 35px;
    font-size: 16px;
    color: #777;
    float: left;
  }
  .modi-address {
    height: 24px;
    line-height: 24px;
    padding: 0 15px;
    display: inline-block;
    border-radius: 3px;
    background-color: #353535;
    font-size: 14px;
    color: #fff;
    margin: 5px 40px;
    cursor: pointer;
  }
  #SD_window {
    width: 880px;
    top: 49px;
    left: 219.5px;
    display: block;
    position: absolute;
    z-index: 1000;
    overflow: hidden;
    margin-left: -30px;
  }
  .SD_bg {
    background: #333333;
    opacity: 0.3;
    width: 9px;
    height: 9px;
    overflow: hidden;
  }
  .total .totalnum {
    font-size: 18px;
    color: #c86457;
    margin-right: 34px;
    font-weight: 700;
  }
  #SD_container h3 {
    display: none;
  }
  #SD_container h3 {
    height: 30px;
    line-height: 30px;
    background: #f6f6f6;
    border-bottom: 1px solid #cdcdcd;
    text-indent: 10px;
    color: #336699;
    font-size: 14px;
    font-weight: bold;
    cursor: move;
  }
  #SD_container {
    position: relative;
    z-index: 1005;
    background: #ffffff;
    border: 1px solid #888888;
    float: left;
  }
  #SD_body,
  #SD_body div,
  #SD_body p,
  #SD_body td {
    color: #000000;
  }
  #SD_body {
    padding: 15px;
    white-space: normal;
  }
  #SD_content > .order-address-frm > form {
    width: 500px;
    margin: 20px auto;
    .el-form-item__label {
      width: 100px;
    }
  }
  .order-address-frm {
    position: relative;
    width: 650px;
    display: inline-block;
  }
  .order-address-frm .order-title {
    height: 30px;
    line-height: 30px;
    margin-right: 30px;
    font-size: 14px;
    color: #0348d5 !important;
    text-align: right;
  }
  .address-frm .frm-row .row-label {
    width: 100px;
    font-size: 14px;
    padding-right: 10px;
    color: #777;
    vertical-align: middle;
    text-align: right;
    display: inline-block;
  }
  .address-frm .frm-row .row-input {
    padding: 8px 5px;
    outline: none;
    font-size: 14px;
    color: #999;
    border: 1px solid #e2e2e2;
    vertical-align: middle;
  }
  .frm-row > .select-input {
    height: 35.8px;
    border: 1px solid #e2e2e2;
    outline: none;
  }
  .address-frm .frm-row {
    margin: 15px 0;
  }
  .flatpickr-input[readonly] {
    cursor: pointer;
  }
  option {
    font-weight: normal;
    display: block;
    white-space: pre;
    min-height: 1.2em;
  }
  .h30 {
    height: 30px;
  }
  .cart-demo-input {
    width: 500px;
    height: 100px;
    line-height: 24px;
    padding: 10px;
    font-size: 14px;
    color: #666;
    outline: none;
    border: 1px solid #dcdcdc;
  }
  .address-frm .frm-row .row-btn {
    padding: 6px 24px;
    border-radius: 3px;
    display: inline-block;
    font-size: 14px;
    color: #fff;
    background-color: #63c170;
  }
  a {
    color: #333;
    text-decoration: none;
  }
  #SD_close {
    position: absolute;
    top: 6px;
    right: 10px;
    z-index: 1005;
    width: 17px;
    height: 17px;
    border: none;
    font-size: 24px;
  }
  .el-input__inner {
    height: 35px;
    border-radius: 0;
  }
  .clearfix:before,
  .wrap:before,
  .clearfix:after,
  .wrap:after {
    content: "";
    display: table;
  }
  .active {
    float: left;
  }
  .clearfix:after {
    content: "";
    display: table;
    clear: both;
  }
  .clearfix:after,
  .wrap:after {
    clear: both !important;
  }
  .clear {
    clear: both;
    display: inline-block;
    height: 1px;
    width: 100%;
  }
  .total {
    display: block;
    margin-top: 36px;
  }
  .total .checkall {
    float: left;
    height: 22px;
  }
  .total .checkall {
    color: #777;
  }
  .total .totalpay {
    height: 22px;
  }
  .h60 {
    height: 120px;
  }
}
</style>

<script src="vue.js"></script>
<script>
import VDistpicker from "v-distpicker";
import foter from "../components/Footer/footer";
import { Message, MessageBox } from "element-ui";

export default {
  name: "order",
  components: {
    VDistpicker,
    foter
  },
  data() {
    return {
      rule: [
        { required: true, message: "age is required" },
        { type: "number", message: "age must be a number" }
      ],
      name: "",
      phone: "",
      address: "",
      phone2: "",
      mes: "",
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() > Date.now();
        },
        shortcuts: [
          {
            text: "Today",
            onClick(picker) {
              picker.$emit("pick", new Date());
            }
          }
        ]
      },
      value1: "",
      val: "",
      value2: "",
      list: [],
      condition: false,
      addressList: [],
      totalNum: "",
      pay: "",
      id: "",
      user: {
        xtrysf: ""
      },
      form: {
        name: "",
        telphone: "",
        address: "",
        cityValue: ""
      },
      editIndex: null,
      orderAddress: ""
    };
  },
  created() {
    this.id = localStorage.getItem("userid");
    this.getAddress();
    this.list = this.$route.params.selectGoods;
    // this.pay = this.$route.params.pay;
    // this.totalNum = this.$route.params.totalNum;
    console.log("================");
    // console.log(this.pay + "1");
    // console.log(this.totalNum + "2");
    console.log(this.list);
  },
  methods: {
    getvalue() {
      console.log(this.name, this.phone, this.phone2, this.mes);
      this.val =
        this.value1.getFullYear() +
        "-" +
        (this.value1.getMonth() + 1) +
        "-" +
        this.value1.getDate();
      console.log(this.val);
      this.condition = false;
    },
    close() {
      this.condition = false;
    },
    open() {
      this.condition = true;
    },
    getAddress() {
      this.$axios({
        method: "GET",
        url: "/address/getDatas",
        params: {
          userid: this.id
        }
      })
        .then(res => {
          res.data.data = res.data.data.map(item => {
            item.isChecked = false;
            return item;
          });
          this.addressList = res.data.data;
          this.addressList[this.addressList.length - 1].isChecked = true;
        })
        .catch(err => {
          console.log(err);
        });
    },
    onChecked(index) {
      this.addressList.map(item => {
        item.isChecked = false;
        return item;
      });
      this.addressList[index].isChecked = true;
    },
    //地区选择器
    onChangeProvince(data) {
      this.user.xtrysf = data.value;
    },
    onChangeCity(data) {
      this.user.xtrycs = data.value;
    },
    onChangeArea(data) {
      this.user.area = data.value;
    },
    onSelected(data) {
      this.form.cityValue = data;
    },
    //提交
    submitCancel() {
      this.form.name = "";
      this.form.cityValue = "";
      this.form.address = "";
      this.form.telphone = "";
      Message.info({
        message: "取消"
      });
    },
    submitSure() {
      if (!this.form.name) return;
      if (!this.form.telphone) return;
      this.$axios({
        method: "POST",
        url: "/address/addDatas",
        data: {
          userid: this.id,
          consignee: this.form.name,
          tel: this.form.telphone,
          province: this.form.cityValue.province.value,
          city: this.form.cityValue.city.value,
          area: this.form.cityValue.area.value,
          street: this.form.address
        }
      })
        .then(res => {
          console.log("新增信息成功", res.data);
          Message.success({
            message: "新增成功"
          });
          this.getAddress();
          this.editIndex = res.data.data.insertId;
        })
        .catch(err => {
          console.log(err);
        });
      this.condition = false;
    },
    formatDate(value) {
      let date = new Date(value);
      let y = date.getFullYear();
      let MM = date.getMonth() + 1;
      MM = MM < 10 ? "0" + MM : MM;
      let d = date.getDate();
      d = d < 10 ? "0" + d : d;
      let t = date.getTime();
      return { y, MM, d, t };
    },
    toPay() {
      this.orderAddress = this.addressList.filter(item => {
        return item.isChecked == true;
      });
      //获取当前时间
      var orderTime = new Date();
      var sendDate = this.formatDate(this.value1);
      let nowtime =
        this.formatDate(orderTime).y +
        "-" +
        this.formatDate(orderTime).MM +
        "-" +
        this.formatDate(orderTime).d;
      let orderTime2 = this.formatDate(orderTime);
      this.$axios({
        method: "POST",
        url: "/order/addOrder",
        data: {
          orderno:
            orderTime2.y +
            orderTime2.MM +
            orderTime2.d +
            orderTime2.t +
            Math.floor(Math.random() * 1000), //订单编号 当前日期+时间戳+随机数
          addressid: this.orderAddress[0].AddressId, //地址id
          userid: this.orderAddress[0].userId, //用户id
          service:
            sendDate.y + "-" + sendDate.MM + "-" + sendDate.d + this.value2, //送达时间
          orderphone: this.phone2, //订货电话
          msginfo: this.mes, //留言
          orderstatus: "1", //状态，待付款
          ordertime: nowtime //下单时间
        }
      })
        .then(res => {
          console.log(res.data);
          this.$axios({
            method: "POST",
            url: "/order/addOrderDetail",
            data: {
              orderDetail: this.list,
              orderid: res.data.data.insertId
            }
          })
            .then(res => {
              console.log("请求成功", res.data);
            })
            .catch(err => {
              console.log("请求失败", err);
            });
        })
        .catch(err => {
          console.log(err);
        });
      this.$router.push({
        path: "/membercenter/myorder"
      });
    }
  },
  computed: {
    moneyTotal() {
      var list = this.list;
      var total = 0;
      for (var i = 0; i < list.length; i++) {
        total += parseFloat(list[i].Price) * list[i].num;
      }
      total = parseFloat(total.toFixed(2));
      return total;
    }
  }
};
</script>
