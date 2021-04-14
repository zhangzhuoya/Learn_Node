const fs = require('fs');
const path = require('path');

const filename = path.resolve(__dirname,"./myfiles/1.txt");

// async function test() {
//  await fs.promises.writeFile(filename,'abc');//会覆盖之前的
//  console.log('写入成功');
// }
// test()

// async function test() {
//     await fs.promises.writeFile(filename,'大yy 概豆腐干豆腐干',{
//         flags:'aa'//追加内容，不会覆盖
//     });
//     console.log('写入成功');
//    }
//    test()
//    buffer形式
async function test1() {
    const buffer = Buffer.from('abcdw',"utf-8")
    await fs.promises.writeFile(filename,buffer)
   console.log('写入成功');    
}
test1()