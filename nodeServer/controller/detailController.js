const dbPool = require('../config/dbPoolConfig');

const detailController = {

    //验证用户名和密码是否正确
    checkUserPost(req, res) {
        // console.log('====================================');
        console.log("controller收到路由任务");
        // console.log('====================================');
        console.log(req.body)
        var { username, password } = req.body;
        console.log(username);
        console.log(password);
        //var limitFlag = 0; //0代表无权登陆

        dbPool.connection("SELECT * FROM users WHERE userName=? AND userPassword=?", [username, password], (err, data) => {
            // console.log(err)
            // console.log(data)
            if (err || data.length <= 0) {
                console.log(err)
                res.json({
                    state: "0", //自定义状态码0：第1轮数据库查询出错
                    msg: '您的账号或者密码错误',
                    err
                })
            }

            if ((data != undefined) && (data.length > 0)) {
                //console.log(data[0]);  //注意查到的数据是保存在数组中，是对象数组格式Json

                //在session中保存存当前登陆者的名字
                //之前引入了session中间件，所以可以req.session
                req.session.user = username;   //自定义属性，登陆成功
                //token判断登陆状态
                var token = 'nocsdnc2132r2321312r434324r' //模拟token
                console.log('=================登陆成功===================');
                console.log('token:' + token);
                console.log(req.session.user);
                console.log('====================================');

                res.json({
                    state: "200", //自定义状态码 200:登陆成功
                    username,
                    msg: '登陆成功',
                    token
                })
            }
        })
    },
    getGoodsdetail(req, res) {
        // console.log('====================================');
        console.log("controller收到路由任务");
        // console.log('====================================');
        console.log(req)

        //var limitFlag = 0; //0代表无权登陆

        dbPool.connection("SELECT * FROM goods WHERE goodsID=?", [2], (err, data) => {
            // console.log(err)
            // console.log(data)
            if (err) {
                res.send(err.message)
            }
            else {
                res.json({ data, meta: { msg: '数据获取成功', status: 200 } });
            }
        })
    },
}
module.exports = detailController;