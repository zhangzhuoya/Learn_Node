const fs = require('fs');
const path = require("path");
const filename = path.resolve(__dirname,"./myfiles/4.txt");
async function test() {
  await fs.promises.mkdir(filename)
  console.log('创建目录成功');
    
}
test()