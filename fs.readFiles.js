const fs = require("fs");
const path = require("path")
// fs.readFile("./myFiles/1.txt")//相对于命令提示符，除了requie导入文件，其他都是相对于命令提示符,一般不会用相对路径运行，使用绝对路径，借助path模块。
const filename = path.resolve(__dirname,"./myFiles/1.txt");
// fs.readFile(filename,(err,content)=>{
//     console.log(content);//<Buffer e9 98 bf e6 8b 89 e6 96 af e5 8a a0 0d 0a e5 ae 89 e5 be bd e5 8f 91 e5 8a a8 e6 9c ba e5 95 8a e5 b8 88 e5 82 85 e5 8d a1 e6 ad bb e7 9a 84 e8 ba ab ... 87 more bytes>
//     //拿出来的是字节数组
//     console.log(content.toString("utf-8"));//使用utf-8转化为文字
// })

// fs.readFile(filename,"utf-8",(err,content)=>{//传编码读出的是字符串
//     console.log(content);//读出的都是字符串
// })

// fs.readFile(filename,"utf-8",(err,content)=>{//传编码读出的是字符串
//     console.log(content);//读出的都是字符串
// })

//也可以写成对象的形式
// fs.readFile(filename,{
//     encoding:"utf-8"
// },(err,content)=>{//传编码读出的是字符串
//     console.log(content);//读出的都是字符串
// })
//为啥是异步的写法，因为读文件的时候时间比较长，一条语句0.001ms 一条读文件的语句 10ms，写成异步 在时间队列里面，不会影响后续代码
// 在fs模块里面 大部分都是异步回调模式
const content = fs.readFileSync(filename,"utf-8")//同步读取文件,一般在初始化的时候会使用，sync是同步的，会导致js运行堵塞 ，及其影响性能。一般通常在程序启动时，运行有限的次数就可以。
console.log(content);
console.log('dddd');

// 在node12中开启了 fs.promises.
async function test() {
   const content = await fs.promises.readFile(filename,'utf-8')
   console.log(content);
}
test()