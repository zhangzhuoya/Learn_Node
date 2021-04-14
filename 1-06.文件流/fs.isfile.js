const fs = require('fs');
const path = require("path");
const filename = path.resolve(__dirname,"./myfiles/sub");

async function exists(filename) {
  try {
    await fs.promises.stat(filename)
    return true;
  } catch (error) {
    if (error.code=="ENOENT") {
      //文件不存在
      return false
    }
    throw error;
  }
}

async function test() {
  const result = await exists(filename)
  if (result) {
    console.log('文件已经存在');
  }else{
    await fs.promises.mkdir(filename)
    console.log('创建目录成功');
  }
    
}
test()