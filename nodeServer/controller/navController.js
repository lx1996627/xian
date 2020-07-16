const dbPool = require('../config/dbPoolConfig');

const menuController = {
  getSideBar(req, res) {
    console.log('====================================');
    console.log("controller收到获取鲜花用途的路由任务");
    console.log('====================================');
    console.log(req.query)
    let searchFor = req.query.que.trim();
    dbPool.connection('select * from freshflower where yongTu=? or huaCai=? or zhiShu=? ', [searchFor, searchFor, searchFor], (err, data) => {
      if (!err) {
        console.log(data.length);
        if (data.length > 0) {
          console.log(data)
          res.send(data)
        }
        else {
          res.send('没查到数据')
        }
      }
      else {
        res.send(err.message)
      }
    })

  },


}
module.exports = menuController;