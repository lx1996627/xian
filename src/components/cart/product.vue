<template>
  <div>
    <h1>product-商品信息</h1>
    <el-table
      :data="shop_list"
      style="width: 100%">
      <el-table-column
        prop="id"
        label="ID"
        width="180"
        align="center">
      </el-table-column>
      <el-table-column
        prop="name"
        label="菜名"
        align="center">
      </el-table-column>
      <el-table-column
        prop="price"
        label="价格"
        width="180"
        align="center">
      </el-table-column>
      <el-table-column
        label="操作"
        width="180"
        align="center">
        <template slot-scope="scope">
          <el-button @click="addToCart(scope.row)" type="text" size="small">添加购物车</el-button>

        </template>
      </el-table-column>
    </el-table>
  </div>

</template>

<script>
    export default {
        name: "product",
      data(){
        return {
          shop_list:[
            {
              id:11,
              name:"鱼香肉丝",
              price:12
            },
            {
              id:12,
              name:"糖醋排骨",
              price:20
            },
            {
              id:16,
              name:"红烧肉",
              price:16
            },
            {
              id:18,
              name:"烧白",
              price:12
            },
            {
              id:20,
              name:"珍珠米饭",
              price:2
            }
          ]
        }
      },
      methods:{
        addToCart(){}
      }
    }
</script>

<style scoped>

</style>
