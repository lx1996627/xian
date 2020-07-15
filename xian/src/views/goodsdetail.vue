<template>
  <div class="goodsdetails">
    <el-row>
      <el-col :span="12" style="width:470px">
        <div class="grid-content bg-purple gl470" style="border:1px solid #dcdcdc">
          <img src="../assets/img/goods/goods-test1.1.jpg" style="width:100%;" alt="详情页大图" />
        </div>
        <el-row :gutter="18" class="goods-small">
          <div v-for="item in src" :key="item.url">
            <el-col :span="6">
              <div class="grid-content bg-purple">
                <img
                  :src="item.url"
                  @click="changeImg(scope.$index)"
                  style="width:90%;margin-top:20px"
                  alt="详情页大图"
                />
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
    color: #333"
              >{{goodsdetail.goodsname}}</h1>
            </el-form-item>
            <el-form-item class="goodsdetail-price">
              <label style="font-size:30px;color:#b84339;font-weight: 700;">
                <span>￥{{goodsdetail.goodsprice2}}</span>
              </label>
              <label style=" text-decoration: line-through;">
                <span>原价：{{goodsdetail.goodsprice1}}</span>
              </label>
              <label style="color:#fff;background:#cd823f">
                <span>{{goodsdetail.goodsdiscount}}</span>
              </label>
              <label>
                <span>已售：{{goodsdetail.goodsHadsold}}</span>
              </label>
              <label>
                <span>评价：{{goodsdetail.goodsPingjia}}</span>
              </label>
              <label>
                <span>人气：{{goodsdetail.goodsPeople}}</span>
              </label>
            </el-form-item>
            <el-form-item>
              <ul>
                <li v-for="item in goodsinf" :key="item">
                  <span>{{item}}</span>
                </li>
              </ul>
            </el-form-item>
            <el-form-item>
              <div class="gr670-tag">
                <div>相关标签：</div>
                <div v-for="item in tag" :key="item">
                  <button>{{item}}</button>
                </div>
              </div>
            </el-form-item>
            <el-form-item>
              <span>购买数量：</span>
              <el-input-number v-model="num" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
            </el-form-item>
            <el-form-item class="goodsdetail-btn">
              <el-button class="goodsdetail-btn1" @click="goCartTest">立即抢购</el-button>
              <el-button @click="goCart">加入购物车</el-button>
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
      <el-col :span="18">
        <div class="grid-content bg-purple-light" style="margin-left:30px;border:1px solid gray">
          <div :class="fixed == true ? 'fixedBtn' :''" class="fixedtabs">
            <div>
              <el-tabs v-model="activeName" @tab-click="handleClick">
              <el-tab-pane style="font-size:30px" label="商品详情" name="first"></el-tab-pane>
              <el-tab-pane style="font-size:24px" label="用户评价(781)" name="second"></el-tab-pane>
              <el-tab-pane style="font-size:24px" label="购物保障" name="third"></el-tab-pane>
            </el-tabs>
            </div>
            
            <div class="shop-header-but" ref="shop-header-but" v-show="isShow" :class="showed==true ? 'showedbtn' : '' ">
              <lable class="sell-val">
                <span>¥{{goodsdetail.goodsprice2}}</span>
              </lable>
              <a href="javascript:;" onclick="openChat();return false;">咨询客服</a>
              <a
                class="action"
                href="javascript:;"
                @click="goCartTest"
              >
                <i></i>立即购买
              </a>
            </div>
            <!-- <ul class="tab-list" :class="{fixTitle:whether}">
              <li @click="curId=0" :class="{'cur':curId===0}">商品详情</li>
              <li @click="curId=1" :class="{'cur':curId===1}">商品评价</li>
              <li @click="curId=2" :class="{'cur':curId===2}">商品保障</li>
            </ul>-->
          </div>
          <div class="introduce" ref="gotoxq">
            <p>主要花材：6枝香槟玫瑰，6枝白桔梗，3枝小雏菊，0.3扎绿叶，浅蓝色牛皮纸2张，白色字母缎带蝴蝶结</p>
            <p>
              <span>主花材: 玫瑰花 12枝</span>
              <span>花束辅材:3枝小雏菊，0.3扎绿叶</span>
            </p>
            <p>
              <span>花束包装:浅蓝色牛皮纸2张，白色字母缎带蝴蝶结</span>
              <span>适用对象:病人、长辈、老师</span>
            </p>
            <p>
              <span>适用节日:问候长辈 友情鲜花 周年纪念</span>
              <span>花束颜色:白色 香槟</span>
            </p>
          </div>
          <div>
            <div v-for="item in goodsPic" :key="item.url">
              <img :src="item.url" style="width:100%" alt />
            </div>
          </div>
          <div>
            <div style="height:50px;line-height:50px;background:#fafafa" ref="gotopl">
              <h1 style="font-size:18px;margin-left: 20px;font-weight: 700;">用户评价</h1>
            </div>
            <ArticleComment></ArticleComment>
          </div>
          <div>
            <div style="height:50px;line-height:50px;background:#fafafa" ref="gotobz">
              <h1 style="font-size:18px;margin-left: 20px;font-weight: 700;">购物保障</h1>
            </div>
            <div>
              <el-row :gutter="20">
                <el-col :span="6" v-for="item in shopbaozhang.bz1" :key="item.url">
                  <div style="margin:30px 0">
                    <img :src="item.url" alt />
                  </div>
                </el-col>
              </el-row>
            </div>
            <div>
              <img width="100%" src="../assets/img/goods/shopbaozhang11.png" alt />
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <Footer></Footer>
    </el-row>
  </div>
</template>

<script>
import ArticleComment from "../components/ArticleComment/ArticleComment";
import Footer from "../components/Footer/footer";
export default {
  name: "goodsdetail",
  data() {
    return {
      tag: ["玫瑰", "鲜花", "浓情", "粉色"],
      goodsinf: [
        "主花材   玫瑰花 桔梗 22枝",
        "绿植工艺  鲜花(鲜切花)",
        "花束辅材  小雏菊，栀子叶，水晶草",
        "花束包装  白色雪梨纸5张，黑白竖条纹蝴蝶结"
      ],
      shopbaozhang: {
        bz1: [
          { url: require("../assets/img/goods/shopbaozhang1.png") },
          { url: require("../assets/img/goods/shopbaozhang2.png") },
          { url: require("../assets/img/goods/shopbaozhang3.png") },
          { url: require("../assets/img/goods/shopbaozhang4.png") }
        ],
        bz2: [
          "../assets/img/goods/shopbaozhang11.png",
          "../assets/img/goods/shopbaozhang22.png",
          "../assets/img/goods/shopbaozhang33.png",
          "../assets/img/goods/shopbaozhang44.png"
        ]
      },
      src: [],
      goodsdetail: {
        // goodsname: "永远守护你·19枝苏醒玫瑰韩式花束",
        // goodsprice: "268.00",
        // discount: "8.0折",
        // hadsold: "928",
        // pingjia: "781",
        // count: "3518"
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
      curId: 0,
      fixed: false,
      isShow:false,
      showed: false,
      activeName: "first",
      goodsPic: [
        { id: 1, url: require("../assets/img/goods/goodsdetail001.jpg") },
        { id: 2, url: require("../assets/img/goods/goodsdetail002.jpg") },
        { id: 3, url: require("../assets/img/goods/goodsdetail003.jpg") },
        { id: 4, url: require("../assets/img/goods/goodsdetail004.jpg") },
        { id: 5, url: require("../assets/img/goods/goodsdetail005.jpg") },
        { id: 6, url: require("../assets/img/goods/goodsdetail006.jpg") },
        { id: 7, url: require("../assets/img/goods/goodsdetail007.jpg") },
        { id: 8, url: require("../assets/img/goods/goodsdetail008.jpg") },
        { id: 9, url: require("../assets/img/goods/goodsdetail009.jpg") },
        { id: 10, url: require("../assets/img/goods/goodsdetail0010.jpg") },
        { id: 11, url: require("../assets/img/goods/goodsdetail0011.jpg") },
        { id: 12, url: require("../assets/img/goods/goodsdetail0012.jpg") },
        { id: 13, url: require("../assets/img/goods/goodsdetail0013.jpg") },
        { id: 14, url: require("../assets/img/goods/goodsdetail0014.jpg") },
        { id: 15, url: require("../assets/img/goods/goodsdetail0015.jpg") },
        { id: 16, url: require("../assets/img/goods/goodsdetail0016.jpg") }
      ]
    };
  },
  components: {
    ArticleComment,
    Footer
  },
  methods: {
    handleChange(value) {
      console.log(value);
    },
    handleScroll() {
      var scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      // console.log(scrollTop)
      if (scrollTop > 329) {
        this.whether = true;
      } else {
        this.whether = false;
      }
    },
    handleClick(tab, event) {
      console.log(tab, event);
      if (tab.name == "second") {
        // 触发‘配置管理’事件
        this.second();
      } else if (tab.name == "first") {
        // 触发‘用户管理’事件
        this.first();
      } else {
        this.third();
      }
    },
    changeImg(index) {
      console.log(index);
    },
    goCart() {
      this.$router.push({
        path: "/Cart",
        name: "Cart",
        params: {
          goodsID: this.goodsdetail.goodsID,
          goodsSrc: this.goodsdetail.src1,
          goodsprice2: this.goodsdetail.goodsprice2
        }
      });
    },
    goCartTest() {
      this.$router.push({
        path: "/CartTest",
        name: "CartTest",
        params: {
          goodsID: this.goodsdetail.goodsID,
          goodsSrc: this.goodsdetail.src1,
          goodsprice2: this.goodsdetail.goodsprice2
        }
      });
    },
    second() {
      this.$refs["gotopl"].scrollIntoView(true);
      console.log("跳转评论");
    },
    first() {
      this.$refs["gotoxq"].scrollIntoView(true);
      console.log("跳转详情");
    },
    third() {
      this.$refs["gotobz"].scrollIntoView(true);
      console.log("跳转保障");
    },
    fixedActiveBtn() {
      var scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      scrollTop >= 600 ? (this.fixed = true) : (this.fixed = false);
    },
    showedActiveBtn() {
      var scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      scrollTop >= 600 ? (this.showed = true) : (this.shoewd = false);
      if(scrollTop>=600){
        this.isShow=true;
      }else{
        this.isShow=false;
      }
    }
  },
  created() {
    this.$axios
      .get("detail", { goodsID: 2 })
      .then(res => {
        this.goodsdetail = res.data.data[0];
        this.loading = false;
      })
      .catch(err => {
        return err;
      });
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
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
    window.addEventListener("scroll", this.fixedActiveBtn);
    window.addEventListener("scroll", this.showedActiveBtn);

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
  width: 71px;
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

.goodsInf {
  height: 30px;
  line-height: 30px;
  border-bottom: 1px solid gray;
}
.el-tabs .el-tab-pane {
  color: red;
  background: red;
}
.introduce {
  margin: 20px 10px;
  font-size: 20px;
}
.introduce p {
  height: 25px;
  line-height: 25px;
}
.introduce p span {
  display: inline-block;
  width: 45%;
}

.fixedBtn {
  position: fixed;
  background: #fafafa;
  top: 0px;
  left: 385px;
  z-index: 200;
  width: 868px;
}
.shop-header-but {
  overflow: hidden;
  margin-left: 287px;
  /* display: none; */
}
.shop-header-but .sell-val {
  padding: 0 10px;
  line-height: 50px;
  margin-left: 10px;
  font-size: 24px;
  font-weight: 700;
  color: #e70000;
  float: left;
}
.shop-header-but a {
  height: 50px;
  line-height: 50px;
  padding: 0 15px;
  display: inline-block;
  background-color: #ff8125;
  color: #fff;
  text-align: center;
  float: left;
}
.fixedtabs{
  overflow: hidden;
}
.fixedtabs>div{
  float: left;
}
</style>
