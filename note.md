## 1-2 全局对象
> 安装： npm i -D @types/node（智能提示）
node中的全局对象是global就像浏览器中的window
这里的所有属性否可以直接用，因为是全局对象
里面有一个global
```js
console.log(global);
let obj = {
    setTimeout: {
    },
    console: {
    }
}
obj.global = obj;
console.log(global);
```


## 1-05 基本内置模块
filname d:\xxx\xxx\aaa.html
basename aaa.html

//关于require
const path = require("path");
// const basename = path.basename("df/afd/dsf/a.html")
// console.log(basename);//a.html
const basename = path.basename("df/afd/dsf/a.html",'.html')//参数二 用来匹配后缀名，如果匹配去掉html。如果不匹配 a.html
console.log(basename);//a
## 1-06 文件流
### 文件状态信息
```js
const fs = require('fs');
const path = require("path");
const filename = path.resolve(__dirname,"./myfiles/1.txt");
async function test() {
    const stat = await fs.promises.stat(filename);
    console.log(stat);
    console.log('是否是目录',stat.isDirectory());
    console.log('是否是目录',stat.isFile());
}
test()
```
### 得到目录及文件信息
```js
const fs = require('fs');
const path = require("path");
const filename = path.resolve(__dirname,"./myfiles/");
async function test() {
    const pathes = await fs.promises.readdir(filename);
    console.log(pathes);
    
}
test()
```
### 创建目录
```js
const fs = require('fs');
const path = require("path");
const filename = path.resolve(__dirname,"./myfiles/4.txt");
async function test() {
  await fs.promises.mkdir(filename)
  console.log('创建目录成功');
    
}
test()
```
### 判断目录是否存在
```js
const fs = require('fs');
const path = require("path");
const filename = path.resolve(__dirname,"./myfiles/sub");

async function exists(filename) {
  try {
    await fs.promises.stat(filename)
    return true;
  } catch (error) {
    if (error.code=="ENOENT") {
      //文件不存在
      return false
    }
    throw error;
  }
}

async function test() {
  const result = await exists(filename)
  if (result) {
    console.log('文件已经存在');
  }else{
    await fs.promises.mkdir(filename)
    console.log('创建目录成功');
  }
    
}
test()
```



### Node的模块化细节
1. 绝对路径，通常用来导入文件
```js
require('D:\\study\\Learn_Node\\a.js')
```
2. 相对路径：相对于当前文件目录导入 ./  ../

```js
require('abc')
```
3. 后缀名，会自动补全，先自动补js 然后补json，然后node然后是mjs

4. 如果只提供目录，那么自动寻找该目录下的index.js
5. module对象 ：记录当前模块的信息
6. require
7. 原理

## node生命周期
- 多线程

先进入main ，运行主函数,依次循环进入六个阶段，（timers,poll,check）,每一个阶段维护一个事件队列，进入队列，查看回调函数，依次执行回调函数，然后进入下一个队列。
- timers阶段:存放计时器的回调函数 setTimeout()
- poll：轮询队列，除了timers，checks，绝大部分回调都会放到该队列，如：文件的读取，监听用户的请求(http.createServer)
> poll运作方式，如果poll中有回调，依次执行回调，一直到清空，如果没有poll回调，等待其他队列  中出现回调。结束该阶段进入下一阶段, 如果其他队列中也没有回调，持续等待，直到出现回调为止。一直等到操作系统受不了，lib库，封装底层操作系统
- check阶段：运行setImmediate
> 使用setImmediate的回调会直接进入该队列，可以想象成setTimeout，为啥会分为两个对列，timers队列是通过c检查计时器线程依次检查执行,一个计时器一个计时器拿出来看，进行运算，比较耗费时间,setImmediate,运算时间少，

```js
const start = Date.now();
setTimeout(function f1() {
    console.log('setTimeout',Date.now() - start);//300
},300)
console.log(123);
const http = require('http');
const server = http.createServer((req,res)=>{
    console.log('request ;oseter');
})
const fs = require('fs');
fs.readFile('./index.js','utf-8',function f2(err,data) {
    console.log("readFile");
    const start = Date.now();
    while ( Date.now()-start< 300) {
    }

})
server.listen(9527)
// 首先进入timers ，看有没有计时器需要运行，目前没有，需要等待200毫秒后运行,此时计时器是空的
// 2. 进入轮询poll，也是空的，然后不断轮询，发现文件读取完成，执行f2，但是有while循环，卡住了，然后等while循环结束后，poll清空，
// 然后进入timers，执行计时器，此时是秒数已经超过300毫秒，所以计时器在300毫秒后执行。timers没有回调函数，进入poll
// 3. check: 检查阶段： 使用setImmediate的回调会直接进入该队列，可以想象成setTimeout，
// 为啥会分为两个对列，timers队列是通过c检查计时器线程依次检查执行,一个计时器一个计时器拿出来看，进行运算，比较耗费时间
// setImmediate,运算时间少，
```
- Promise: 微队列，
- nextTick：微队列，先执行nextTick，优先级大于Promise，
```js
setImmediate(()=>{
    console.log('1');
},0)
process.nextTick(()=>{
    console.log('2');
    process.nextTick(()=>{
        console.log('3');
    })
})
console.log('4');
Promise.resolve().then(()=>{
    console.log(5);
    process.nextTick(()=>{
        console.log(6);
    })
})
// 4,2,3,5,6,1
```
```js
const fs = require('fs');
fs.readFile('./index.js',(req,res)=>{
    setTimeout(()=>{console.log(1)});
    setImmediate(()=>{console.log(2)});
})
// 先把setTimout加入times中，然后把setImmediate加入到checks中，此时poll没有了，按照顺序执行check，然后执行times
// poll-> times 1
```
```js
setTimeout(()=>{
    console.log('setTimeout');
},0)//通常时间为1,和计算机运行速度有关
setImmediate(()=>{
    console.log('setImmediate');
},0)
```
> 事件循环中每次打算执行一个回调之前，必须先清空nextTick和Promise
> 历史原因：为了尽快执行，出现了check