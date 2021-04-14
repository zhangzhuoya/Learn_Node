const fs = require('fs');
const path = require("path")
let filename = path.resolve(__dirname,"./myfiles/1.txt")
console.log(filename);
// 读取文件内容
fs.readFile(filename,"utf-8",(error,content)=>{
    console.log(content);//得到的是字节数字数组
    // console.log(content.toString("utf-8"));//转化为汉字
})//相对于命令提示符

// 为什么是回调函数，异步处理，读取文件时间较长。
// Sync函数是同步的，会导致js运行阻塞，及其影响性能，通常在程序启动的时候运行有限的次数
// const content = fs.readFileSync(filename,"utf-8")//同步运行太卡

//es6出来后
async function test(){
    const content = await fs.promises.readFile(filename,"utf-8");
    console.log(content);
}
test()