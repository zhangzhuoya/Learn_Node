const fs = require('fs');
const path = require("path")
const filename = path.resolve(__dirname, "./myFiles/1.txt");

// async function test() {
//     await fs.promises.writeFile(filename,'写入文件',{
//         flag: "a"//追加内容,不写覆盖
//     })

// }
// test()

//利用Buffer写入
async function test() {
    const buffer = Buffer.from('abcdefghijklmnopqrstuvwxyz','utf-8');
    await fs.promises.writeFile(filename,buffer);
    console.log('写入成功');
}
test()