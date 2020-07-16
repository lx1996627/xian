const mysql = require('mysql');
var dbPool = {
    pool: {},
    config: {//创建连接池需要用到的参数
        host: "localhost",
        port: "3306",
        user: 'root',
        password: "root",
        database: 'xian'
    },
    create() {
        console.log('====================================');
        console.log('已创建连接池');
        console.log('====================================');
        this.pool = mysql.createPool(this.config) //创建连接池
    },
    connection(sql, arr, fn) {
        this.pool.getConnection((err, connection) => {
            //SQL语句，SQL参数，回调：执行完SQL语句后调用，把结果注入在回调函数的参数里面，作出响应   
            connection.query(sql, arr, fn);
            connection.release();//释放connection
        })
    }
}
dbPool.create();
module.exports = dbPool;