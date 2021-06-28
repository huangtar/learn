/*
  node 的 js 代码里面有一个属性
    __dirname ,当前文件所在的路径
    __filename ,当前这个代码所在的文件路径

  path 这个模块
    + 专门用来处理路径的
    + 有一个方法叫做 join 是用来拼接路径的
    + 所有的参数都是路径的一部分，他会给你拼接起来返回

  内置模块
    + 用的时候直接导入就可以了
*/

const path = require('path')
const res = path.join(__dirname, '../01_node.html')
console.log(res)
