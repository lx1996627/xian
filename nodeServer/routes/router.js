const express = require('express'); //使用express提供的路由方法
const router = express.Router(); //调用express对象的路由方法来获取路由对象 Router大写

const userController = require('../controller/userController');
const menuController = require('../controller/menuController');
const navController = require('../controller/navController');

const detailController = require('../controller/detailController');
// 常见的4种请求 get post put delete 请求
//路由拦截请求，判断请求的类型 再进行任务分发

//=================================login模块=========================

//登陆验证
router.post("/login", userController.checkUserPost);
router.post('/checkAvailability', userController.userAvailable);
router.post('/regist', userController.regist)

//=================================左侧菜单栏模块=========================
//获取菜单栏数据
router.get('/freshmenus', menuController.getFreshMenus);
router.get('/drymenus', menuController.getDryMenus);
router.get('/gifthmenus', menuController.getGiftMenus);

//=================================页面渲染模块=========================
//获取菜单栏数据
// router.get('/freshUsage', menuController.getFreshFlowerUsage);
// router.get('/freshMaterial', menuController.getFreshFlowerMaterial);
// router.get('/freshType', menuController.getFreshFlowerType);
// router.get('/freshPrice', menuController.getFreshFlowerPrice);

// ==============================首页导航栏模块==========================
router.get('/sidebar', navController.getSideBar)

//=================================左侧菜单栏模块=========================
//获取菜单栏数据
router.get('/menus', menuController.getMenus);

//注销登陆
// router.get('/logout.do', userController.logout)

//=================================获取商品详情模块=========================
//获取商品详情数据
router.get('/detail', detailController.getGoodsdetail);
//加入购物车
router.get('/addCar', detailController.addCar);

module.exports = router;