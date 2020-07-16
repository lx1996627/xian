<template>
  <div>
    <div class="wrapper">
      <div class="quickchoice colorF bgGreen">
        <div class="upper colorF bgGreen">快捷选购</div>
        <div class="lower"></div>
      </div>
      <div
        class="navitem"
        v-for="(item, index) in menuList[hoverIndex]"
        :key="item.id"
      >
        <div
          class="title"
          :style="{ color: fontColor[index], backgroundColor: bgColor[index] }"
        >
          {{ item.authName }}
        </div>
        <div class="subtile">
          <ul v-for="subItem in item.children" :key="subItem.id">
            <a href>
              <li
                class="sublist"
                :style="{
                  color: fontColor[index],
                  backgroundColor: bgColor[index],
                }"
              >
                {{ subItem.authName }}
              </li>
            </a>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "vueName",
  data() {
    return {
      msg: "Welcome to subNav",
      //背景色和字体色
      bgColor: ["#E6F2E6", "#FAF0E3", "#F1F6F9", "#F7F7F7", "#E6F2E6"],
      fontColor: ["#7EA175", "#9D7D52", "#5B7D91", "#5B7D91", "#75A074"],
      //需要渲染的列表 动态赋值
      menuList: {
        //鲜花的菜单数据
        freshmenus: [
          {
            id: 101,
            authName: "鲜花用途",
            path: "",
            children: [
              {
                id: 111,
                authName: "爱情鲜花",
                path: "/sidebar",
                children: [],
              },
              {
                id: 112,
                authName: "生日鲜花",
                path: "/sidebar",
                children: [],
              },
              {
                id: 113,
                authName: "友情鲜花",
                path: "/sidebar",
                children: [],
              },
              {
                id: 114,
                authName: "周年纪念",
                path: "/sidebar",
                children: [],
              },
            ],
          },
          {
            id: 102,
            authName: "鲜花花材",
            path: "",
            children: [
              {
                id: 121,
                authName: "玫瑰花",
                path: "/flowermaterial",
                children: [],
              },
              {
                id: 122,
                authName: "康乃馨",
                path: "/flowermaterial",
                children: [],
              },
              {
                id: 123,
                authName: "百合花",
                path: "/flowermaterial",
                children: [],
              },
              {
                id: 124,
                authName: "向日葵",
                path: "/flowermaterial",
                children: [],
              },
            ],
          },
          {
            id: 103,
            authName: "鲜花类别",
            path: "",
            children: [
              {
                id: 131,
                authName: "日常花束",
                path: "/flowertype",
                children: [],
              },
              {
                id: 132,
                authName: "创意花盒",
                path: "/flowertype",
                children: [],
              },
              {
                id: 133,
                authName: "韩式花束",
                path: "/flowertype",
                children: [],
              },
              {
                id: 134,
                authName: "手提花篮",
                path: "/flowertype",
                children: [],
              },
            ],
          },
          {
            id: 104,
            authName: "价格筛选",
            path: "",
            children: [
              {
                id: 141,
                authName: "150元以内",
                path: "/flowerprice",
                children: [],
              },
              {
                id: 142,
                authName: "150-199元",
                path: "/flowerprice",
                children: [],
              },
              {
                id: 143,
                authName: "200-249元",
                path: "/flowerprice",
                children: [],
              },
              {
                id: 144,
                authName: "250-399元",
                path: "/flowerprice",
                children: [],
              },
            ],
          },
        ],

        //永生花的菜单数据
        drymenus: [
          {
            id: 101,
            authName: "永生花类别",
            path: "",
            children: [
              {
                id: 111,
                authName: "经典花盒",
                path: "/dryFlowerCategory",
                children: [],
              },
              {
                id: 112,
                authName: "永生瓶花",
                path: "/dryFlowerCategory",
                children: [],
              },
              {
                id: 113,
                authName: "巨型玫瑰",
                path: "/dryFlowerCategory",
                children: [],
              },
              {
                id: 114,
                authName: "特色永生花",
                path: "/dryFlowerCategory",
                children: [],
              },
              {
                id: 115,
                authName: "永生花公仔",
                path: "/dryFlowerCategory",
                children: [],
              },
            ],
          },
          {
            id: 102,
            authName: "永生花用途",
            path: "",
            children: [
              {
                id: 121,
                authName: "送恋人爱人",
                path: "/dryFlowerUsage",
                children: [],
              },
              {
                id: 122,
                authName: "送父母长辈",
                path: "/dryFlowerUsage",
                children: [],
              },
              {
                id: 123,
                authName: "送朋友同事",
                path: "/dryFlowerUsage",
                children: [],
              },
            ],
          },

          {
            id: 103,
            authName: "价格筛选",
            path: "",
            children: [
              {
                id: 131,
                authName: "100-199元",
                path: "/dryFlowerPrice",
                children: [],
              },
              {
                id: 132,
                authName: "200-299元",
                path: "/dryFlowerPrice",
                children: [],
              },
              {
                id: 133,
                authName: "300-399元",
                path: "/dryFlowerPrice",
                children: [],
              },
              {
                id: 134,
                authName: "400-499元",
                path: "/dryFlowerPrice",
                children: [],
              },
              {
                id: 135,
                authName: "500-599元",
                path: "/dryFlowerPrice",
                children: [],
              },
              {
                id: 136,
                authName: "600-699元",
                path: "/dryFlowerPrice",
                children: [],
              },
              {
                id: 137,
                authName: "700元以上",
                path: "/dryFlowerPrice",
                children: [],
              },
            ],
          },
        ],
        //礼品的菜单数据
        giftmenus: [
          {
            id: 101,
            authName: "礼品类别",
            path: "",
            children: [
              {
                id: 111,
                authName: "首饰",
                path: "/giftCategory",
                children: [],
              },
              {
                id: 112,
                authName: "音乐盒",
                path: "/giftCategory",
                children: [],
              },
              {
                id: 113,
                authName: "香薰",
                path: "/giftCategory",
                children: [],
              },
              {
                id: 114,
                authName: "公仔",
                path: "/giftCategory",
                children: [],
              },
              {
                id: 115,
                authName: "创意摆件",
                path: "/giftCategory",
                children: [],
              },
              {
                id: 116,
                authName: "巧克力",
                path: "/giftCategory",
                children: [],
              },
              {
                id: 117,
                authName: "灯饰",
                path: "/giftCategory",
                children: [],
              },
              {
                id: 118,
                authName: "水晶球",
                path: "/giftCategory",
                children: [],
              },
              {
                id: 119,
                authName: "水杯",
                path: "/giftCategory",
                children: [],
              },
            ],
          },
          {
            id: 102,
            authName: "礼品用途",
            path: "",
            children: [
              {
                id: 121,
                authName: "生日礼品",
                path: "/giftUsage",
                children: [],
              },
              {
                id: 122,
                authName: "约会礼品",
                path: "/giftUsage",
                children: [],
              },
              {
                id: 123,
                authName: "结婚礼品",
                path: "/giftUsage",
                children: [],
              },
              {
                id: 124,
                authName: "祝福礼品",
                path: "/giftUsage",
                children: [],
              },
              {
                id: 125,
                authName: "拜访礼品",
                path: "/giftUsage",
                children: [],
              },
              {
                id: 126,
                authName: "纪念日礼品",
                path: "/giftUsage",
                children: [],
              },
              {
                id: 127,
                authName: "乔迁礼品",
                path: "/giftUsage",
                children: [],
              },
              {
                id: 128,
                authName: "家居礼品",
                path: "/giftUsage",
                children: [],
              },
            ],
          },
          {
            id: 103,
            authName: "收礼对象",
            path: "",
            children: [
              {
                id: 131,
                authName: "送恋人",
                path: "/giftTo",
                children: [],
              },
              {
                id: 132,
                authName: "送朋友",
                path: "/giftTo",
                children: [],
              },
              {
                id: 133,
                authName: "送客户",
                path: "/giftTo",
                children: [],
              },
              {
                id: 134,
                authName: "送老师",
                path: "/giftTo",
                children: [],
              },
              {
                id: 135,
                authName: "送小孩",
                path: "/giftTo",
                children: [],
              },
              {
                id: 136,
                authName: "送领导",
                path: "/giftTo",
                children: [],
              },
              {
                id: 137,
                authName: "送长辈",
                path: "/giftTo",
                children: [],
              },
            ],
          },
          {
            id: 104,
            authName: "价格筛选",
            path: "",
            children: [
              {
                id: 141,
                authName: "100-199元",
                path: "/giftPrice",
                children: [],
              },
              {
                id: 142,
                authName: "200-299元",
                path: "/giftPrice",
                children: [],
              },
              {
                id: 143,
                authName: "300-399元",
                path: "/giftPrice",
                children: [],
              },
              {
                id: 144,
                authName: "400-499元",
                path: "/giftPrice",
                children: [],
              },
              {
                id: 145,
                authName: "500-599元",
                path: "/giftPrice",
                children: [],
              },
              {
                id: 146,
                authName: "600-699元",
                path: "/giftPrice",
                children: [],
              },
              {
                id: 147,
                authName: "700元以上",
                path: "/giftPrice",
                children: [],
              },
            ],
          },
        ],
      },
      currentMenu: [],
    };
  },
  props: {
    hoverIndex: {
      type: String,
      default: "freshmenus",
    },
  },
  methods: {
    initMenu() {
      // this.currentMenu = this.menuList.freshmenus;
    },
  },
  created() {
    //需要渲染的列表 动态赋值 初始值默认为鲜花的
    this.initMenu();
  },
};
</script>

<style lang="less" scoped>
.wrapper {
  width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: start;
  padding: 10px 0;
  background-color: rgba(250, 250, 250, 0.2);
}
.quickchoice {
  box-sizing: border-box;
  // padding: 10px 10px;
  width: 150px;
  height: 60px;

  .upper {
    font-size: 24px;
    line-height: 60px;
    text-align: center;
    font-weight: 700;
  }

  .lower {
    font-size: 12px;
    font-weight: 700;
  }
}
// .navitem {
// display: flex;
// width: 200px;
// height: 200px;
// margin-left: 50px;
// }
.title {
  width: 190px;
  height: 60px;
  margin-left: 25px;
  font-size: 16px;
  font-weight: 700;
  line-height: 60px;
  text-align: center;
  margin-bottom: 10px;
}
.subtile {
  width: 190px;
  margin-left: 25px;
  // height: 100px;
  // margin-left: 25px;
  // padding: 40px 0px;
  font-size: 16px;
  line-height: 25px;
  font-weight: 400;

  li {
    text-align: center;
  }
}
</style>
