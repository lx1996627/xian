const multer = require('multer');
//node处理multipart/form-data数据格式（主要用于上传功能）的中间件
//不处理除multipart/form-data以外的任何形式的数据

//文件上传模块的配置

//修改 上传的 文件对象 的参数 
const storage = multer.diskStorage(
    {
        //设置上传后文件路径
        destination: (req, file, cb) => {
            cb(null, './static/uploads')    //注意路径是./ 相对config这个文件夹 
        },
        //给上传文件重命名
        filename: (req, file, cb) => {
            // var fileFormat = (file.originalname).split('.')
            // cb(null, file.fieldname + '-' + fileFormat[0] + '-' + Date.now() + '.' + fileFormat[fileFormat.length - 1])
            cb(null, file.fieldname + '-' + Date.now() + '-' + file.originalname)
        }
    }
);

//添加配置文件到multer对象
var upload = multer({
    storage: storage
})

module.exports = upload

