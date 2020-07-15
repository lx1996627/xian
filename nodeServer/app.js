const express = require('express');
const path = require('path');
const logger = require('morgan');  //日志模块
// const favicon = require('serve-favicon');
const bodyParser = require('body-parser')//创建application/json解析
//引入cookie session模块
const session = require('express-session')
const cookieParser = require('cookie-parser')

const router = require('./routes/router') //引入我们写的路由

//  执行express全局函数，返回一个express服务器对象，实例化的app对象有相对的方法
const app = express();  //没有用new，是隐藏了

//express配置
//日志模块，记录每次请求信息，并在调试台看到 最好放在最前面
app.use(logger('dev'));

//创建application/x-www-form-urlencoded解析
app.use(bodyParser.urlencoded({
    limit: "50mb",
    extended: true,  //false时键值对是字符串或者数组的形式 true是可以处理任何类型
    parameterLimit: 50000
}));

app.use(bodyParser.json(
    { limit: "50mb" }
))

//cookie session配置 监听端口之前 使用路由之前
app.use(cookieParser()); //方便对cookie进行解析
app.use(session({  //服务器配置session的规则，然后通过session设置浏览器的cookie
    name: "xianjia", //服务器设置cookie时给cookie的名字 也有默认名字，可以不填
    secret: 'xianjia', //密钥 对cookie签名，安全，防止其他人伪造cookie
    cookie: {
        maxAge: 1000 * 60 * 15,
        //cookie有效时间，单位是毫秒 
        //浏览器访问时携带cookie，session判断cookie是否在有效期以内，不在就自动移除cookie
        rolling: true //更新保存 按照原先设定的maxAge值重新设定session 同步到cookie中
        //登陆后只要在进行操作，就更新有效期  每次请求时，强行对cookie进行重置
    },
    resave: true, //是否更新session cookie的失效时间 是否每次都保存会话，即使没有变化
    saveUninitialized: false //未初始化cookie要不要保存 无论有没有设置session cookie 每次请求都设置一个session cookie
}))

//在router之前解决跨域 利用CROS
app.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')//"*"允许任意地址访问
    res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE')
    res.header('Access-Control-Allow-Headers',
        'Origin,X-Requested-With,Content-Type,Accept, Authorization')
    res.header('Content-Type', 'application/json;charset=utf-8') //针对post
    next() //继续下一个中间件的处理
})

//设置路由 router最好设置在静态资源之前
app.use(router);

//设置静态资源路径
// app.use(express.static(path.join(__dirname, 'public')));

//如果没有匹配到上述的静态资源路径和路由路径，就执行404
// app.use((req, res, next) => {
//     //next(createError(404));   //next交给下一下中间件处理，即下一个app.use
//     res.redirect('404.html') //我们写的简单的404页面
// });


app.set('port', 8888); //设置端口

app.listen(8888, () => {
    console.log('====================================');
    console.log("服务器应用实例已启动,访问端口号为：" + app.get('port'));
    console.log('====================================');
})
