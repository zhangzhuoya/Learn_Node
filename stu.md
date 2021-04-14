## 1-05 基本内置模块
给


filname d:\xxx\xxx\aaa.html
basename aaa.html

//关于require
const path = require("path");
// const basename = path.basename("df/afd/dsf/a.html")
// console.log(basename);//a.html
const basename = path.basename("df/afd/dsf/a.html",'.html')//参数二 用来匹配后缀名，如果匹配去掉html。如果不匹配 a.html
console.log(basename);//a