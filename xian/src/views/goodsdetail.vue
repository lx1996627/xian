<template>
  <div class="goodsdetails">
    <el-row>
      <el-col :span="12" style="width:470px">
        <!-- <div class="grid-content bg-purple gl470" style="border:1px solid #dcdcdc">
          <img src="{{src[1].url}}" style="width:100%;" alt="详情页大图" />
        </div>-->
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
              <h1>{{goodsdetail.goodsname}}</h1>
            </el-form-item>
            <el-form-item>
              <h1>{{goodsdetail.goodsprice}}</h1>
            </el-form-item>
            <el-form-item>
              <span>{{goodsdetail.goodsinf}}</span>
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
            <el-form-item>
              <el-button>立即抢购</el-button>
              <el-button>加入购物车</el-button>
            </el-form-item>
          </el-form>
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
        goodsprice: 249,
        goodsinf:
          "主花材玫瑰花 桔梗 22枝绿植工艺鲜花(鲜切花)花束辅材0.3扎小雏菊，0.2扎栀子叶，0.2扎水晶草花束包装白色雪梨纸5张，黑白竖条纹蝴蝶结",
        tag: ["玫瑰", "鲜花", "浓情", "粉色"]
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
      num: 1
    };
  },
  components: {},
  methods: {
    handleChange(value) {
      console.log(value);
    },
    handleClick(tab, event) {
      console.log(tab, event);
    }
  },
  created() {
    var str = location.href;
    var num = str.indexOf("=");
    str = str.substr(num + 1);
    str = Number(str);
    this.axios
      .post("/pay/xiangqing", {
        payId: str
      })
      .then(res => {
        console.log(res.data);
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
  }
};
</script>

<style>
@import "../assets/css/normalize.css";
.goodsdetails {
  width: 1200px;
  margin: 0 100px;
  vertical-align: middle;
}

.gr670 {
  width: 670px;
  height: 900px;
  border: 1px solid black;
}
.gr670-tag > div {
  width: 80px;
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

.goods-small .el-col img {
  border: black 1px solid;
}
</style>
