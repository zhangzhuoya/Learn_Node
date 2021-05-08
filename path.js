const path = require("path");

// const basename = path.basename("fdf/safa/asdf/a.html",'.html')//参数二 匹配后缀名字，如果匹配 去掉反之
// console.log(basename);//a.html

// console.log(path.sep);//分隔符  \ mak是左斜杠

// console.log(path.delimiter);//指的是不同的分割，比如环境变量 用；分割

// const dir = path.dirname('a/a/c/d.js')
// console.log(dir);//获取目录   a/a/c

// const ext = path.extname('a/b/c/d')//文件的后缀名
// console.log(ext);// .js  没有是空的字符串

// const fullpath = path.join("a","b","c","d.js");
// console.log(fullpath);  // a/b/c/d.js

// const normalize =  path.normalize('foo/')

// const relative = path.relative('/data/orandea/test/aaa','/data/orandea/impl/bbb')//根据两边的路径 换成相对路径的格式,右边的路径根据左边的找到相对的路径
// console.log(relative);

// const absPath = path.resolve("./a.js");//获取当前的绝对路径，相对于命令行
// console.log(absPath);

const absPath = path.resolve(__dirname,"./a.js");//获取当前的绝对路径，相对于命令行
console.log(absPath);


