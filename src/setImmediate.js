const fs = require('fs');
fs.readFile('./index.js',(req,res)=>{
    setTimeout(()=>{console.log(1)});
    setImmediate(()=>{console.log(2)});
})
// 先把setTimout加入times中，然后把setImmediate加入到checks中，此时poll没有了，按照顺序执行check，然后执行times
// poll-> times 1