const fs = require('fs');
const path = require("path");
const filename = path.resolve(__dirname,"./myfiles/");
async function test() {
    const pathes = await fs.promises.readdir(filename);
    console.log(pathes);
    
}
test()