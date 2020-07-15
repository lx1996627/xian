/* gulp 配置文件 */
const {src, dest, watch, series, parallel} = require("gulp");
const uglify = require("gulp-uglify"); // js 压缩，npm i --save-dev gulp-uglify
const cleanCSS = require("gulp-clean-css"); // 压缩css
const rename = require("gulp-rename"); // 修改文件名
const less = require("gulp-less"); // 处理 less
const babel = require('gulp-babel');

const imagemin=require("gulp-imagemin");//压缩图片

// 压缩js
function uglifyJS() {
  return src("src/js/*.js")
  
    .pipe(babel({
      presets: ['@babel/env']
    }))
    .pipe(uglify({
      compress: {
        drop_console: false
      }
    }))
    .pipe(rename({
      extname:".min.js"
    }))
    .pipe(dest("public/js"));
}
// 压缩css
function minifyCSS(){
  return src("src/less/*.css")//要处理的源文件地址，*.js 代表任意js文件
  .pipe(cleanCSS({
      compatibility:"ie8"//兼容ie8
  }))
  .pipe(rename({
      extname:".min.css"
  }))
  .pipe(dest("public/css"));
}

// 编译 less
function lessTask() {
  return src("src/less/*.less")
    .pipe(less())
    .pipe(cleanCSS({
      compatibility: "ie8"
    }))
    .pipe(rename({
      extname: ".min.css" // 修改后缀名
    }))
    .pipe(dest("public/css"));
}

// 压缩图片
function minifyImage(){
  return src("src/img/ws/*.{jpg,png,gif,svg}")
  .pipe(imagemin({
   progressive:true 
  }))
  .pipe(dest("public/img/ws"));
}

// 代码监听
function serve() {
  // 代码监听
  watch("src/less/*.less", series("lessTask")); // 监测文件是否有变化，如果有变化，则调用对应的任务进行处理
  watch("src/js/*.js", series("uglifyJS"));
  watch("src/img/*.{png,jpg,gif}",series("minifyImage"));
}

exports.uglifyJS = uglifyJS;
exports.lessTask = lessTask;
exports.minifyImage=minifyImage;
exports.minifyCSS=minifyCSS;

// parallel() 并发执行任务
const bulid = parallel(uglifyJS, lessTask, minifyImage); 

// series()按照顺序依次执行任务
exports.default = series(bulid, serve); // 默认任务，终端中可以直接写 gulp