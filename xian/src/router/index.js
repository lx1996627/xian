import Vue from "vue";
import VueRouter from "vue-router";
import home from "../components/home.vue";
import changepage from "../components/changepage/page.vue";
import goodsdetail from "../views/goodsdetail.vue";
import mainpage from "../components/mainpage.vue";
import footer from "../components/Footer/footer";
import ArticleComment from "../components/ArticleComment/ArticleComment";

Vue.use(VueRouter);

const routes = [
  {
    path: "/home",
    name: "home",
    component: home,
  },
  {
    path: "/mainpage",
    name: "mainpage",
    component: mainpage,
    // children: [
    //   { path: '/freshflower', component: freshflower },
    //   { path: '/dryflower', component: dryflower },
    //   { path: '/gift', component: gift },
    //   { path: '/weeklyflower', component: weeklyflower },
    //   { path: '/flowerlanguage', component: flowerlanguage },
    //   { path: '/grouppurchase', component: grouppurchase },
    //   { path: '/shoppingcart', component: shoppingcart },
    //   { path: '/loginpage', component: loginpage },
    // ]
  },
  {
    path: "/changepage",
    name: "changepage",
    component: changepage,
  },
  {
    path: "/goodsdetail",
    name: "goodsdetail",
    component: goodsdetail,
  },
  {
    path: "/footer",
    name: "footer",
    component: footer,
  },
  {
    path: "/ArticleComment",
    name: "ArticleComment",
    component: ArticleComment,
  },
  {
    path: "/Cart",
    name: "Cart",
    component: () => import("../components/Cart/cart"),
  },
  
  {
    path: "/VipPerson",
    name: "VipPerson",
    component: () => import("../views/VipPerson.vue"),
    meta: {
      // 路由元信息，可以自定义
      requireAuth: true,
    },
    children: [
      {
        path: "/",
        component: () => import("../components/PeopleHome/peoplehome.vue"),
        meta: {
          // 路由元信息，可以自定义
          requireAuth: true,
        },
      },
      {
        path: "PayAgain",
        component: () => import("../components/PayAgain/PayAgain.vue"),
        meta: {
          // 路由元信息，可以自定义
          requireAuth: true,
        },
      },
      {
        path: "MyOrder",
        component: () => import("../components/MyOrder/MyOrder.vue"),
        meta: {
          // 路由元信息，可以自定义
          requireAuth: true,
        },
      },
      {
        path: "coupon",
        component: () => import("../components/Coupon/coupon.vue"),
        meta: {
          // 路由元信息，可以自定义
          requireAuth: true,
        },
      },
      {
        path: "Consignee",
        component: () => import("../components/Consignee/Consignee.vue"),
        meta: {
          // 路由元信息，可以自定义
          requireAuth: true,
        },
      },
      {
        path: "changepwd",
        component: () => import("../components/ChangePwd/changepwd.vue"),
        meta: {
          // 路由元信息，可以自定义
          requireAuth: true,
        },
      },
      {
        path: "PersonalCen",
        component: () => import("../components/PersonalCen/PersonalCen.vue"),
        meta: {
          // 路由元信息，可以自定义
          requireAuth: true,
        },
      },
      {
        path: "MyCollect",
        component: () => import("../components/MyCollect/MyCollect.vue"),
        meta: {
          // 路由元信息，可以自定义
          requireAuth: true,
        },
      },
      {
        path: "MyAppraise",
        component: () => import("../components/MyAppraise/MyAppraise.vue"),
        meta: {
          // 路由元信息，可以自定义
          requireAuth: true,
        },
      },
    ],
  },
];

//挂载路由导航守卫
//要访问的路径，从哪个路径跳转过来，回调函数 next()放行  next(url)强制跳转
// router.beforeEach((to, from, next) => {
//   if (to.path === '/login') return next()
//   //获取token
//   let tokenStr = sessionStorage.getItem('token')
//   // 如果token是空值或者不存在
//   if (!tokenStr) return next('/login')
//   //否则就是有token 就放行
//   next()
// })

const router = new VueRouter({
  routes,
});

export default router;
