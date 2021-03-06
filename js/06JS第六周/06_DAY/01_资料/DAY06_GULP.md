# GULP

- `gulp` 是一个项目开发的 **自动化打包构建工具**
- 基于 `node` 环境来运行的



## 什么是自动化打包工具

- 比如

  > 我们在开发的过程中，会写到 `js` 文件，`css` 文件，等等
  >
  > 我们的项目如果想上线，那么一定要体积小一点，文件大小越小越好
  >
  > 而我们在写 `js` 文件的时候，会有很多 **换行/空格** 之类的东西
  >
  > 这些 **换行/空格** 都是占文件体积的一部分
  >
  > 那么我们在上线之前就要吧这些 **换行/空格** 尽可能的删除掉
  >
  > 我们又不能一个文件一个文件的去删除
  >
  > 就要用到一个自动化工具来帮助我们把这些多余的东西干掉

- 这个就是自动化工具的意义
- 常见的自动化打包构建工具
  - `gulp`
  - `webpack`



## 安装 GULP 环境

- `gulp` 也是一个运行环境

- 只不过这个环境是要依赖于 `node` 环境的

- 所以我们在安装 `gulp` 环境之前确保 `node` 环境已经安装

  - `$ node --version`
  - `$ npm --version`

- 之所以也要检测以下 `npm` 环境，是因为我们要使用 `npm` 来安装 `gulp` 环境

- 我们就直接安装一个 `gulp` 全局包就可以了

  ```shell
  # 打开命令行（MAC 打开终端）
  # 直接使用 npm 安装就好

  # windows 指令
  $ npm install --global gulp
  # MAC 指令
  $ sudo npm install --global gulp
  ```

- 等待安装就好，会默认安装最新的稳定版本

- 要是想确认以下 `gulp` 安装成功

- 可以直接在命令行（终端）使用指令查看以下版本号就可以

  - `$ gulp --version`
  - 会出现一个 `CLI version: x.x.x`
  - 就表示安装成功了

- 安装好 `gulp` 环境以后，我们就可以使用了



## 为什么要使用 gulp

- 就是为了在我们的开发过程中

  > 随着我们书写代码，就会自动帮我们把代码进行 **压缩/合并/混淆/转码/...** 之类的功能
  >
  > 因为 `gulp` 是基于 `node` 环境运行的，所以可以给我们提供一个服务器
  >
  > 让我们的项目启动在 **服务器** 上，就可以达到一个 **自动刷新自动同步** 的功能
  >
  > 因为有 **服务器** 的出现，我们在请求一些数据的时候，就可以使用 **服务器代理** 的方式

- 在我们使用 `gulp` 的时候，我们所有的 **源代码** 都会使用 `gulp` 进行 压缩/转码
- 并且最终会给我们放在一个新的文件夹里面

  - 也就是说，我们的 **源代码** 在一个文件夹里面，压缩/转码 之后的所有文件在一个文件夹里面



## 使用 GULP

- 我们的 `gulp` 环境已经安装完毕了，接下来我们就使用 `gulp` 对我们的项目进行打包了



### 1. 创建一个项目

- 我们要使用 `gulp` 管理我们的项目

- 首先，我们要有一个项目出现

- 这里我会创建一个叫做 `gulp_test` 的文件夹作为我的项目文件夹

- 因为我们是做一个 **项目**，肯定也会下载依赖包，所以最好是使用 `npm` 管理一下

- 先做一个 `$ npm init` 初始化一下

  ```shell
  # 进入项目文件夹
  $ cd gulp_test
  # 使用 npm 管理我们的项目
  $ npm init -y
  ```

- 接下来，我们就要决定我们 **源代码的目录结构**

- **在项目目录里面创建一个叫做 `gulpfile.js` 的文件**

  > 这个文件是 `gulp` 在运行的时候的规则文件
  >
  > `gulp` 的运行就是按照你书写在 `gulpfile.js` 文件中的规则来进行打包的
  >
  > 比如我们要定义：
  >
  >  - 哪些文件按照 `css` 文件来打包
  >
  >  - 哪些文件按照 `js` 文件来打包
  >
  >  - 不同的文件有不同的打包规则
  >
  > 因为每一个项目的目录结构都可能不一样
  >
  > 所以，每一个项目都会有一个自己的 `gulpfile.js` 文件，来指定自己的规则

- 我会准备一个叫做 `src` 的目录，作为我所有的源代码

  ```text
  - gulp_text             项目文件夹
    - src					项目源代码目录
      + css				存放 css 所有文件
      + data				存放数据文件
      + js				存放 js 所有文件
      + lib				存放一些第三方和公共资源（swiper/utils/...）
      + pages				存放所有页面
      + sass   			存放 sass 所有文件
      - static			存放所有静态资源文件
        + audios          存放所有音频文件
        + images			存放所有图片文件
        + videos			存放所有视频文件
    - gulpfile.js         该项目的 gulp 打包规则
    - package.json        npm 的项目管理文件
  ```



### 2. 在项目里面下载 gulp

- 刚才我们安装过一回全局的 `gulp` 了

- 它只是给我们的电脑提供一个可以运行 `gulp` 命令的环境

- 我们的项目要是想使用 `gulp` 工具，那么我们需要在项目里面下载项目依赖 `gulp`

- 我们先下载一个项目依赖 `gulp`

  ```shell
  # 下载项目依赖 gulp
  $ npm install --save-dev gulp
  ```

- 下载完毕以后在 `package.json` 文件里面就会有相应的记录了

  ```json
  {
      "devDependencies": {
          "gulp": "^4.0.2"
      }
  }
  ```

  - 我们会看到我们安装的是 `gulp@4.0.2` 的版本
  - 这个是目前比较新的比较稳定的版本

- 然后我们在 `gulpfile.js` 文件里面引入 `gulp` 依赖

  ```javascript
  // gulpfile.js

  // 引入 gulp 依赖
  const gulp = require('gulp')
  ```

- 接下来，我们就可以开始指定我们的打包规则了



### 3. GULP的几个常用 API

- 首先，我们要知道，`gulp` 是靠 **任务** 来进行对代码的打包的

  > 比如
  >
  > - 我们指定一个打包 `css` 的任务
  >
  > - 我们制定一个打包 `js` 的任务
  >
  > 我们将来一执行这个 `css` 任务，就会把 `css` 代码压缩了
  >
  > 我们对于我们的所有文件，只要创建好一个一个的任务，然后让他们依次执行就行了

- 接下来，我们就来说一下 `gulp` 中几个常见的 `api`
  1. `gulp.task()`：用于创建任务

     > `task('css', function () {})`
     >
     > 第一个参数： 这个任务叫做什么名字
     >
     > 第二个参数： 这个任务都做什么事情

  2. `gulp.src()`：匹配文件，也就是我们要操作哪些文件
     >
     > `src('./src/css/**')`
     >
     > 第一个参数： 就是要匹配的文件的路径（可以有多种形式）
     >
     > - `./src/css/index.css`：匹配一个文件
     >
     > - `./src/css/*.css`：匹配 `css` 文件夹下的所有后缀是 `.css` 的文件
     >
     > - `./src/css/**`：匹配 `css` 文件夹下的所有文件
     >
     > - `./src/**/*.css`： 匹配 `src` 下所有目录下的 `.css` 后缀的文件
     >
     > - 这是几个我们常用的，还有很多其他的方式
     >
     > - 需要学习，可以参考
     >
     >   - [官方文档](https://www.gulpjs.com.cn/docs/api/src/)
     >
     >   - [CSDN](https://blog.csdn.net/wildye/article/details/80516847)
  3. `gulp.pipe()`：管道函数，用于帮我们做事

     > `pipe(压缩css)`
     >
     > 参数可以是各种插件，就是用来帮我们做事情的
     >
     > - 比如可以做一个给 `css` 属性自动添加前缀的事情
     >
     > - 做一个压缩 `css` 文件的事情
     >
     > - 等等...

  4. `gulp.dest()`：用于讲文件写入的

     > `dest('./dist')`
     >
     > 第一个参数： 一个目录地址
     >
     > 只要是用来把我们压缩好的文件写入哪个文件夹里面
     >
     > 如果该文件夹不存在，会自动创建这个文件夹

  5. `gulp.series()`：gulp 的任务执行链

     > `series()`
     >
     > 可以填写很多个参数，每一个参数就是一个任务名称
     >
     > 会按照你书写的顺序去执行任务
     >
     > - 书写方式就是按照任务名分开就好
     >
     > - `gulp.series('css', 'js')`
     >
     > - 就会先执行一个 `css` 任务，执行完毕之后再去执行 `js` 任务
     >
     > 最后一个参数（选填）： 函数，所有你安排的任务执行完毕之后会执行的回调函数

  6. `gulp.parallel()`：gulp 的任务执行链

     > `parallel()`
     >
     > 可以填写多个任务，会同步执行几个任务
     >
     > `parallel('css', 'js')`
     >
     > - 会把两个任务同时开始执行
     >
     > - 两个任务是并行开始的

  7. `gulp.watch()`：监控文件变化

     > `watch('./src/css/*.css', function () {})`
     >
     > 第一个参数： 要监控的文件路径
     >
     > 第二个参数： 需要一个函数 ，当你监控的文件发生改变的时候做什么



### 4. 创建一个压缩 css 的任务

- 接下来我们就是使用 `gulp` 创建一个压缩 `css` 文件的任务

- 我们肯定不能自己去把空格删除，或者写一段代码去替换

- 而是使用一个和 `gulp` 相关的依赖包

  - `$ npm install --save-dev gulp-cssmin`

- 下载下来直接使用就好了

  ```javascript
  // gulpfile.js

  // 引入 gulp 依赖
  const gulp = require('gulp')

  // 引入 gulp-cssmin 依赖
  const cssmin = require('gulp-cssmin')

  // 创建一个 css 的任务
  gulp.task('css', function () {
      return gulp
          .src('./src/css/*.css')  // 使用 src 方法找到我们要压缩的文件
          .pipe(cssmin())          // 使用管道函数执行一个压缩的行为
          .pipe(gulp.dest('./dist/css'))  // 把压缩好的文件放在 dist 文件夹下的 css 文件夹
  })
  ```

  - 这样，我们的一个简单的压缩 `css` 文件的任务就完成了
  - 接下来只要让这个任务执行以下就好了

- 我们就来到命令行（终端），去执行我们写的这个叫做 `css` 的任务

  ```shell
  # 使用 gulp 的指令去执行这个 css 任务
  $ gulp css
  ```

  - 执行完毕以后你会发现多了一个 `dist` 文件夹
  - 里面就有 `css` 文件夹
  - 里面有一个 `.css` 文件，这个就是被压缩好的文件了



#### 自动添加前缀

- 其实到这里我们的压缩已经可以了

- 但是因为我们有的时候，需要给一些属性添加前缀

  - `-webkie-transition: all 1s;`
  - `-webkit-animation: move 1s;`
  - ...

- 所以我们最好是能有一个工具帮我们自动添加应该添加的前缀

- 这样我们在写 `css` 的时候就不需要考虑了，我们就正常写就好了

- 依旧是使用一个和 `gulp` 相关的依赖包

  - `$ npm install --save-dev gulp-autoprefixer`

- 下载好以后我们直接使用就好了

  ```javascript
  // gulpfile.js

  // 引入 gulp 依赖
  const gulp = require('gulp')

  // 引入 gulp-cssmin 依赖
  const cssmin = require('gulp-cssmin')

  // 引入 gulp-autoprefixer 依赖
  const autoprefiexer = require('gulp-autoprefixer')

  // 创建一个 css 的任务
  gulp.task('css', function () {
      return gulp
          .src('./src/css/*.css')
          .pipe(autoprefiexer({  // 执行一个自动添加前缀的任务
          	browsers: ['last 2 versions']  // 这个参数是指兼容最近的两个浏览器版本
      	}))
          .pipe(cssmin())
          .pipe(gulp.dest('./dist/css'))
  })
  ```

  - 这个自动添加前缀是需要参数的

  - 我们添加完这个行为以后，再去命令行（终端）执行一下 `css` 任务

  - 你就会发现 `dist/css/xxx.css` 文件里面的代码被自动添加前缀了

  - 但是会发现在命令行 “好像报错了”

    ![](./assets/css_auto.png)

  - **这个不是报错，是提醒**

  - 因为 `autoprefixer` 这个可以填写很多的参数

  - 最近几个版本的 `gulp` 觉得直接把参数写在 `gulpfile.js` 文件里面不是很舒服

  - 也不是很正规的样子，所以建议你在 **根目录** 下新建一个 `.browserslist` 文件来写或者写在 `package.json`  里面都可以，看起来正规一些

- 我们就把刚才写的参数移动到 `package.json` 文件里面

  ```json
  // package.json
  {
      "name": "gulp_test",
      "version": "1.0.0",
      "description": "",
      "main": "index.js",
      "scripts": {
          "test": "echo \"Error: no test specified\" && exit 1"
      },
      "keywords": [],
      "author": "",
      "license": "ISC",
      "devDependencies": {
          "gulp": "^4.0.2",
          "gulp-autoprefixer": "^7.0.0",
          "gulp-cssmin": "^0.2.0"
      },
      {
  		"browserslist": [
      		"last 2 versions"
      	]
  	}
  }
  ```

  - 然后就可以把 `gulpflie.js` 文件里面的参数删除了，只留下 `autoprefixer()` 就好了
  - 然后再去命令行（终端）执行 `css` 任务就可以了
  - 我们会发现，前缀依旧自动添加了，并且也没有 ”报错“ 了

- 我们对于在 `package.json` 里面的书写就可以添加很多别的参数了

- 可以让他做更多的兼容处理

  ```json
  // browserslist
  {
      "browsers": [
          "last 2 versions",
          "iOS 7",
          "FireFox > 20",
          "Android > 4.1"
      ]
  }
  ```

  - 我们可以往里面写入你要兼容的各种版本
  - 然后执行的时候你就会发现，前面添加的前缀内容和兼容处理越来越多了
  - 这里只是一部分，想更多了解可以参考 [掘金](https://juejin.im/post/5b8cff326fb9a019fd1474d6)



### 5. 创建一个压缩 sass 的任务

- `css` 的内容我们解决完了，接下来我们要解决一下 `sass` 的任务

- 其实和 `css` 任务差不多，只不过多了一个步骤

- 就是把 `sass` 的内容转换成 `css` 的内容，然后还是自动添加前缀，压缩一下放到指定目录

- 转化 `sass` 内容也是需要一个 `gulp` 相关的依赖

  - `$ npm install --save-dev gulp-sass `
  - 在这里下载的时候，有可能会失败，会报错
  - 如果报错我们就先安装一个 `node-sass` 的依赖，在安装 `gulp-sass`
  - `$ npm install --save-dev node-sass`
  - `$ npm install --save-dev gulp-sass`

- 下载好以后我们去使用就好了

  ```javascript
  // gulpfile.js

  // 引入 gulp 依赖
  const gulp = require('gulp')

  // 引入 gulp-cssmin 依赖
  const cssmin = require('gulp-cssmin')

  // 引入 gulp-autoprefixer 依赖
  const autoprefiexer = require('gulp-autoprefixer')

  // 引入 gulp-sass 依赖
  const sass = require('gulp-sass')

  // 压缩 css 的任务
  gulp.task('css', function () { ... })

  // 压缩 sass 的任务
  gulp.task('sass', function () {
      return gulp
          .src('./src/sass/*.scss')
          .pipe(sass())  // 在自动添加前缀之前，把 sass 语法转换成 css 语法
          .pipe(autoprefiexer())
          .pipe(cssmin())
          .pipe(gulp.dest('./dist/css'))
  })
  ```

  - 基本和 `css` 任务一致，只不过就是在自动添加前缀之前转换一下语法

  - 因为解析完毕以后也是 `.css` 文件，所以我们也放在 `css` 文件夹里面就好了

  - 然后就可以去命令行（终端）执行 `sass` 这个任务了

    ```shell
    # 执行一下 sass 任务
    $ gulp sass
    ```

  - 我们就会发现我们写在 `sass` 文件夹里面的文件被转码压缩放在了 `dist/css/` 文件夹里面了



### 6. 创建一个压缩 JavaScript 的任务

- 接下来我们就做一个任务用来压缩 `js` 文件

- 其实和之前的套路是一样的

- 这里对 `js` 文件进行压缩，也是需要一个 `gulp` 相关依赖包

  - `$ npm install --save-dev gulp-uglify`

- 下载好以后我们进行配置就好了

  ```javascript
  // gulpfile.js

  // 引入 gulp 依赖
  const gulp = require('gulp')

  // 引入 gulp-cssmin 依赖
  const cssmin = require('gulp-cssmin')

  // 引入 gulp-autoprefixer 依赖
  const autoprefiexer = require('gulp-autoprefixer')

  // 引入 gulp-sass 依赖
  const sass = require('gulp-sass')

  // 引入 gulp-uglify 依赖
  const uglify = require('gulp-uglify')

  // 压缩 css 的任务
  gulp.task('css', function () { ... })

  // 压缩 sass 的任务
  gulp.task('sass', function () { ... })

  // 压缩 js 的任务
  gulp.task('js', function () {
      return gulp
          .src('./src/js/*.js')
          .pipe(uglify())
          .pipe(gulp.dest('./dist/js'))
  })
  ```

  - 一个简单的压缩 `js` 的任务就做好了

  - 我们去命令行（终端）执行以下这个任务

    ```shell
    # 执行以下 js 任务
    $ gulp js
    ```

  - 就会发现 `dist` 下面多了一个 `js` 文件夹，里面有我们的 `js` 代码，已经被压缩好了

  - 但是，当我们写了 `es6(ES2015)` 的语法以后，就不能正常帮我们压缩了，会报错

  - 因为这个 `gulp-uglify` 不认识 `es6(ES2015)` 的语法



#### ES6 转 ES5

- 接下来我们就需要做一个事情了

- 在 `uglify` 之前，把 `es6` 的语法转换成 `es5` 的语法

- 这样在压缩就没有问题了

- `es6` 转 `es5` 需要下载三个依赖包

  ```shell
  # es6 转 es5 需要的三个依赖
  $ npm install --save-dev gulp-babel
  $ npm install --save-dev @babel/core
  $ npm install --save-dev @babel/preset-env
  ```

- 下载完毕之后我们就可以进行配置了

- 虽然下载了三个依赖包，但是我们导入只需要导入一个 `gulp-babel` 就可以了

  ```javascript
  // gulpfile.js

  // 引入 gulp 依赖
  const gulp = require('gulp')

  // 引入 gulp-cssmin 依赖
  const cssmin = require('gulp-cssmin')

  // 引入 gulp-autoprefixer 依赖
  const autoprefiexer = require('gulp-autoprefixer')

  // 引入 gulp-sass 依赖
  const sass = require('gulp-sass')

  // 引入 gulp-uglify 依赖
  const uglify = require('gulp-uglify')

  // 引入 gulp-babel 依赖
  const babel = require('gulp-babel')

  // 压缩 css 的任务
  gulp.task('css', function () { ... })

  // 压缩 sass 的任务
  gulp.task('sass', function () { ... })

  // 压缩 js 的任务
  gulp.task('js', function () {
      return gulp
          .src('./src/js/*.js')
      	.pipe(babel({ // 在压缩之前要进行转码
          	presets: ['@babel/env'] // 需要一个参数
      	}))
          .pipe(uglify())
          .pipe(gulp.dest('./dist/js'))
  })
  ```

  - 在压缩 `js` 之前进行 `babel` 转码就好了
  - 也是一样需要一个参数，我们直接写在这个里面就可以
  - 再次去执行 `js` 这个任务以后，我们发现压缩出来的内容被转换成了 `es5` 的语法



### 7. 创建一个压缩 HTML 的任务

- 接下来我们就要对 `html` 文件进行压缩了

- 还是我们之前的套路，再来一遍

- 压缩 `html` 文件需要一个 `gulp` 相关依赖包

  - `$ npm install --save-dev gulp-htmlmin`

- 下载好以后我们就可以进行配置了

  ```javascript
  // gulpfile.js

  // 引入 gulp 依赖
  const gulp = require('gulp')

  // 引入 gulp-cssmin 依赖
  const cssmin = require('gulp-cssmin')

  // 引入 gulp-autoprefixer 依赖
  const autoprefiexer = require('gulp-autoprefixer')

  // 引入 gulp-sass 依赖
  const sass = require('gulp-sass')

  // 引入 gulp-uglify 依赖
  const uglify = require('gulp-uglify')

  // 引入 gulp-babel 依赖
  const babel = require('gulp-babel')

  // 引入 gulp-htmlmin 依赖
  const htmlmin = require('gulp-htmlmin')

  // 压缩 css 的任务
  gulp.task('css', function () { ... })

  // 压缩 sass 的任务
  gulp.task('sass', function () { ... })

  // 压缩 js 的任务
  gulp.task('js', function () { ... })

  // 压缩 html 的任务
  gulp.task('html', function () {
      return gulp
          .src('./src/pages/*.html')  // 找到文件
          .pipe(htmlmin({ // 使用 htmlmin 进行压缩
              removeComments: true,
              removeEmptyAttributes: true,
              collapseWhitespace: true,
              collapseBooleanAttributes: true,
              minifyCSS: true,
              minifyJS: true
      	}))
          .pipe(gulp.dest('./dist/pages')) // 放到指定目录里面
  })
  ```

  - 注意： **`gulp-htmlmin` 在使用的时候是需要传递参数的**

    - `removeComments`：是否移除注释
    - `removeEmptyAttributes`： 是否移除空属性
    - `collapseWhitespace`： 是否移除空格和换行
    - `collapseBooleanAttributes`： 是否简化属性值为布尔的属性（`checked="checked"`）
    - `minifyCSS`： 是否压缩页面中给的 `style` 标签（内嵌式 `css` 代码）
    - `minifyJS`： 是否压缩页面的的 `script` 标签（内嵌式 `js` 代码）

  - 这个时候就可以去命令行（终端）执行一下 `html` 这个任务了

    ```shell
    # 执行以下 html 这个任务
    $ gulp html
    ```



#### HTML导入组件

- 这里有一个比较好玩的东西，就是我们可以在 `html` 文件中导入组件

- 比如

  - 我们在写网页的时候，头部和底部一般都是公共的内容
  - 那么我们可以单独把头部和底部抽取出来，写成一个 `html` 片段
  - 然后每个页面在使用的时候我们只要把这个 `头部和底部` 片段引入进来就好了
  - 不用每个页面都去书写了

- 这个组件的导入肯定是要在压缩 `html` 之前完成

- 我们先准备一个目录，专门用来保存所有的 `html` 片段

  - 我就在 `src` 目录下新建一个文件夹 `conponents`

  - 用来存放所有的 `html` 片段文件

  - 在里面写一个 `header.html` 作为一个头部片段

    ```html
    <!-- src/conponents/header.html -->
    <div class="header">
        <h1 class="logo"></h1>
        <p>我是一个公共的头部</p>
    </div>
    ```

- 接下来我们下载一个可以导入 `html` 片段的 `gulp` 依赖

  - `$ npm install --save-dev gulp-file-include`

- 然后我们进行配置就好了

  ```javascript
  // gulpfile.js

  // 引入 gulp 依赖
  const gulp = require('gulp')

  // 引入 gulp-cssmin 依赖
  const cssmin = require('gulp-cssmin')

  // 引入 gulp-autoprefixer 依赖
  const autoprefiexer = require('gulp-autoprefixer')

  // 引入 gulp-sass 依赖
  const sass = require('gulp-sass')

  // 引入 gulp-uglify 依赖
  const uglify = require('gulp-uglify')

  // 引入 gulp-babel 依赖
  const babel = require('gulp-babel')

  // 引入 gulp-htmlmin 依赖
  const htmlmin = require('gulp-htmlmin')

  // 引入 gulp-file-include 依赖
  const fileinclude = require('gulp-file-include')

  // 压缩 css 的任务
  gulp.task('css', function () { ... })

  // 压缩 sass 的任务
  gulp.task('sass', function () { ... })

  // 压缩 js 的任务
  gulp.task('js', function () { ... })

  // 压缩 html 的任务
  gulp.task('html', function () {
      return gulp
          .src('./src/pages/*.html')  // 找到文件
          .pipe(fileinclude({ // 导入 html 片段
                prefix: '@-@',  // 你自定义一个标识符
                basepath: './src/components'  // html 片段存放路径
          }))
          .pipe(htmlmin({ // 使用 htmlmin 进行压缩
              removeComments: true,
              removeEmptyAttributes: true,
              collapseWhitespace: true,
              collapseBooleanAttributes: true,
              minifyCSS: true,
              minifyJS: true
      	}))
          .pipe(gulp.dest('./dist/pages')) // 放到指定目录里面
  })
  ```

  - 我们要在 `htmlmin` 进行压缩之前把 `html` 片段导入进来
  - 这个依赖需要传递一些参数
    - `prefix`： 自定义一个标识符，用来在我们的页面里面知道我接下来的东西是要导入的
    - `basepath`： 存放 `html` 片段文件的目录

- 接下来我们只要在 `html` 文件中进行导入就可以了

  ```html
  <!-- src/pages/index.html -->
  <!DOCTYPE html>
  <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <meta http-equiv="X-UA-Compatible" content="ie=edge">
          <title>Document</title>
      </head>
      <body>
          <!--
              这个就是导入片段，使用我们自己定义的标识符就可以
              include 的参数直接写 html 片段的文件名称就行
              因为我们之前配置过 html 片段的存放路径了
              他会自动去我们配置的 basepath 里面进行查找
          -->
          @-@include('header.html')
      </body>
  </html>
  ```

- 这个时候就已经好了，我们就可以去命令行（终端）执行 `html` 任务了

  ```shell
  # 执行一下 html 任务
  $ gulp html
  ```

  - 这个时候我们就发现，我们书写 `@-@include('header.html')` 的位置被替换成了我们在 `header.html` 文件中写的所有内容了



#### 导入 HTML 片段传递参数

- 我们在导入 `html` 片段的时候还可以对片段传递一些参数

- 依旧是使用我们之前定义好的标识符

  ```html
  <!-- src/conponents/header.html -->
  <div class="header">
      <h1 class="logo"></h1>
      <p>我是一个公共的头部</p>
      <!-- 这里是指在 span 标签内部需要一个 title 的变量进行填充 -->
      <span>@-@title</span>
  </div>
  ```

- 我们就可以在页面中导入这个片段的时候进行传递参数

  ```html
  <!-- src/pages/index.html -->
  <!DOCTYPE html>
  <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <meta http-equiv="X-UA-Compatible" content="ie=edge">
          <title>Document</title>
      </head>
      <body>
          <!--
              我们在导入的时候就可以传递一些参数
              注意： 传递参数的时候一定要写成 json 的格式，不然的话不识别，就会报错了
          -->
          @-@include('header.html', { "title": "hello world" })
      </body>
  </html>
  ```

- 这样我们再次运行打包 `html` 的命令，得到的结果就是

  ```html
  <!DOCTYPE html>
  <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <meta http-equiv="X-UA-Compatible" content="ie=edge">
          <title>Document</title>
      </head>
      <body>
          <div class="header">
              <h1 class="logo"></h1>
              <p>我是一个公共的头部</p>
              <span>hello world</span>
          </div>
      </body>
  </html>
  ```



### 8. 创建一个压缩图片的任务

- 接下来我们就要压缩图片了

- 压缩图片就简单很多了，还是一样的套路

- 我们压缩图片需要使用一个 `gulp` 相关的依赖

  - `$ npm install --save-dev gulp-imagemin`
  - 这个依赖会下载很长时间，而且中间会有一段时间是停止不动的
  - 不是失败了，是因为他还会下载很多其他的依赖项，所以需要时间比较长
  - 等待就好了

- 下载好了以后我们进行配置就可以了

  ```javascript
  // gulpfile.js

  // 引入 gulp 依赖
  const gulp = require('gulp')

  // 引入 gulp-cssmin 依赖
  const cssmin = require('gulp-cssmin')

  // 引入 gulp-autoprefixer 依赖
  const autoprefiexer = require('gulp-autoprefixer')

  // 引入 gulp-sass 依赖
  const sass = require('gulp-sass')

  // 引入 gulp-uglify 依赖
  const uglify = require('gulp-uglify')

  // 引入 gulp-babel 依赖
  const babel = require('gulp-babel')

  // 引入 gulp-htmlmin 依赖
  const htmlmin = require('gulp-htmlmin')

  // 引入 gulp-file-include 依赖
  const fileinclude = require('gulp-file-include')

  // 引入 gulp-imagemin 依赖
  const imagemin = require('gulp-imagemin')

  // 压缩 css 的任务
  gulp.task('css', function () { ... })

  // 压缩 sass 的任务
  gulp.task('sass', function () { ... })

  // 压缩 js 的任务
  gulp.task('js', function () { ... })

  // 压缩 html 的任务
  gulp.task('html', function () { ... })

  // 压缩 image 的任务
  gulp.task('image', function () {
      return gulp
          .src('./src/static/images/**')
          .pipe(imagemin({  // 执行压缩任务
              progressive: true,  // 无损压缩
              optimizationLevel: 7  // 压缩级别 1 ~ 7
          }))
          .pipe(gulp.dest('./dist/static/images'))
  })
  ```

  - 我们在最开始寻找文件的时候，就不要限定后缀了，因为我们的图片后缀比较多
  - 这个时候，压缩 `image` 的任务就配置好了
  - 我们就可以去命令行（终端）执行任务了

  ```shell
  # 执行 image 任务
  $ gulp image
  ```

- 因为我们是无损压缩，所以其实对于图片的压缩是压缩不了太多东西的

- 哪怕你不开启无损压缩也不会有太大的变化

- 只不过是图片特别多又特别大的时候，会压缩比较多的东西



### 9. 其他资源和静态资源的任务

- 我们要压缩的东西基本上就是这些了

- 剩下的东西，比如视频音频之类的，我们就没办法在压缩了

- 包括我们 `lib` 里面的内容，是第三方的，我们不需要压缩

- 我们直接进行转移就好了，只要把他们给放到 `dist` 文件夹里面就好

- 这里也不需要依赖了，我们直接转移就行了

  ```javascript
  // gulpfile.js

  // 引入 gulp 依赖
  const gulp = require('gulp')

  // 引入 gulp-cssmin 依赖
  const cssmin = require('gulp-cssmin')

  // 引入 gulp-autoprefixer 依赖
  const autoprefiexer = require('gulp-autoprefixer')

  // 引入 gulp-sass 依赖
  const sass = require('gulp-sass')

  // 引入 gulp-uglify 依赖
  const uglify = require('gulp-uglify')

  // 引入 gulp-babel 依赖
  const babel = require('gulp-babel')

  // 引入 gulp-htmlmin 依赖
  const htmlmin = require('gulp-htmlmin')

  // 引入 gulp-file-include 依赖
  const fileinclude = require('gulp-file-include')

  // 引入 gulp-imagemin 依赖
  const imagemin = require('gulp-imagemin')

  // 压缩 css 的任务
  gulp.task('css', function () { ... })

  // 压缩 sass 的任务
  gulp.task('sass', function () { ... })

  // 压缩 js 的任务
  gulp.task('js', function () { ... })

  // 压缩 html 的任务
  gulp.task('html', function () { ... })

  // 压缩 image 的任务
  gulp.task('image', function () { ... })

  // 转移 video
  gulp.task('video', function () {
      return gulp
      	.src('./src/static/videos/**')
          .pipe(gulp.dest('./dist/static/video'))
  })

  // 转移 audio
  gulp.task('audio', function () { ... })

  // 转移 lib
  gulp.task('lib', function () { ... })

  // 转移 data
  gulp.task('data', function () { ... })
  ```

  - 因为转移任务都是一样的，我就不一个一个写了，就是都转移过去就好了



### 10. 创建一个默认任务

- 我们的任务都创建完毕了，但是我们发现任务都是一个一个执行的

- 我们不能每次都一个任务一个任务的去执行啊

- 所以我们可以单独创建一个任务，这个任务的功能就是把其他任务都执行了

- 我们新创建的这个任务就叫做 `default`

  - 因为当你在命令行（终端）运行 `gulp` 指令的时候
  - 如果不写任务名称，会默认执行 `default` 任务

  ```javascript
  // gulpfile.js

  // 引入 gulp 依赖
  const gulp = require('gulp')

  // 引入 gulp-cssmin 依赖
  const cssmin = require('gulp-cssmin')

  // 引入 gulp-autoprefixer 依赖
  const autoprefiexer = require('gulp-autoprefixer')

  // 引入 gulp-sass 依赖
  const sass = require('gulp-sass')

  // 引入 gulp-uglify 依赖
  const uglify = require('gulp-uglify')

  // 引入 gulp-babel 依赖
  const babel = require('gulp-babel')

  // 引入 gulp-htmlmin 依赖
  const htmlmin = require('gulp-htmlmin')

  // 引入 gulp-file-include 依赖
  const fileinclude = require('gulp-file-include')

  // 引入 gulp-imagemin 依赖
  const imagemin = require('gulp-imagemin')

  // 压缩 css 的任务
  gulp.task('css', function () { ... })

  // 压缩 sass 的任务
  gulp.task('sass', function () { ... })

  // 压缩 js 的任务
  gulp.task('js', function () { ... })

  // 压缩 html 的任务
  gulp.task('html', function () { ... })

  // 压缩 image 的任务
  gulp.task('image', function () { ... })

  // 转移 video
  gulp.task('vider', function () { ... })

  // 转移 audio
  gulp.task('audio', function () { ... })

  // 转移 lib
  gulp.task('lib', function () { ... })

  // 转移 data
  gulp.task('data', function () { ... })

  // 创建默认任务
  gulp.task('default', gulp.parallel('css', 'sass', 'js', 'html', 'image', 'video', 'audio', 'lib', 'data'))
  ```

  - 默认任务的第二个参数不需要传递一个函数

  - 因为 `gulp.parallel()` 会返回一个函数放在这里

  - 我们这些任务也不需要先后顺序，并行执行就好了

  - 这个时候我们只要去命令行（终端）执行一下这个默认任务就可以了

    ```shell
    # 执行默认任务
    $ gulp
    ```

    - 这样就可以了。
    - 我们没有写任务名称，会自动执行 `default` 任务
    - `default` 任务就会把其他任务都执行了



###  11. 创建一个 DEL 的任务

- 到这里，`gulp` 基本使用问题不大了

- 但是一旦我们把某一个文件夹里面的文件修改一下名称，在次进行打包的时候会发现

- 打包出来的内容，不是把原先的改名字，而是多了一个内容

- 也就是说，我之前的那个内容还留着呢

- 那么我们就需要把这个问题解决掉

  - 最好是每次打包之前，能把 `dist` 文件夹删除了
  - 然后我们在进行打包
  - 这样的话，每次出来的都是根据最新的 `src` 目录下的源码进行打包的
  - 就不会有多余的内容出现了

- 删除一个文件夹，我们需要使用一个依赖

  - `$ npm install --save-dev del`

- 然后我们就引入进行配置

  ```javascript
  // gulpfile.js

  // 引入 gulp 依赖
  const gulp = require('gulp')

  // 引入 gulp-cssmin 依赖
  const cssmin = require('gulp-cssmin')

  // 引入 gulp-autoprefixer 依赖
  const autoprefiexer = require('gulp-autoprefixer')

  // 引入 gulp-sass 依赖
  const sass = require('gulp-sass')

  // 引入 gulp-uglify 依赖
  const uglify = require('gulp-uglify')

  // 引入 gulp-babel 依赖
  const babel = require('gulp-babel')

  // 引入 gulp-htmlmin 依赖
  const htmlmin = require('gulp-htmlmin')

  // 引入 gulp-file-include 依赖
  const fileinclude = require('gulp-file-include')

  // 引入 gulp-imagemin 依赖
  const imagemin = require('gulp-imagemin')

  // 引入 del 依赖
  const del = require('del')

  // 压缩 css 的任务
  gulp.task('css', function () { ... })

  // 压缩 sass 的任务
  gulp.task('sass', function () { ... })

  // 压缩 js 的任务
  gulp.task('js', function () { ... })

  // 压缩 html 的任务
  gulp.task('html', function () { ... })

  // 压缩 image 的任务
  gulp.task('image', function () { ... })

  // 转移 video 的任务
  gulp.task('vider', function () { ... })

  // 转移 audio 的任务
  gulp.task('audio', function () { ... })

  // 转移 lib 的任务
  gulp.task('lib', function () { ... })

  // 转移 data 的任务
  gulp.task('data', function () { ... })

  // 删除 dist 的任务
  gulp.task('del', function () {
      return del('./dist')
  })

  // 创建默认任务
  gulp.task('default', gulp.parallel('css', 'sass', 'js', 'html', 'image', 'video', 'audio', 'lib', 'data'))
  ```

  - 我们使用的时候之间告诉他把哪个文件夹删除了就行
  - 这个时候我们运行一下 `del` 任务就会发现 `dist` 文件夹被删除了



### 12. 逐步执行任务

- 我们创建好了 `del` 任务，接下来就是把他放到任务队列里面了

- 但是如果和其他任务并行的话，那么不一定哪个任务先完成

- 这个时候就会出现问题

  - 如果是删除的任务先完成，其他的后完成，那么没啥事
  - 但是如果其他的先完成，然后删除的任务完成了，那么已经打包好的文件就又被删除了

- 所以，这个时候我们就可以使用 `gulp.series()` 来进行按顺序完成任务

  - 因为这个方法的第二个参数的任务会在第一个参数的任务完成之后在执行

- 我们就要修改一下我们的 `default` 任务就可以了，其他不用改变

  ```javascript
  // gulpfile.js

  // 创建默认任务
  gulp.task('default', gulp.series(
  	'del',
      gulp.parallel('css', 'sass', 'js', 'html', 'image', 'video', 'audio', 'lib', 'data')
  ))
  ```

  - 我们在 `series()` 任务里面传递两个参数
    - 第一个参数是 `del`
    - 第二个参数是 并行执行一些其他任务
  - 这样的话，我们一运行 `default` 任务的时候
    - 就会先执行 `del` 任务，等 `del` 任务执行完毕，`dist` 文件夹已经被删除了
    - 才会在继续执行我们其他的哪些打包压缩的任务
    - 就不会有问题了



###  13. 创建一个监控的任务

- 我们的 `gulpfile.js` 文件配置到现在，基本已经差不多了

- 但是我们发现一个问题，就是我每次修改源代码都要执行一下 `default` 任务，才能同步

- 那么我们就需要一个监控任务来监控着我的文件夹变化，只要文件夹发生变化就给我从新打包压缩一下

- 这里我们不需要依赖，直接使用 `gulp.watch()` 来进行文件监控就可以了

  ```javascript
  // gulpfile.js

  // 引入 gulp 依赖
  const gulp = require('gulp')

  // 引入 gulp-cssmin 依赖
  const cssmin = require('gulp-cssmin')

  // 引入 gulp-autoprefixer 依赖
  const autoprefiexer = require('gulp-autoprefixer')

  // 引入 gulp-sass 依赖
  const sass = require('gulp-sass')

  // 引入 gulp-uglify 依赖
  const uglify = require('gulp-uglify')

  // 引入 gulp-babel 依赖
  const babel = require('gulp-babel')

  // 引入 gulp-htmlmin 依赖
  const htmlmin = require('gulp-htmlmin')

  // 引入 gulp-file-include 依赖
  const fileinclude = require('gulp-file-include')

  // 引入 gulp-imagemin 依赖
  const imagemin = require('gulp-imagemin')

  // 引入 del 依赖
  const del = require('del')

  // 压缩 css 的任务
  gulp.task('css', function () { ... })

  // 压缩 sass 的任务
  gulp.task('sass', function () { ... })

  // 压缩 js 的任务
  gulp.task('js', function () { ... })

  // 压缩 html 的任务
  gulp.task('html', function () { ... })

  // 压缩 image 的任务
  gulp.task('image', function () { ... })

  // 转移 video 的任务
  gulp.task('vider', function () { ... })

  // 转移 audio 的任务
  gulp.task('audio', function () { ... })

  // 转移 lib 的任务
  gulp.task('lib', function () { ... })

  // 转移 data 的任务
  gulp.task('data', function () { ... })

  // 删除 dist 的任务
  gulp.task('del', function () { ... })

  // 创建一个监控变化的任务
  gulp.task('watch', function () {
    gulp.watch('./src/css/*.css', gulp.series('css'))
    gulp.watch('./src/sass/*.sass', gulp.series('sass'))
    gulp.watch('./src/js/*.js', gulp.series('js'))
    gulp.watch('./src/pages/*.html', gulp.series('html'))
    gulp.watch('./src/lib/**', gulp.series('lib'))
    gulp.watch('./src/data/**', gulp.series('data'))
    gulp.watch('./src/static/images/**', gulp.series('image'))
    gulp.watch('./src/static/videos/**', gulp.series('video'))
    gulp.watch('./src/static/audios/**', gulp.series('audio'))
  })

  // 创建默认任务
  gulp.task('default', gulp.series(
  	'del',
      gulp.parallel('css', 'sass', 'js', 'html', 'image', 'video', 'audio', 'lib', 'data'),
      'watch'
  ))
  ```

  - 我们创建好 `watch` 任务以后，在 `default` 任务里面进行一下执行就好
  - 我们就把他排在第三个任务列表的位置就好
  - 这样会在所有的文件打包好以后就开始监控

- 这个时候我们再次执行 `default` 任务的时候

  - 就不会打包完毕退出指令了
  - 会一致在闪烁等待
  - 然后你对所有文件进行修改，就会进行自动重新打包编译了

- 这个时候，比如

  - 当你修改 `src/css` 目录下的内容的时候，就会自动重新执行 `css` 任务
  - 当你修改 `src/sass` 目录下的内容的时候，就会自动重新执行 `sass` 任务

- 那么我们的 `dist` 文件夹里面的内容就是实时和我们 `src` 目录下同步的内容



### 14. 自动打开浏览器和热刷新的任务

- 我们为什么一定要 `dist` 和 `src` 同步呢

- 是因为我们可以依靠 `gulp` 给我们自动打开一个浏览器页面

- 随着我们的书写，不需要我们手动刷新浏览器，他会自动对浏览器进行刷新

- 也就是说，我们只要写就行了，他会自动的刷新，我们直接就可以看到结果

- 自动打开浏览器和热刷新需要一个依赖

  - `$ npm install --save-dev gulp-webserver`

- 下载好以后我们去进行配置就可以了

  ```javascript
  // gulpfile.js

  // 引入 gulp 依赖
  const gulp = require('gulp')

  // 引入 gulp-cssmin 依赖
  const cssmin = require('gulp-cssmin')

  // 引入 gulp-autoprefixer 依赖
  const autoprefiexer = require('gulp-autoprefixer')

  // 引入 gulp-sass 依赖
  const sass = require('gulp-sass')

  // 引入 gulp-uglify 依赖
  const uglify = require('gulp-uglify')

  // 引入 gulp-babel 依赖
  const babel = require('gulp-babel')

  // 引入 gulp-htmlmin 依赖
  const htmlmin = require('gulp-htmlmin')

  // 引入 gulp-file-include 依赖
  const fileinclude = require('gulp-file-include')

  // 引入 gulp-imagemin 依赖
  const imagemin = require('gulp-imagemin')

  // 引入 del 依赖
  const del = require('del')

  // 引入 webserver 依赖
  const webserver = require('gulp-webserver')

  // 压缩 css 的任务
  gulp.task('css', function () { ... })

  // 压缩 sass 的任务
  gulp.task('sass', function () { ... })

  // 压缩 js 的任务
  gulp.task('js', function () { ... })

  // 压缩 html 的任务
  gulp.task('html', function () { ... })

  // 压缩 image 的任务
  gulp.task('image', function () { ... })

  // 转移 video 的任务
  gulp.task('vider', function () { ... })

  // 转移 audio 的任务
  gulp.task('audio', function () { ... })

  // 转移 lib 的任务
  gulp.task('lib', function () { ... })

  // 转移 data 的任务
  gulp.task('data', function () { ... })

  // 删除 dist 的任务
  gulp.task('del', function () { ... })

  // 创建一个监控变化的任务
  gulp.task('watch', function () { ... })
  
  // 创建一个自动打开浏览器的任务
  gulp.task('webserver', function () {
    return gulp
      .src('./dist')
      .pipe(webserver({
        host: 'localhost',
        port: 3000,
        open: './pages/index.html',
      livereload: true
      }))
  })
  
  // 创建默认任务
  gulp.task('default', gulp.series(
  	'del',
      gulp.parallel('css', 'sass', 'js', 'html', 'image', 'video', 'audio', 'lib', 'data'),
      'webserver',
    'watch'
  ))
  ```
  
  - 自动打开浏览器，肯定是打开我们打包好的文件，所以我们的 `src` 方法要找到 `dist` 目录来执行
  - 使用 `gulp-webserver` 需要一些参数的配置
    - `host`： 打开的域名
    - `port`： 打开的端口号
    - `open`： 默认打开哪个页面（从 `dist` 下面开始写就好了）
    - `livereload`： 是否自动刷新浏览器
  - 注意： **`webserver` 这个任务要在 `watch` 任务之前**
    - 因为 `series` 方法是前一个任务完成了，在执行后一个任务
    - `watch` 任务没有完成的时候，是一直在监控着
    - 所以如果写在 `watch` 后面就没有办法执行了



#### 代理的配置

- 因为我们启动了一个服务器

- 如果发送请求不是和自己同源的内容，那么就会触发同源策略了

- 但是我们的 `webserver` 是可以配置代理的

- 因为 `gulp` 给我们启动的服务器就是一个 `node` 的服务器

- 我们的代理，只要在 `webserver` 里进行配置就好了

  ```javascript
  // 创建一个自动打开浏览器的任务
  gulp.task('webserver', function () {
    return gulp
      .src('./dist')
      .pipe(webserver({
        host: 'localhost',
        port: 3000,
        open: './pages/index.html',
        livereload: true,
        proxies: [ // 所有的代理都放在这里数组里面
            {
                source: '/a', // 代理请求标识符
                target: 'https://www.xxx.com' // 你要代理的地址
            },
            {
                source: '/b',
                target: 'https://www.yyy.com'
            }
        ]
      }))
  })
  ```

  - 这样配置完毕以后，你在请求的时候，只要请求 `/a` 或者 `/b` 这个地址
  - 就会有服务器给你转发请求，形成反向代理来获取到数据了



## 完整版配置文件

- 放一个完整版的配置文件

- 左右需要的依赖包

  ![](./assets/gulp依赖包.png)

- 完整版配置文件

  ```javascript
  // gulpfile.js

  const gulp = require('gulp')
  const cssmin = require('gulp-cssmin')
  const autoprefiexer = require('gulp-autoprefixer')
  const sass = require('gulp-sass')
  const uglify = require('gulp-uglify')
  const babel = require('gulp-babel')
  const htmlmin = require('gulp-htmlmin')
  const fileinclude = require('gulp-file-include')
  const imagemin = require('gulp-imagemin')
  const del = require('del')
  const webserver = require('gulp-webserver')

  gulp.task('css', function () {
    return gulp
      .src('./src/css/*.css')
      .pipe(autoprefiexer())
      .pipe(cssmin())
      .pipe(gulp.dest('./dist/css'))
  })

  gulp.task('sass', function () {
    return gulp
      .src('./src/sass/*.scss')
      .pipe(sass())
      .pipe(autoprefiexer())
      .pipe(cssmin())
      .pipe(gulp.dest('./dist/css'))
  })

  gulp.task('js', function () {
    return gulp
      .src('./src/js/*.js')
      .pipe(babel({
        presets: ['@babel/env']
      }))
      .pipe(uglify())
      .pipe(gulp.dest('./dist/js'))
  })

  gulp.task('html', function () {
    return gulp
      .src('./src/pages/*.html')
      .pipe(fileinclude({
        prefix: '@-@',
        basepath: './src/components'
      }))
      .pipe(htmlmin({
        removeComments: true,
        removeEmptyAttributes: true,
        collapseWhitespace: true,
        collapseBooleanAttributes: true,
        minifyCSS: true,
        minifyJS: true
      }))
      .pipe(gulp.dest('./dist/pages'))
  })

  gulp.task('image', function () {
    return gulp
      .src('./src/static/images/**')
      .pipe(imagemin({
        progressive: true,
        optimizationLevel: 7
      }))
      .pipe(gulp.dest('./dist/static/images'))
  })

  gulp.task('video', function () {
    return gulp
      .src('./src/static/videos/**')
      .pipe(gulp.dest('./dist/static/video'))
  })

  gulp.task('audio', function () {
    return gulp
      .src('./src/static/audios/**')
      .pipe(gulp.dest('./dist/static/audio'))
  })

  gulp.task('lib', function () {
    return gulp
      .src('./src/lib/**')
      .pipe(gulp.dest('./dist/lib'))
  })

  gulp.task('data', function () {
    return gulp
      .src('./src/data/**')
      .pipe(gulp.dest('./dist/data'))
  })

  gulp.task('del', function () {
    return del('./dist')
  })

  gulp.task('watch', function () {
    gulp.watch('./src/css/*.css', gulp.series('css'))
    gulp.watch('./src/sass/*.sass', gulp.series('sass'))
    gulp.watch('./src/js/*.js', gulp.series('js'))
    gulp.watch('./src/pages/*.html', gulp.series('html'))
    gulp.watch('./src/lib/**', gulp.series('lib'))
    gulp.watch('./src/data/**', gulp.series('data'))
    gulp.watch('./src/static/images/**', gulp.series('image'))
    gulp.watch('./src/static/videos/**', gulp.series('video'))
    gulp.watch('./src/static/audios/**', gulp.series('audio'))
  })

  gulp.task('webserver', function () {
    return gulp
      .src('./dist')
      .pipe(webserver({
        host: 'localhost',
        port: 3000,
        open: './pages/index.html',
        livereload: true,
        proxies: [
          {
            source: '/a',
            target: ''
          }
        ]
      }))
  })

  gulp.task('default', gulp.series(
    'del',
    gulp.parallel('css', 'sass', 'js', 'html', 'image', 'video', 'audio', 'lib', 'data'),
    'webserver',
    'watch'
  ))
  ```
