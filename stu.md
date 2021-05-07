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