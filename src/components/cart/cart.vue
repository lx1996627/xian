<template>
<div>
  <h1>已选菜品</h1>
  <el-table
    :data="cartProducts"
    style="width: 100%"
    empty-text="您的购物车空空如也.......">
    <el-table-column
      prop="id"
      label="ID"
      width="180"
      align="center"
    >
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
      prop="num"
      label="数量"
      width="180"
      align="center">
    </el-table-column>
    <el-table-column
      label="操作"
      width="180"
      align="center">
      <template slot-scope="scope">
        <el-button @click="delProduct(scope.row)" type="text" size="small">删除</el-button>

      </template>
    </el-table-column>
  </el-table>
</div>
</template>

<script>
    export default {
        name: "cart",
      data(){
          return {
            cartProducts:[
              {
                id:11,
                name:"鱼香肉丝",
                price:12,
                num:1
              }
            ]
          }
      },
      methods:{
        delProduct(){}
      }
    }
</script>

<style scoped>

</style>
