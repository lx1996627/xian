<<<<<<< HEAD
import Vue from 'vue'
import Router from 'vue-router'

//引入子路由
import product from './product'


=======
import Vue from "vue";
import Router from "vue-router";
import HelloWorld from "@/components/HelloWorld";
import footer from "../components/Footer/footer";
>>>>>>> e0c7fc10e34252d6240c562cb9b8b93da6c685cf

Vue.use(Router);

export default new Router({
  routes: [
<<<<<<< HEAD
    ...product
  ]
})
=======
    {
      path: "/",
      name: "HelloWorld",
      component: HelloWorld
    },
    {
      path: "/footer",
      name: "footer",
      component: footer
    }
  ]
});
>>>>>>> e0c7fc10e34252d6240c562cb9b8b93da6c685cf
