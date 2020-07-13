<template>
  <div id="app">
    <h3>购物车</h3>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="name" label="商品名称" width="180"></el-table-column>
      <el-table-column prop="prcie" label="单价" width="180"></el-table-column>
      <el-table-column prop="num" label="数量">
        <template slot-scope="scope">
          <el-input-number
            v-model="scope.row.num"
            @change="handleChange"
            :min="1"
            :max="10"
            label="描述文字"
          ></el-input-number>
        </template>
      </el-table-column>
      <el-table-column prop="del" label="操作">X</el-table-column>
    </el-table>
    <div>
      <div>已选商品2件</div>
      <div>总计:￥296.00</div>
      <button>结算</button>
    </div>
    <!-- <el-input-number v-model="num" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number> -->
  </div>
</template>
 
<script>
export default {
  name: "",
  data() {
    return {
      // num: 1,
      tableData: [
        {
          name: "一心一意·11枝红玫瑰韩式花束",
          prcie: "158.00",
          num: 1
        }
      ]
    };
  },
  methods: {
    handleChange(value) {
      console.log(value);
    }
  }
};
</script>
 
<style scoped>
</style>