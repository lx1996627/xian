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

    <div>
      <el-card>
        <p>头像添加</p>
        <el-upload
          class="avatar-uploader"
          action="这里填入后台的接口地址"
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
          :on-remove="handleRemove"
          :before-upload="beforeAvatarUpload"
        >
          <img v-if="imageUrl" :src="imageUrl" class="avatar" />
          <span v-if="imageUrl" class="el-upload-action" @click.stop="handleRemove()">
            <i class="el-icon-delete"></i>
          </span>
          <i v-else class="el-icon-upload2 avatar-uploader-icon" stop></i>
        </el-upload>
      </el-card>
    </div>
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
      ],
      imageUrl: ""
    };
  },
  methods: {
    handleChange(value) {
      console.log(value);
    }, // 移除图片
    handleRemove() {
      this.imageUrl = "";
    },
    // 上传成功回调
    handleAvatarSuccess(res) {
      this.imageUrl = res.data.url;
    },
    // 上传前格式和图片大小限制
    beforeAvatarUpload(file) {
      const type =
        file.type === "image/jpeg" ||
        "image/jpg" ||
        "image/webp" ||
        "image/png";
      const isLt2M = file.size / 1024 / 1024 < 2;
      if (!type) {
        this.$message.error("图片格式不正确!(只能包含jpg，png，webp，JPEG)");
      }
      if (!isLt2M) {
        this.$message.error("上传图片大小不能超过 2MB!");
      }
      return type && isLt2M;
    }
  }
};
</script>
 
<style scoped lang='less'>
.avatar-uploader {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  // background: url("../assets/img/defaultHead.jpg") no-repeat;
  background-size: 100% 100%;
}
.avatar-uploader-icon {
  font-size: 0;
  color: #fff;
  width: 120px;
  height: 120px;
  line-height: 120px;
  text-align: center;
}
.avatar-uploader-icon:hover {
  font-size: 28px;
  background-color: rgba(0, 0, 0, 0.3);
}
.avatar {
  position: relative;
  width: 120px;
  height: 120px;
  display: block;
}
.el-upload-action {
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100%;
  height: 100%;
  font-size: 0;
  color: #fff;
  text-align: center;
  line-height: 120px;
}
.el-upload-action:hover {
  font-size: 20px;
  background-color: #000;
  background-color: rgba(0, 0, 0, 0.3);
}
</style>