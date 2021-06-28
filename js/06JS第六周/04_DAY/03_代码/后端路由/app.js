/*
  后端路由
    + 根据你请求的不同路径标识符，给你返回不同的内容
    + 建立在以一个服务的基础上
*/

// 0. 导入模块
const http = require('http')
const fs = require('fs')
const path = require('path')

// 1. 开启一个服务
const server = http.createServer(function (req, res) {
  // 有一个 url 表示你请求的地址

  // 你想请求 html 文件，我就应该给你返回一个 index.html 这个文件
  // 读取出文件的内容给你返回
  // 先要判断你的后缀是 html
  if (/(\.html)$/.test(req.url)) {

    // console.log(req.url)
    const file = path.join(__dirname, req.url)
    // console.log(file)

    // 证明这个歌请求时 html 文件
    fs.readFile(file, 'utf8', (err, data) => {
      if (err) {
        console.log(err)
        return
      }

      // data 就是我读取出来的 html 文件
      // 返回给前端就好了
      res.end(data)
    })
  }

  if (/(\.css)$/.test(req.url)) {
    const file = path.join(__dirname, req.url)
    console.log(file)
    fs.readFile(file, 'utf8', (err, data) => {
      if (err) {
        console.log(err)
        return
      }

      res.end(data)
    })
  }

  if (/(\.js)$/.test(req.url)) {
    const file = path.join(__dirname, req.url)
    console.log(file)
    fs.readFile(file, 'utf8', (err, data) => {
      if (err) {
        console.log(err)
        return
      }

      res.end(data)
    })
  }
})

// 2. 监听端口
server.listen(8080, () => {
  console.log('listening on port 8080!')
})
