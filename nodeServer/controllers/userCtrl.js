const userModel = require("../models/userModel");
// 用户数据传递
module.exports = {
  getUserId: (req, res) => {
    console.log("获取用户ID请求：", req.body);

    userModel.getUserId([req.body.telphone], (err, result) => {
      if (err) return res.json({
        msg: "数据库查找出错",
        state: '0',
        err: err
      });

      if (result.length == 0) {
        res.json({
          msg: "账号不存在",
          state: "1001"
        });
      } else {
        res.json({
          msg: "登陆成功",
          state: "200",
          data: result[0]
        });
      }
    })
  },
}