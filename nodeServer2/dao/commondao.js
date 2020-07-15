const db = require("../config/dbpoolconfig");
const Result = require("../config/ActionResult");

const commondao = {
    getMenu(req, resp) {
        db.connect("SELECT * FROM goods ", [], (err, data) => {
            result = new Result();
            if (err == null) {
                result.data = data; //列表显示条数
                result.success = true; //返回成功
                result.message = "查询成功！" //成功描述
                resp.send(result)
            } else {
                result.success = false;
                result.message = "查询失败！"
                resp.send(result)
            }

        });
    }

}
module.exports = commondao;