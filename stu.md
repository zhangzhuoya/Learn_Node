## 文件流
1. 什么流
> 流是指数据的流动，数据从一个地方缓缓的流动到另一个地方  数据 <--> 数据，比如内存可以流动到硬盘。
2. 流是有方向的
   1. 可读流： Readable 数据从源头流向内存
   2. 可写流   Writable 数据从内存流向源头
   3. 双工流   Duplex 数据即可以从源头流动到内存，又可以从内存流向源头
3. 为什么需要流
   1. 其他介质和内存数据规模不一致，比如磁盘中可以装很多数据，但是内存中装的数据比较小，所以当我们从磁盘中读取大量数据时，需要一部分一部分放到内存中
   2. 其他的介质和内存函数数据处理能力不一致 内存中处理数据比较快 但是硬盘中比较慢，如果内存中数据一下子放到硬盘中，那么比较卡，会影响到其他部分。
4. 什么是文件流
   1. 内存数据和磁盘文件数据之间的流动
5. 文件流的创建
   fs.createReadStream(path[,options])
   含义：表示一个文件可读流，用于读取文件内容
   path: 文件读取的路径
   options：可选配置
      encoding:编码方式
      start: 起始字节
      end：结束字节
      highWateMark：每次读取的数量 会受到encoding的影响
   返回：Readable的子类ReadStream,比如事件：rs.on(事件名，处理函数)
   事件名：  open: 文件打开事件，文件被打开后会触发
            error：文件出错了会触发
            colse：文件关闭时触发
            data：读取到一部分数据后会触发
                 注册data事件后，才会真正的开始读取
                 每次读取highWaterMark指定的数量
                 回调函数中会附带读取到的数据
            end: 全部事件读取完毕
        rs.pause()：暂停读取，会触发pause事件
        rs.resume(): 恢复读取，会触发  

```js
const fs = require("fs");
const path = require("path")
const filename = path.resolve(__dirname,"./abc.txt");
const rs = fs.createReadStream(filename,{
    encoding: "utf-8",//字节
    highWaterMark: 1,
    autoClose: true//读完后会自动关闭，避免占用文件，导致不能删除文件
});
rs.on("open",()=>{
    console.log("文件被打开了");
})
rs.on("error",()=>{
    console.log("出现错误了")
})
let str = "";
rs.on("data",(chunk)=>{
    console.log("文件关闭了"chunk)
    rs.pause()
    str+=chunk;
})
rs.on('pause',()=>{
    console.log('读取暂停了')
})
rs.on('resume',()=>{
    console.log('读取恢复了')
})
rs.on("end",(chunk)=>{
    console.log("读取文件的过程中会触发，读到一部分数据了"，chunk,res)
})
```
正常使用流的操作
```js

```
6. node中提供的模块
```js
// 提供了两个类
  const {Readable,Wriable} = require("stream);
```
## 写入流
1. 创建一个写入流
   fs.createWriteStream(path[,options])
path: 写入流的路径
options：flags：操作文件的类=方式   