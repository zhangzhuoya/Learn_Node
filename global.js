// console.log(global);
// let obj = {
//     setTimeout: {
//     },
//     console: {
//     }
// }
// obj.global = obj;
// console.log(global);

// 1. setTimeout
// const timer = setTimeout(()=>{},1000);//返回值是一个对象
// console.log(timer);
// 2. setImmediate: 类似于setTimeout 0（暂时可以这么理解）
// 区别：

// 3. console

// 4. __dirname: 获取当前模块所在的路径，不是global中的属性
// console.log(__dirname);

// 5. __filename: 获取当前模块的文件路径，并非global属性
// console.log(__filename);

// 6. Buffer:类型化数组，继承至UInt8Array,计算机中存储的基本单位：字节，使用时输出时，可能用16进制表示

// let buffer = Buffer.from("abcdefghigkl","utf-8");
// console.log(buffer);
// 7. process
//    1. cwd:获取当前的命令行

// console.log('当前命令行',process.cwd());//运行node的时候当前命令行所在的路径，工作目录
// 当前命令行 [Function: wrappedCwd]
//    2. exit：强制退出,删除进程 退出
// setTimeout(()=>{
// console.log('强制退出');
// },1000)
// process.exit(0)//参数，一些错误提示

//    3. argv 
//console.log(process.argv);
//[
//    'D:\\Program Files\\nodejs\\node.exe',
//    'd:\\study\\Learn_Node\\global.js'
//  ]

//    4. platform
console.log(process.platform);
//win32:表示的是平台的版本，表示支持的平台的版本

//    5. kill(pid):杀死进程：传入一个进程的id
// process.kill()//
