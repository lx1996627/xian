<template>
  <div class="member-center">
    <vipheader></vipheader>
    <div class="member-body">
      <div class="bread-nav">
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/home' }">鲜家首页</el-breadcrumb-item>
          <el-breadcrumb-item>活动管理</el-breadcrumb-item>
          <el-breadcrumb-item>活动列表</el-breadcrumb-item>
          <el-breadcrumb-item>活动详情</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <el-row class="tac">
        <el-col :span="5">
          <el-menu default-active="2" class="el-menu-vertical-demo">
            <el-menu-item index="1">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>
                  <router-link to="/VipPerson">会员中心</router-link>
                </span>
              </template>
            </el-menu-item>

            <!-- 订单信息 -->
            <el-submenu index="2">
              <template slot="title">
                <i class="el-icon-s-order"></i>
                <span slot="title">订单信息</span>
              </template>
              <el-menu-item index="2-2">
                <template slot="title">
                  <router-link to="/VipPerson/MyOrder">我的订单</router-link>
                </template>
              </el-menu-item>
              <el-menu-item index="2-3">
                <router-link to="/VipPerson/MyCollect">我的收藏</router-link>
              </el-menu-item>
              <el-menu-item index="2-4">
                <router-link to="/VipPerson/MyAppraise">我的评价</router-link>
              </el-menu-item>
            </el-submenu>

            <!-- 账户设置 -->
            <el-submenu index="3">
              <template slot="title">
                <i class="el-icon-user-solid"></i>
                <span slot="title">账户设置</span>
              </template>
              <el-menu-item index="3-2">
                <template slot="title">
                  <router-link to="/VipPerson/PersonalCen">个人信息</router-link>
                </template>
              </el-menu-item>
              <el-menu-item index="3-3">
                <template slot="title">
                  <router-link to="/VipPerson/Consignee">常用收货人</router-link>
                </template>
              </el-menu-item>
              <el-menu-item index="3-4">
                <template slot="title">
                  <router-link to="/VipPerson/changepwd">修改密码</router-link>
                </template>
              </el-menu-item>
            </el-submenu>

            <!-- 付款设置 -->
            <el-submenu index="4">
              <template slot="title">
                <i class="el-icon-s-ticket"></i>
                <span slot="title">付款设置</span>
              </template>
              <el-menu-item index="4-2">
                <template slot="title">
                  <router-link to="/VipPerson/coupon">我的优惠券</router-link>
                </template>
              </el-menu-item>
              <el-menu-item index="4-3">
                <template slot="title">
                  <router-link to="/VipPerson/PayAgain">在线补款</router-link>
                </template>
              </el-menu-item>
            </el-submenu>

            <!-- 客户服务 -->
            <el-submenu index="5">
              <template slot="title">
                <i class="el-icon-s-custom"></i>
                <span slot="title">客户服务</span>
              </template>
              <el-menu-item index="5-2">
                <template slot="title">客户留言</template>
              </el-menu-item>
              <el-menu-item index="5-3">
                <template slot="title">举报留言</template>
              </el-menu-item>
              <el-menu-item index="5-4">
                <template slot="title">在线客服</template>
              </el-menu-item>
            </el-submenu>
            <!-- <el-menu-item index="6" @click="quit">
              <i class="el-icon-user-solid"></i>
              <span>注销账号</span>
            </el-menu-item>-->
          </el-menu>
        </el-col>
        <el-col :span="1" class="mid"></el-col>
        <el-col :span="18" class="right">
          <router-view />
        </el-col>
      </el-row>
    </div>
    <foter />
  </div>
</template>

<script>
import foter from "../components/Footer/footer";
import vipheader from "../views/vipheader";
// import { mapState, mapMutations } from "vuex";

export default {
  name: "member-center",
  components: {
    // Nav,
    foter,
    vipheader
  }
  //   computed: {
  //     ...mapState(["user"])
  //   },
  //   methods: {
  //     ...mapMutations(["quit"])
  //   }
};
</script>

<style lang="less">
.member-center {
  a {
    text-decoration: none;
    color: black;
  }
  width: 100%;
  .member-body {
    width: 1200px;
    margin: 0 auto;
    .bread-nav {
      margin-top: 30px;
    }
    .tac {
      margin: 50px 0;
      .el-menu-vertical-demo {
        border: 1px solid rgb(229, 229, 229);
      }
      .el-submenu__title {
        padding: 0 20px !important;
      }
      .mid {
        height: 500px;
      }
      li {
        text-align: center;
      }
    }
  }
}
</style>