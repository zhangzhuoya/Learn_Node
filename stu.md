## 1-05 基本内置模块
### os
os.EOL：一行结束的分隔符 
- \n 
- \r\n windows
os.arch():获取cpu的架构名(主要是x32 x64)

- os.cpus(): 获取cpu的信息核数
- os.freemem():获取还有多少内存可以用
- os.homedir():用户目录
- os.hostname():获取主机名字
- os.tmpdir():获取操作系统的临时目录

### fs
> 文件路径：filname d:\xxx\xxx\aaa.html
> basename aaa.html

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