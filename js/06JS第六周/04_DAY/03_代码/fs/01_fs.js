/*
  fs 模块也是一个 node 内置的模块
    + 专门用来读写文件的
    + 使用的时候直接导入就可以了

  1. readFile()
    + 异步读取文件内容的方法
    + 语法： readFile(你要读取的文件路径，function (err, data) {
      // 读取文件的回调函数

      // 如果你再读取的过程中出错了
      // 那么 err 就是错误信息，就没有 data
      // 如果没有错误，那么 err 就没有内容
      // data 就是你读取到的内容（默认读取到的内容是 buffer 字符串）
    })
    + 第二个参数： 你读取的文件的格式
      + 默认是 buffer
      + 可以写成 utf8

  2. writeFile()
    + 异步写入文件
    + 语法： writeFile(你要写入的路径，你写入的文件内容，function (err) {
      // 会在写入完成以后执行
      // 虽然没什么太大的用处，但是必须写
    })
    + 写入的时候，如果按照你写的路径能够找到一个文件，那么就向文件里面写入
    + 如果找不到对应的文件，那么直接新建一个文件写入
    + 写入是一个完全覆盖式的写入

  3. readFileSync()
    + 同步读取文件
    + 语法： const res = readFileSync(你要读取的文件， 读取文件的格式)
      + 如果出错了，直接阻断程序继续执行
      + 如果没有错，res 就是你读取到的内容

  4. writeFileSync()
    + 同步写入文件
    + 语法： fs.writeFileSync(你要写入的文件，你要写入的内容)
      + 如果成功改了，那么代码会继续向下执行
      + 如果出错了，直接阻断程序继续执行
    + 是一个完全覆盖式的写入
*/

// 导入 fs 模块
const fs = require('fs')

// 使用 fs 模块的方法读取文件
// fs.readFile('./01.txt', 'utf8', function (err, data) {
//   console.log(err)
//   console.log(data)
// })

// 使用 fs 模块的方法写入文件
// fs.writeFile('./01.txt', 'hello world', function () {
//   console.log('写入完毕')
// })


// fs.readFile('./01.txt', 'utf8', (err, data) => {
//   if (err) {
//     console.log(err)
//     return
//   }

//   // 来到这里没有问题
//   // 就要像文件里面写入
//   fs.writeFile('./ceshi.txt', data + '你好 世界', function () {
//     console.log('写入完毕')
//   })
// })

// 同步读取内容
// const res = fs.readFileSync('./01.txt', 'utf8')
// console.log(res)

// 同步写入内容
// fs.writeFileSync('./01.txt', '你好 世界')
// console.log('写如完成')
