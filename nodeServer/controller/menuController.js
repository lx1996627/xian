const dbPool = require('../config/dbPoolConfig');

const menuController = {

<<<<<<< HEAD
    //获取鲜花菜单栏的数据
    getFreshMenus(req, res) {
        // console.log('====================================');
        console.log("controller收到获取鲜花菜单栏路由任务");
        // console.log('====================================');
        console.log(req.query)

        var freshmenus = {
            data: [
                {
                    id: 101,
                    authName: "鲜花用途",
                    path: "",
                    children: [
                        {
                            id: 111,
                            authName: "爱情鲜花",
                            path: "/freshFlowerUsage",
                            children: []
                        },
                        {
                            id: 112,
                            authName: "生日鲜花",
                            path: "/freshFlowerUsage",
                            children: []
                        },
                        {
                            id: 113,
                            authName: "友情鲜花",
                            path: "/freshFlowerUsage",
                            children: []
                        },
                        {
                            id: 114,
                            authName: "周年纪念",
                            path: "/freshFlowerUsage",
                            children: []
                        },
                        {
                            id: 115,
                            authName: "婚庆鲜花",
                            path: "/freshFlowerUsage",
                            children: []
                        },
                        {
                            id: 116,
                            authName: "祝贺鲜花",
                            path: "/freshFlowerUsage",
                            children: []
                        }
                    ]
                },
                {
                    id: 102,
                    authName: "鲜花花材",
                    path: "",
                    children: [
                        {
                            id: 121,
                            authName: "玫瑰花",
                            path: "/freshFlowerMaterial",
                            children: []
                        },
                        {
                            id: 122,
                            authName: "康乃馨",
                            path: "/freshFlowerMaterial",
                            children: []
                        },
                        {
                            id: 123,
                            authName: "百合花",
                            path: "/freshFlowerMaterial",
                            children: []
                        },
                        {
                            id: 124,
                            authName: "向日葵",
                            path: "/freshFlowerMaterial",
                            children: []
                        },
                        {
                            id: 125,
                            authName: "紫罗兰",
                            path: "/freshFlowerMaterial",
                            children: []
                        },
                        {
                            id: 126,
                            authName: "满天星",
                            path: "/freshFlowerMaterial",
                            children: []
                        }
                    ]
                },
                {
                    id: 103,
                    authName: "鲜花类别",
                    path: "",
                    children: [
                        {
                            id: 131,
                            authName: "日常花束",
                            path: "/freshFlowerType",
                            children: []
                        },
                        {
                            id: 132,
                            authName: "创意花盒",
                            path: "/freshFlowerType",
                            children: []
                        },
                        {
                            id: 133,
                            authName: "韩式花束",
                            path: "/freshFlowerType",
                            children: []
                        },
                        {
                            id: 134,
                            authName: "手提花篮",
                            path: "/freshFlowerType",
                            children: []
                        },
                        {
                            id: 135,
                            authName: "开业花篮",
                            path: "/freshFlowerType",
                            children: []
                        },
                        {
                            id: 136,
                            authName: "会议桌花",
                            path: "/freshFlowerType",
                            children: []
                        }
                    ]
                },
                {
                    id: 104,
                    authName: "价格筛选",
                    path: "",
                    children: [
                        {
                            id: 141,
                            authName: "150元以内",
                            path: "/freshFlowerPrice",
                            children: []
                        },
                        {
                            id: 142,
                            authName: "150-199元",
                            path: "/freshFlowerPrice",
                            children: []
                        },
                        {
                            id: 143,
                            authName: "200-249元",
                            path: "/freshFlowerPrice",
                            children: []
                        },
                        {
                            id: 144,
                            authName: "250-399元",
                            path: "/freshFlowerPrice",
                            children: []
                        },
                        {
                            id: 145,
                            authName: "400-499元",
                            path: "/freshFlowerPrice",
                            children: []
                        },
                        {
                            id: 146,
                            authName: "500-599元",
                            path: "/freshFlowerPrice",
                            children: []
                        },
                        {
                            id: 147,
                            authName: "600-699元",
                            path: "/freshFlowerPrice",
                            children: []
                        },
                        {
                            id: 148,
                            authName: "700元以上",
                            path: "/freshFlowerPrice",
                            children: []
                        }
                    ]
                }
=======
    //获取菜单栏的数据
    getMenus(req, res) {
        // console.log('====================================');
        console.log("controller收到路由任务");
        // console.log('====================================');
        console.log(req.query)

        var menus = {
            data: [
>>>>>>> c851c4a371023da4bbfa6dc3f7ef616bfc0eca7e
            ],
            meta: {
                msg: '获取菜单列表成功',
                status: 200
            }
        }
<<<<<<< HEAD
        res.json(freshmenus)
    },

    //获取永生花菜单栏的数据
    getDryMenus(req, res) {
        // console.log('====================================');
        console.log("controller收到获取永生花菜单栏路由任务");
        // console.log('====================================');
        console.log(req.query)

        var drymenus = {
            data: [
                {
                    id: 101,
                    authName: "永生花类别",
                    path: "",
                    children: [
                        {
                            id: 111,
                            authName: "经典花盒",
                            path: "/dryFlowerCategory",
                            children: []
                        },
                        {
                            id: 112,
                            authName: "永生瓶花",
                            path: "/dryFlowerCategory",
                            children: []
                        },
                        {
                            id: 113,
                            authName: "巨型玫瑰",
                            path: "/dryFlowerCategory",
                            children: []
                        },
                        {
                            id: 114,
                            authName: "特色永生花",
                            path: "/dryFlowerCategory",
                            children: []
                        },
                        {
                            id: 115,
                            authName: "永生花公仔",
                            path: "/dryFlowerCategory",
                            children: []
                        }
                    ]
                },
                {
                    id: 102,
                    authName: "永生花用途",
                    path: "",
                    children: [
                        {
                            id: 121,
                            authName: "送恋人爱人",
                            path: "/dryFlowerUsage",
                            children: []
                        },
                        {
                            id: 122,
                            authName: "送父母长辈",
                            path: "/dryFlowerUsage",
                            children: []
                        },
                        {
                            id: 123,
                            authName: "送朋友同事",
                            path: "/dryFlowerUsage",
                            children: []
                        },
                    ]
                },

                {
                    id: 103,
                    authName: "价格筛选",
                    path: "",
                    children: [
                        {
                            id: 131,
                            authName: "100-199元",
                            path: "/dryFlowerPrice",
                            children: []
                        },
                        {
                            id: 132,
                            authName: "200-299元",
                            path: "/dryFlowerPrice",
                            children: []
                        },
                        {
                            id: 133,
                            authName: "300-399元",
                            path: "/dryFlowerPrice",
                            children: []
                        },
                        {
                            id: 134,
                            authName: "400-499元",
                            path: "/dryFlowerPrice",
                            children: []
                        },
                        {
                            id: 135,
                            authName: "500-599元",
                            path: "/dryFlowerPrice",
                            children: []
                        },
                        {
                            id: 136,
                            authName: "600-699元",
                            path: "/dryFlowerPrice",
                            children: []
                        },
                        {
                            id: 137,
                            authName: "700元以上",
                            path: "/dryFlowerPrice",
                            children: []
                        }
                    ]
                }
            ],
            meta: {
                msg: '获取菜单列表成功',
                status: 200
            }
        }
        res.json(drymenus)
    },

    //获取永生花菜单栏的数据
    getGiftMenus(req, res) {
        // console.log('====================================');
        console.log("controller收到获取礼品菜单栏路由任务");
        // console.log('====================================');
        console.log(req.query)

        var giftmenus = {
            data: [
                {
                    id: 101,
                    authName: "礼品类别",
                    path: "",
                    children: [
                        {
                            id: 111,
                            authName: "首饰",
                            path: "/giftCategory",
                            children: []
                        },
                        {
                            id: 112,
                            authName: "音乐盒",
                            path: "/giftCategory",
                            children: []
                        },
                        {
                            id: 113,
                            authName: "香薰",
                            path: "/giftCategory",
                            children: []
                        },
                        {
                            id: 114,
                            authName: "公仔",
                            path: "/giftCategory",
                            children: []
                        },
                        {
                            id: 115,
                            authName: "创意摆件",
                            path: "/giftCategory",
                            children: []
                        },
                        {
                            id: 116,
                            authName: "巧克力",
                            path: "/giftCategory",
                            children: []
                        },
                        {
                            id: 117,
                            authName: "灯饰",
                            path: "/giftCategory",
                            children: []
                        },
                        {
                            id: 118,
                            authName: "水晶球",
                            path: "/giftCategory",
                            children: []
                        },
                        {
                            id: 119,
                            authName: "水杯",
                            path: "/giftCategory",
                            children: []
                        }
                    ]
                },
                {
                    id: 102,
                    authName: "礼品用途",
                    path: "",
                    children: [
                        {
                            id: 121,
                            authName: "生日礼品",
                            path: "/giftUsage",
                            children: []
                        },
                        {
                            id: 122,
                            authName: "约会礼品",
                            path: "/giftUsage",
                            children: []
                        },
                        {
                            id: 123,
                            authName: "结婚礼品",
                            path: "/giftUsage",
                            children: []
                        },
                        {
                            id: 124,
                            authName: "祝福礼品",
                            path: "/giftUsage",
                            children: []
                        },
                        {
                            id: 125,
                            authName: "拜访礼品",
                            path: "/giftUsage",
                            children: []
                        },
                        {
                            id: 126,
                            authName: "纪念日礼品",
                            path: "/giftUsage",
                            children: []
                        },
                        {
                            id: 127,
                            authName: "乔迁礼品",
                            path: "/giftUsage",
                            children: []
                        },
                        {
                            id: 128,
                            authName: "家居礼品",
                            path: "/giftUsage",
                            children: []
                        },
                    ]
                },
                {
                    id: 103,
                    authName: "收礼对象",
                    path: "",
                    children: [
                        {
                            id: 131,
                            authName: "送恋人",
                            path: "/giftTo",
                            children: []
                        },
                        {
                            id: 132,
                            authName: "送朋友",
                            path: "/giftTo",
                            children: []
                        },
                        {
                            id: 133,
                            authName: "送客户",
                            path: "/giftTo",
                            children: []
                        },
                        {
                            id: 134,
                            authName: "送老师",
                            path: "/giftTo",
                            children: []
                        },
                        {
                            id: 135,
                            authName: "送小孩",
                            path: "/giftTo",
                            children: []
                        },
                        {
                            id: 136,
                            authName: "送领导",
                            path: "/giftTo",
                            children: []
                        },
                        {
                            id: 137,
                            authName: "送长辈",
                            path: "/giftTo",
                            children: []
                        },
                    ]
                },
                {
                    id: 104,
                    authName: "价格筛选",
                    path: "",
                    children: [
                        {
                            id: 141,
                            authName: "100-199元",
                            path: "/giftPrice",
                            children: []
                        },
                        {
                            id: 142,
                            authName: "200-299元",
                            path: "/giftPrice",
                            children: []
                        },
                        {
                            id: 143,
                            authName: "300-399元",
                            path: "/giftPrice",
                            children: []
                        },
                        {
                            id: 144,
                            authName: "400-499元",
                            path: "/giftPrice",
                            children: []
                        },
                        {
                            id: 145,
                            authName: "500-599元",
                            path: "/giftPrice",
                            children: []
                        },
                        {
                            id: 146,
                            authName: "600-699元",
                            path: "/giftPrice",
                            children: []
                        },
                        {
                            id: 147,
                            authName: "700元以上",
                            path: "/giftPrice",
                            children: []
                        }
                    ]
                }
            ],
            meta: {
                msg: '获取礼品菜单列表成功',
                status: 200
            }
        }
        res.json(giftmenus)
    }

=======
        res.json(menus)
    }
>>>>>>> c851c4a371023da4bbfa6dc3f7ef616bfc0eca7e
}
module.exports = menuController;