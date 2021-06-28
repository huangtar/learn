// 导入 gulp 依赖
const gulp = require('gulp')

// 导入 gulp-cssmin 依赖
const cssmin = require('gulp-cssmin') // cssmin 是一个函数

// 导入 gulp-autoprefixer 依赖
// 应该再什么位置执行？
const autoprefoxer = require('gulp-autoprefixer')

// 导入 gulp-sass 依赖
const sass = require('gulp-sass')

// 导入 gulp-uglify 依赖
const uglify = require('gulp-uglify')

// 导入 gulp-babel
const babel = require('gulp-babel')

// 导入 gulp-htmlmin
const htmlmin = require('gulp-htmlmin')

// 导入 gulp-file-include 依赖
const fileinclude = require('gulp-file-include')

// 导入 del 这个依赖
const del = require('del')

// 导入 gulp-imagemin 依赖
// const imagemin = require('gulp-imagemin')

// 导入 gulp-webserver 依赖
const webserver = require('gulp-webserver')

// 1. 定义一个打包 css 文件的任务
gulp.task('css', function () {
  // 我要再这里进行打包 css 的工作
  return gulp
    .src('./src/css/*.css') // 找到我要打包的文件
    .pipe(autoprefoxer()) // 这个自动添加前缀的行为需要传递参数
    .pipe(cssmin()) // 压缩 css 文件
    .pipe(gulp.dest('./dist/css')) // 使用管道函数执行任务
})

// 2. 定义一个打包 sass 文件的任务
gulp.task('sass', function () {
  // 要执行压缩 sass 的任务
  return gulp
    .src('./src/sass/*.scss')
    .pipe(sass()) // 转换 sass 变成 css
    .pipe(autoprefoxer())
    .pipe(cssmin())
    .pipe(gulp.dest('./dist/css')) // 放到指定文件夹里面
})

// 3. 定义一个打包 js 文件的任务
gulp.task('js', function () {
  return gulp
    .src('./src/js/*.js') // 找到文件
    .pipe(babel({ // 使用 babel 进行 es6 语法转换
      presets: ['@babel/env'] // 需要传递一个参数
    }))
    .pipe(uglify()) // 压缩一下
    .pipe(gulp.dest('./dist/js')) // 放到某一个目录
})

// 4. 定义一个打包 html 文件的任务
gulp.task('html', function () {
  return gulp
    .src('./src/pages/*.html') // 找到目录
    .pipe(fileinclude({ // 使用 fileinclude 导入 html 片段，需要传递一些参数
      prefix: '@-@', // 你定义的标识符
      basepath: './src/components', // 你存放 html 片段的那个路径
    }))
    .pipe(htmlmin({ // 执行一下压缩的事情
      collapseWhitespace: true, // 移出空行
      collapseBooleanAttributes: true, // 移出值为布尔值的属性
      removeEmptyAttributes: true, // 移出空属性
      removeComments: true, // 移出注释
      minifyCSS: true, // 把内嵌的 style 标签合起来
      minifyJS: true, // 把内嵌的 script 标签合起来
    }))
    .pipe(gulp.dest('./dist/pages')) // 放到指定目录
})

// 5. 定义一个打包 image 文件的任务
gulp.task('image', function () {
  return gulp
    .src('./src/images/**')
    .pipe(imagemin({

    })) // 执行压缩
    .pipe(gulp.dest('./dist/images')) // 放置文件
})

// 6. 视频和音频直接转移就行了
gulp.task('audio', function () {
  return gulp
    .src('./src/audios/**')
    .pipe(gulp.dest('./dist/audios'))
})

// 7. lib 直接转移
//   lib 里面放的式 公共 文件
gulp.task('lib', function () {
  return gulp
    .src('./src/lib/**')
    .pipe(gulp.dest('./dist/lib'))
})

// 8. data 文件夹直接转移
gulp.task('data', function () {
  return gulp
    .src('./src/data/*.json')
    .pipe(gulp.dest('./dist/data'))
})

// 9. 定义一个清除文件夹的任务
//   当我再开始打包之前，先把 dist 文件夹删除了
//   然后再进行打包
gulp.task('del', function () {
  return del('./dist')
})

// 10. 自动打开浏览器
gulp.task('webserver', function () {
  return gulp
    .src('./dist')
    .pipe(webserver({
      host: 'www.gx.com', // 你打开的域名
      port: '18', // 你打开的端口号
      open: './pages/index.html', // 你默认打开那个文件，直接从 dist 文件加开始的目录
      livereload: true, // 自动刷新
      // 配置代理
      proxies: [ // 你所有的代理配置
        // 这个数组里面的每一个对象就是你的一个代理设置
        {
          source: '/list', // 你请求的时候的代理标识符
          target: 'http://localhost:80/server/list.php', // 你请求的代理地址
        },
        // 可以直接代理一个文件夹
        {
          source: '/server',
          target: 'http://localhost:80/server/'
        }
      ]
    }))
})

// 11. 监控文件变化
gulp.task('watch', function () {
  // 直接进行监控
  gulp.watch('./src/css/*.css', gulp.series('css'))
  gulp.watch('./src/js/*.js', gulp.series('js'))
  gulp.watch('./src/pages/*.html', gulp.series('html'))
})

// last. 定义一个默认任务
//   目的： 就是把我定义定义的所有任务一起执行了
//   default： 当你运行 gulp 的时候，唯独 default 不用写
//   当你运行 gulp 指令的时候，如果没有写 任务名称，他会默认执行 default 任务
// gulp.task('default', function () {
//   要让我准备的任务一起完成
//   return gulp.parallel('css', 'sass', 'js', 'html', 'audio', 'lib', 'data')
// })

// 你如果想执行 parallel 或者 series 方法
// 在你定义任务的时候，就不要写 函数了
// 直接把这两个方法写上，因为这两个方法会返回一个函数，这个函数里面就是依次执行的内容
// gulp.task('default', gulp.parallel('css', 'sass', 'js', 'html', 'audio', 'lib', 'data'))

// 当配置任务队列的时候，就要有一个先后顺序问题
// 需要逐个完成任务
// series() 这个方法
gulp.task('default', gulp.series(
  'del', // 清除 dist 文件夹
  gulp.parallel('css', 'sass', 'js', 'html', 'audio', 'lib', 'data'), // 再清除完 dist 文件加以后，这些任务并行
  'webserver',
  'watch'
))
