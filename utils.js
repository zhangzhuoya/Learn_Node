//工具包
let util = require("util");
// async function delay(duration = 1000) {
//     return new Promise(resolve=>{
//         setTimeout(()=>{
//             resolve(duration)
//         },duration)
//     })
// }
// delay().then(resolve=>{
//     console.log(resolve);
// })

//把异步函数变成回调模式 ** 
// const delayCallback = util.callbackify(delay);
// delayCallback(500,(err,d)=>{
//     console.log(d);
// })

// 把回调模式转为异步模式 **
// function delayCallBack(duration, callback){
//     setTimeout(()=>{
//     callback(null,duration);
//     },duration)
// }
// const delay = util.promisify(delayCallBack)
// delay(5000).then(d=>{
//     console.log(d);
// })

// function delayCallBack(duration, callback){
//         setTimeout(()=>{
//         callback(null,duration);
//         },duration)
//     }
// const delay = util.promisify(delayCallBack);
// (async ()=>{
//     const r = await delay(500);
//     console.log(r);
// })()

//深度严格比较

const obj1 = {
    a:1,
    b:{
        a:1,
        b:2
    }
}
const obj2 = {
    a:1,
    b:{
        a:1,
        b:9
    }
}
console.log(util.isDeepStrictEqual(obj1,obj2));