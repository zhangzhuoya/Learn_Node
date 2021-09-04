
setImmediate(()=>{
    console.log('1');
},0)
process.nextTick(()=>{
    console.log('2');
    process.nextTick(()=>{
        console.log('3');
    })
})
console.log('4');
Promise.resolve().then(()=>{
    console.log(5);
    process.nextTick(()=>{
        console.log(6);
    })
})
// 4,2,3,5,6,1