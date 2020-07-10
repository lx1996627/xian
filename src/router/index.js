import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/home.vue'
import Search from "../components/search.vue"
import changepage from "../components/changepage/page.vue"
import goodsdetail from '../views/goodsdetail.vue'
import Header from '../components/header.vue'



Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/header',
    name: 'Header',
    component: Header
  },
  {
    path: '/search',
    name: 'Search',
    component: Search
  },
  {
    path: '/changepage',
    name: 'changepage',
    component: changepage
  },
  {
    path: '/goodsdetail',
    name: 'goodsdetail',
    component: goodsdetail
  },

]

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
  routes
})

export default router
