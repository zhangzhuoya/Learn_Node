const fs = require("fs");
const path = require("path");

const filename = path.resolve(__dirname,"./myFiles/sub/1.png");
async function test() {
   const stat = await fs.promises.stat(filename);
   console.log('copy success');
   console.log(stat);
}
test()