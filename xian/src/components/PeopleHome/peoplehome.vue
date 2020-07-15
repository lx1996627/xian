<template>
  <div class="peoplehome">
    <div class="top">
      <div class="left">
        <el-upload
          class="avatar-uploader"
          action="https://jsonplaceholder.typicode.com/posts/"
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
          :on-remove="handleRemove"
          :before-upload="beforeAvatarUpload"
        >
          <!-- action填写的是后台的接口地址 -->
          <img v-if="imageUrl" :src="imageUrl" style="width:150px;height:150px;border-radius:50%" />
          <el-button size="small" type="primary" class="uploadBtn">头像上传</el-button>
        </el-upload>
        <div class="self-info">
          <div class="vip-level">vip0</div>
          <p>余额：0.00</p>
          <p>积分：0</p>
          <p>优惠卷：0 张</p>
        </div>
      </div>
      <div class="right">
        <div>
          <img src="../../assets/img/dfk.png" alt />
          <p>
            <a href>待付款</a>
          </p>
        </div>
        <div>
          <img src="../../assets/img/jrps.png" alt />
          <p>
            <a href>今日配送</a>
          </p>
        </div>
        <div>
          <img src="../../assets/img/dpj.png" alt />
          <p>
            <a href>待评价</a>
          </p>
        </div>
      </div>
    </div>
    <hr />
    <div class="mycollect">
      <h3>我的收藏</h3>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imageUrl: ""
    };
  },
  methods: {
    // 移除图片
    handleRemove() {
      this.imageUrl = "";
    },

    // 上传成功回调
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
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

<style lang="less">
.peoplehome {
  padding-top: 50px;
  border: 1px solid rgb(229, 229, 229);
  .top {
    display: flex;
    justify-content: space-around;
    .left {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 300px;
      overflow: hidden;
      .avatar-uploader {
        height: 200px;
      }
      .avatar-uploader .el-upload {
        border: 1px dashed #d9d9d9;
        border-radius: 6px;
        cursor: pointer;
        position: relative;
        width: 150px;
        height: 150px;
        border-radius: 100px;
        border: 1px solid;
        .uploadBtn {
          position: absolute;
          bottom: -25%;
          left: 25%;
        }
      }
      .self-info {
        div,
        p {
          margin: 10px 0;
        }
        .vip-level {
          width: 50px;
          height: 30px;
          border-radius: 15px;
          background-color: green;
          color: white;
          text-align: center;
          line-height: 30px;
        }
      }
    }
    .right {
      padding-top: 50px;
      width: 300px;
      display: flex;
      justify-content: space-between;
      div {
        display: inline-block;
        text-align: center;
      }
      a {
        text-decoration: none;
        color: black;
      }
      a:hover {
        color: red;
      }
    }
  }
  hr {
    width: 90%;
    margin: 20px auto 0;
    border-color: rgb(229, 229, 229);
  }
  .mycollect {
    width: 100%;
    padding: 10px 44px;
    height: 200px;
    box-sizing: border-box;
    h3 {
      font-size: 18px;
      color: #333;
      font-weight: normal;
      height: 40px;
      line-height: 40px;
    }
  }
}
</style>