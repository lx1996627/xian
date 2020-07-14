<template>
  <div class="goodsdetails">
    <el-row>
      <el-col :span="12" style="width:470px">
        <div class="grid-content bg-purple gl470" style="border:1px solid #dcdcdc">
          <img src="{{src[1].url}}" style="width:100%;" alt="详情页大图" />
        </div>
        <el-row :gutter="18" class="goods-small">
          <div v-for="item in src" :key="item.url">
            <el-col :span="6">
              <div class="grid-content bg-purple">
                <img :src="item.url" @click="changeImg(scope.$index)" style="width:90%;margin-top:20px" alt="详情页大图" />
              </div>
            </el-col>
          </div>
        </el-row>
      </el-col>
      <el-col :span="12">
        <div class="grid-content bg-purple-light gr670">
          <!-- <div> <h2 style="font-size:24px">{{goodsdetail.goodsname}}</h2></div>
      <div> <h1 style="font-size:28px">{{goodsdetail.goodsprice}}</h1></div>
      <div> <span >{{goodsdetail.goodsinf}}</span></div>
      <div class="gr670-tag">
        <div>相关标签：</div>
        <div v-for="item in goodsdetail.tag" :key="item"><button>{{item}}</button></div>
          </div>-->
          <el-form ref="goodsdetail" :model="form" label-width="80px">
            <el-form-item>
              <h1
                style="height: 40px;
    overflow: hidden;
    font-size: 24px;
    font-weight: 700;
    color: #333">{{goodsdetail.goodsname}}</h1>
            </el-form-item>
            <el-form-item class="goodsdetail-price">
              <label style="font-size:30px;color:#b84339;font-weight: 700;">
                <span>￥{{goodsdetail.goodsprice}}</span>
              </label>
              <label style=" text-decoration: line-through;">
                <span>原价：{{goodsdetail.goodsprice}}</span>
              </label>
              <label style="color:#fff;background:#cd823f">
                <span>{{goodsdetail.discount}}</span>
              </label>
              <label>
                <span>已售：{{goodsdetail.hadsold}}</span>
              </label>
              <label>
                <span>评价：{{goodsdetail.pingjia}}</span>
              </label>
              <label>
                <span>人气：{{goodsdetail.count}}</span>
              </label>
            </el-form-item>
            <el-form-item>
              <ul>
                <li v-for="item in goodsdetail.goodsinf" :key="item">
                  <span>{{item}}</span>
                </li>
              </ul>
            </el-form-item>
            <el-form-item>
              <div class="gr670-tag">
                <div>相关标签：</div>
                <div v-for="item in goodsdetail.tag" :key="item">
                  <button>{{item}}</button>
                </div>
              </div>
            </el-form-item>
            <el-form-item>
              <span>购买数量：</span>
              <el-input-number v-model="num" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
            </el-form-item>
            <el-form-item class="goodsdetail-btn">
              <el-button class="goodsdetail-btn1">立即抢购</el-button>
              <el-button>加入购物车</el-button>
            </el-form-item>
            <el-form-item>
              <img src="../assets/img/goods/bx.png" alt />
            </el-form-item>
          </el-form>
        </div>
      </el-col>
    </el-row>
    <!-- 商品评价 -->
    <el-row class="goodsdetail-pingjia">
      <el-col :span="6" style="height:500px">
        <div class="grid-content bg-purple"></div>
      </el-col>
      <el-col :span="18" style="height:500px">
        <div class="grid-content bg-purple-light" style="margin-left:30px;">
          <div>
            <el-tabs v-model="activeName" @tab-click="handleClick" class="elTabs">
              <el-tab-pane style="font-size:24px" label="商品详情" name="first"></el-tab-pane>
              <el-tab-pane style="font-size:24px" label="用户评价(781)" name="second"></el-tab-pane>
              <el-tab-pane style="font-size:24px" label="购物保障" name="third"></el-tab-pane>
            </el-tabs>
          </div>
          <div>
            <div v-for="item in goodsPic" :key="item.url" ><img :src="item.url" style="width:100%" alt=""></div>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      src: [
        { id: 1, url: require("../assets/img/goods/goods-test1.1.jpg") },
        { id: 2, url: require("../assets/img/goods/goods-test1.2.jpg") },
        { id: 3, url: require("../assets/img/goods/goods-test1.3.jpg") },
        { id: 4, url: require("../assets/img/goods/goods-test1.4.jpg") }
      ],
      goodsdetail: {
        goodsname: "永远守护你·19枝苏醒玫瑰韩式花束",
        goodsprice: "268.00",
        goodsinf: [
          "主花材   玫瑰花 桔梗 22枝",
          "绿植工艺  鲜花(鲜切花)",
          "花束辅材  小雏菊，栀子叶，水晶草",
          "花束包装  白色雪梨纸5张，黑白竖条纹蝴蝶结"
        ],
        tag: ["玫瑰", "鲜花", "浓情", "粉色"],
        discount: "8.0折",
        hadsold: "928",
        pingjia: "781",
        count: "3518"
      },
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      },
      num: 1,
      activeName: 'second',
      goodsPic:[
      {url:require("../assets/img/goods/goods-j-01.jpg")},
      {url:require("../assets/img/goods/goods-j-02.jpg")},
      {url:require("../assets/img/goods/goods-j-03.jpg")},
      {url:require("../assets/img/goods/goods-j-04.jpg")},
      {url:require("../assets/img/goods/goods-j-01.jpg")},
      {url:require("../assets/img/goods/goods-j-02.jpg")},
      {url:require("../assets/img/goods/goods-j-03.jpg")},
      {url:require("../assets/img/goods/goods-j-04.jpg")},
      {url:require("../assets/img/goods/goods-j-01.jpg")},
      {url:require("../assets/img/goods/goods-j-02.jpg")},
      {url:require("../assets/img/goods/goods-j-03.jpg")},
      {url:require("../assets/img/goods/goods-j-04.jpg")},
      {url:require("../assets/img/goods/goods-j-01.jpg")},
      {url:require("../assets/img/goods/goods-j-02.jpg")},
      {url:require("../assets/img/goods/goods-j-03.jpg")},
      {url:require("../assets/img/goods/goods-j-04.jpg")}]
    };
  },
  components: {},
  methods: {
    handleChange(value) {
      console.log(value);
    },
    handleClick(tab, event) {
        console.log(tab, event);
    },
    changeImg(index){

    }
  },
  created () {
    var str = location.href;
    var num = str.indexOf("=");
    str = str.substr(num+1);
    str = Number(str);
    this.axios
        .post("/pay/xiangqing",{
            payId:str,
        }) 
        .then(res => { 
          console.log(res.data)
          this.loading=false
        })
        .catch(err => {
          return err;
          
        })
  },
  computed: {
    // goodsdetail(){
    //   return[
    //     {goodsname:'永远守护你·19枝苏醒玫瑰韩式花束',
    //     goodsprice:249,
    //     goodsinf:'主花材玫瑰花 桔梗 22枝绿植工艺鲜花(鲜切花)花束辅材0.3扎小雏菊，0.2扎栀子叶，0.2扎水晶草花束包装白色雪梨纸5张，黑白竖条纹蝴蝶结'
    //     },
    //     {tag:['玫瑰','鲜花','浓情','粉色']}
    //   ]
    // }
  }
};
</script>

<style>
@import "../assets/css/normalize.css";
.goodsdetails {
  width: 1200px;
  margin: 0 54px;
  vertical-align: middle;
}
.el-form-item {
  margin-top: 22px;
}

.gr670 {
  width: 670px;
  /* border: 1px solid black ; */
}
.gr670-tag > div {
  width: 70px;
  float: left;
}
.gr670-tag button {
  padding: 5px;
  height: 24px;
  line-height: 24px;
  display: inline-block;
  padding: 0 8px;
  border: 1px solid #d2d2d2;
  background-color: #fff;
  border-radius: 3px;
  color: #777;
}

.goods-small .el-col img:hover {
  border: black 1px solid;
}
.goodsdetail-btn .el-button {
  width: 195px;
  height: 43px;
  /* background:red; */
  color: black;
  margin-bottom: 30px;
}
.goodsdetail-btn .el-button:hover {
  opacity: 0.7;
}
.goodsdetail-btn1 {
  color: #fff;
  background: red;
}
.el-form > h1 {
  height: 30px;
  overflow: hidden;
  font-size: 24px;
  font-weight: 700;
  color: #333;
}
ul {
  overflow: hidden;
}
ul li {
  width: 50%;
  float: left;
}
.el-form label {
  margin-right: 20px;
  height: 80px;
  line-height: 80px;
}

.goodsInf{
  height: 30px;
  line-height: 30px;
  border-bottom:1px solid gray ;
}
::deep.el-tabs .el-tab-pane{
  color: red;
  background: red;
}
</style>
