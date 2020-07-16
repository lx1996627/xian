const db = require("./index");
// 用户数据获取
module.exports = {
  getUserId: (options, callback) => {
    var sql = `SELECT person_id userId FROM person WHERE person_phone=?`;
    db.connect(sql, options, callback);
  }
};



