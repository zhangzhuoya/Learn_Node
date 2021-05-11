const fs = require('fs');
const path = require("path");

async function test() {
    const fromFilename = path.resolve(__dirname,"./myFiles/sub/1.png");
    const buffer = await fs.promises.readFile(fromFilename);
    const toFilename = path.resolve(__dirname,"./myFiles/sub/1.copy.png");
    await fs.promises.writeFile(toFilename,buffer);
    console.log('copy success');
}
test()