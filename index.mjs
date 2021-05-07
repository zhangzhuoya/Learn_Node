//这样只是某一个文件时es模块化

import * as obj from "./a.mjs";
console.log(obj);//[Module: null prototype] { a: 1, default: 5 }和es6
// 模块一样 都是v8引擎解析的


// import('./a/mjs').then()//通过异步加载的方式