/*
  http
    + 是一个 node 的内置模块
    + 专门用来开启 http 服务的
    + 使用的时候就是直接导入使用就行

  使用 http 模块开启一个服务
    + createServer()
    + 语法： const server = http.createServer(function () {})
      + server 表示当前服务
      + 回调函数，当有请求来的时候就会执行
      + 默认监听 127.0.0.1 域名
    + listen()
    + 用来监听一个端口号
      + 语法： listen(你要监听的端口号，回调函数)
      + 回调函数会在监听成功的时候执行
*/

// 导入 http 模块
const http = require('http')

// 创建一个服务
const server = http.createServer(function (req, res) {
  console.log('有请求进来了')
  // 每一个请求进来的时候都会执行这个函数
  // 这个函数可以接受两个形参
  // req: request 表示当前请求
  // res：response 给当前请求的一个响应
  // console.log(req)

  // res 是专门给本次请求一个响应
  // 也是一个对象，里面有各种各样的方法
  // res.end() 给客户端一个响应信息
  //   只能传递字符串
  res.end('hello world')
})

// 表示我现在这个服务监听的是 8080 端口号
server.listen(8080, () => {
  console.log('listening op port 8080!')
})
