const dbPool = require('../config/dbPoolConfig');

const menuController = {

    //获取菜单栏的数据
    getMenus(req, res) {
        // console.log('====================================');
        console.log("controller收到路由任务");
        // console.log('====================================');
        console.log(req.query)

        var menus = {
            data: [
            ],
            meta: {
                msg: '获取菜单列表成功',
                status: 200
            }
        }
        res.json(menus)
    }
}
module.exports = menuController;