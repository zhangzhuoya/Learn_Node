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