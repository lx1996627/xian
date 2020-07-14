const mysql = require("mysql");

const pool = mysql.createPool({
  host: "127.0.0.1",
  port:3306,
  user: "root",
  password: "root",
  database: "xian"
});

module.exports = {
  connect: (sql, options, callback) => {
    pool.getConnection((error, connection) => { // 连接
      if (error) return console.log("mysql 连接失败：", error);
      connection.query(sql, options, (err, result) => {
        connection.release(); // 释放连接池
        callback(err, result);
      });
    });
  }
}