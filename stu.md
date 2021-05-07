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