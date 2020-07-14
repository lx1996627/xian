const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const session = require("express-session");
const logger = require('morgan');
const ejs = require("ejs");

//短信
// const telRouter = require("./routes/tel");
const privateUsersRouter = require('./routes/privateUsersRouter');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');
app.engine(".html",ejs.__express);

app.use(logger('dev'));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cookieParser());

app.use(session({ //session配置
  secret:"secret",
  name:"testdw",
  cookie:{
    maxAge:1000 * 100 * 60  //cookie 过期时间
  },
  saveUninitialized:false,
  resave:true,
  rolling:true
}));

app.use(express.static(path.join(__dirname, 'public')));


//tel
// app.use("/tel",telRouter);

//未登录
// app.use('/public/to', publicPagesRouter); // 不需要登录就能访问的页面
// app.use('/public/pagesData', publicPagesDataRouter); // 不需要登录就能访问的数据接口
// app.use('/tel',telRouter);
// 路由拦截：进行权限验证
// app.all("*", (req, res, next) => {
//     if(req.session.sign) { // 表示已经登录
//       next(); // 该干嘛干嘛去
//     }  else { // 没有登录
//       res.redirect("/to/login"); // 重定向到登录页
//     } 
// });

//已登录
// app.use("/private/to",privatePagesRouter); // 需要登录才能访问的页面
app.use("/private/users",privateUsersRouter);  //需要登录才能访问的数据接口


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  console.log('服务器错误里：',err);
  
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
}); 

module.exports = app;
