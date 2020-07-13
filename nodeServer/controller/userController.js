const dbPool = require('../config/dbPoolConfig');

const userController = {

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

    // 如果需要注册，验证用户名是否可用
    regist(req, res) {
        // console.log('====================================');
        // console.log(req.query.username);
        // console.log('====================================');
        let username = req.query.username;
        dbPool.connection('select * from users where userName=?', [username], (err, data) => {
            if (!err) {
                console.log(data.length);
                if (data.length > 0) {
                    res.send('用户名已存在')
                }
                else {
                    res.send('用户名可用')
                }
            }
            else {
                res.send(err.message)
            }
        })
    },

    //如果id存在 修改老用户 如果id不存在 添加新用户 
    addNew(req, res) {
        console.log('进入添加用户函数');
        console.log(req.body);
        let { userName, userPassword, userType, gender, birthday, tel, email,
            userAdd } = req.body;
        console.log(userName, userPassword, userType, gender, birthday, tel, email,
            userAdd);

        //  把数据写进数据库
        dbPool.connection('insert into users(userName, userPassword, userType, gender, birthday,tel, email, userAdd) values(?,?,?,?,?,?,?,?)',
            [userName, userPassword, userType, gender, birthday,
                tel, email, userAdd],
            (err, data) => {
                console.log(data || 'data不存在');
                console.log(err || 'err不存在');

                if (err) { res.send(err) }
                res.json({ data, meta: { msg: '用户创建成功', status: 201 } });
            })
    },

    editUser(req, res) {
        console.log('进入处理编辑的函数');
        console.log(req);

        let { userId, userName, userPassword, userType, gender, birthday,
            tel, email, userAdd } = req.body;

        //  把数据写进数据库
        dbPool.connection('update users set userName=?,userPassword=?,userType=?,gender=?,birthday=?,tel=?,email=?,userAdd=? where userId = ?',
            [userName, userPassword, userType, gender, birthday, tel, email, userAdd, userId],
            (err, data) => {
                ('====================================');
                if (err) {
                    res.send(err.message)
                }
                else {
                    res.json({ data, meta: { msg: '用户编辑成功', status: 200 } });
                }
            })
    },

}
module.exports = userController;