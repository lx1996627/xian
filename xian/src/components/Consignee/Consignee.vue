<template>
  <div class="consignee">
    <div class="add-address">
      <div @click="addAddress">新增收获地址</div>
      <p>您已创建 {{addressList.length}} 个收货地址，最多可建 20 个</p>
    </div>
    <div>
      <el-dialog :title="handleText" :visible.sync="dialogFormVisible">
        <el-form ref="form" :model="form" label-width="100px">
          <el-form-item label="收货人姓名">
            <el-input v-model="form.name" placeholder="请输入收货人姓名"></el-input>
          </el-form-item>
          <el-form-item label="收货人电话">
            <el-input v-model="form.telphone" placeholder="请输入收货人电话"></el-input>
          </el-form-item>
          <el-form-item label="配送地区">
            <v-distpicker
              :province="user.xtrysf"
              :city="user.xtrycs"
              :area="user.area"
              @province="onChangeProvince"
              @city="onChangeCity"
              @area="onChangeArea"
              @selected="onSelected"
            ></v-distpicker>
          </el-form-item>
          <el-form-item label="配送地址">
            <el-input v-model="form.address" placeholder="请输入配送地址"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="submitCancel">取 消</el-button>
          <el-button type="primary" @click="submitSure">确 定</el-button>
        </div>
      </el-dialog>
    </div>
    <div class="consignee-portion" v-for="(item,index) in addressList" :key="index">
      <div class="portion-item">
        <div class="top">
          <p>{{item.Consignee}}</p>
          <div>
            <span @click="editAddress(item.AddressId,item)">编辑</span> |
            <span @click="delAddress(item.AddressId)">删除</span>
          </div>
        </div>
        <div class="detail">
          <label for>收货人：{{item.Consignee}}</label>
        </div>
        <div class="detail">
          <label for>所在地区：</label>
          {{item.Province}}>{{item.City}}>{{item.Area}}
        </div>
        <div class="detail">
          <label for>地址：</label>
          {{item.Street}}
        </div>
        <div class="detail">
          <label for>电话:</label>
          {{item.Tel}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Message, MessageBox } from "element-ui";
import VDistpicker from "v-distpicker";

export default {
  name: "consignee",
  components: { VDistpicker },
  data() {
    return {
      id: "",
      user: {
        xtrysf: ""
      },
      addressList: [],
      dialogFormVisible: false,
      form: {
        name: "",
        telphone: "",
        address: "",
        cityValue: ""
      },
      handleText: "提示",
      editIndex: null
    };
  },
  created() {
    this.id = localStorage.getItem("userid");
  },
  mounted() {
    this.getAddress();
  },
  methods: {
    //获取全部地址信息
    getAddress() {
      this.axios({
        method: "GET",
        url: "/address/getDatas",
        params: {
          userid: this.id
        }
      })
        .then(res => {
          this.addressList = res.data.data;
        })
        .catch(err => {
          console.log(err);
        });
    },
    //添加地址
    addDizhi() {
      this.axios({
        method: "POST",
        url: "/address/addDatas",
        data: {
          userid: this.id,
          consignee: this.form.name,
          tel: this.form.telphone,
          province: this.form.cityValue.province.value,
          city: this.form.cityValue.city.value,
          area: this.form.cityValue.area.value,
          street: this.form.address
        }
      })
        .then(res => {
          console.log("新增学生信息成功", res.data);
          Message.success({
            message: "新增成功"
          });
          this.getAddress();
        })
        .catch(err => {
          console.log(err);
        });
    },
    editDizhi() {
      this.axios({
        method: "POST",
        url: "/address/editDatas",
        data: {
          addressid: this.editIndex,
          consignee: this.form.name,
          telphone: this.form.telphone,
          province: this.user.xtrysf,
          city: this.user.xtrycs,
          area: this.user.area,
          street: this.form.address
        }
      })
        .then(res => {
          console.log("编辑学生信息成功", res.data);
          Message.success({
            message: "编辑成功"
          });
          this.getAddress();
          console.log(res.data);
        })
        .catch(err => {
          console.log(err);
        });
    },
    //地区选择器
    onChangeProvince(data) {
      this.user.xtrysf = data.value;
    },
    onChangeCity(data) {
      this.user.xtrycs = data.value;
    },
    onChangeArea(data) {
      this.user.area = data.value;
    },
    onSelected(data) {
      this.form.cityValue = data;
      console.log(this.form.cityValue.province.value);
    },
    //添加
    addAddress() {
      this.dialogFormVisible = true;
      this.handleText = "添加地址信息";
      this.form.name = "";
      this.form.telphone = "";
      this.user.xtrysf = "";
      this.user.xtrycs = "";
      this.user.area = "";
      this.form.address = "";
    },
    //删除
    delAddress(i) {
      this.editIndex = i;
      MessageBox.confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          //发起请求
          this.axios({
            method: "POST",
            url: "/address/delDatas",
            data: {
              addressid: this.editIndex
            }
          })
            .then(res => {
              Message.success({
                message: "删除成功!"
              });
              console.log(res.data);
              this.getAddress();
              this.editIndex = "";
            })
            .catch(err => {
              console.log(err);
            });
        })
        .catch(() => {
          Message.info({
            message: "已取消删除"
          });
        });
    },
    //编辑
    editAddress(i, row) {
      this.editIndex = i;
      this.dialogFormVisible = true;
      this.handleText = "编辑地址信息";
      this.form.name = row.Consignee;
      this.form.telphone = row.Tel;
      this.user.xtrysf = row.Province;
      this.user.xtrycs = row.City;
      this.user.area = row.Area;
      this.form.address = row.Street;
    },
    submitCancel() {
      this.form.name = "";
      this.form.cityValue = "";
      this.form.address = "";
      this.form.tel = "";
      this.dialogFormVisible = false;
      Message.info({
        message: "取消"
      });
    },
    submitSure() {
      if (!this.form.name) return;
      if (!this.form.telphone) return;

      switch (this.handleText) {
        case "添加地址信息":
          console.log("新增");
          this.addDizhi();
          break;
        case "编辑地址信息":
          console.log("编辑");
          this.editDizhi();
          break;
      }
      this.dialogFormVisible = false;
      this.editIndex = null;
    }
  }
};
</script>

<style lang="less">
.consignee {
  padding-top: 50px;
  border: 1px solid rgb(229, 229, 229);
  .add-address {
    height: 150px;
    box-sizing: border-box;
    padding: 0 70px;
    display: flex;
    align-items: center;
    div,
    p {
      margin-right: 30px;
    }
    div {
      height: 50px;
      width: 200px;
      background-color: #303133;
      color: white;
      font-size: 15px;
      text-align: center;
      line-height: 50px;
    }
    div:hover {
      cursor: pointer;
    }
    .el-form {
      width: 500px;
      height: 500px;
      .el-form-item__label {
        width: 100px;
      }
    }
  }
  .consignee-portion {
    box-sizing: border-box;
    padding: 0 70px;
    .portion-item {
      border: 1px solid;
      margin-bottom: 20px;
      box-shadow: 0 0 15px #ddd;
      padding: 30px;
      .top {
        display: flex;
        justify-content: space-between;
        p {
          font-size: 20px;
        }
        span:hover {
          cursor: pointer;
          color: red;
        }
      }
      .detail {
        margin-top: 20px;
        label {
          display: inline-block;
        }
      }
    }
  }
}
</style>