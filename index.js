const os = require('os')
console.log(os.EOL);//或
console.log(os.arch());//获取cpu的架构名 x32和x64

// 获取从cpu的内核
console.log(os.cpus().length);
console.log(os.freemem()/2 ** 30);//获取当前还有多少内存，打印出来的都是字节

console.log(os.hostname());//获取主机名字

console.log(os.tmpdir());//获取操作系统的目录


//关于require

const path = require("path");
// const basename = path.basename("df/afd/dsf/a.html")
// console.log(basename);//a.html
const basename = path.basename("df/afd/dsf/a.html",'.html')//参数二 用来匹配后缀名，如果匹配去掉html。如果不匹配 a.html
console.log(basename);//a

// 分隔符
console.log(path.sep);// \

console.log(path.delimiter);//不同的分割，window用；分割

console.log(process.env.PATH.split(path.delimiter))


// 
const dir = path.dirname("a/b/c/d");


// join
const fullname = path.join('a','b','c','../','d.js')
console.log(fullname);//   a\b\d.js

// normalize()

const path = path.normalize();


//relative
// resolve()
const absPath = path.resolve('./a.js')//相对于命令行
console.log(absPath);