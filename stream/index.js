const fs = require('fs');

const readableStream = fs.createReadStream('./stream/input.txt', {
    highWaterMark: 15
});

const writableStream = fs.createWriteStream('./stream/output.txt');

readableStream.on('readable', () => {
    try {
        // process.stdout.write(`[${readableStream.read()}]`);
        writableStream.write(`${readableStream.read()}\n`);
        
    } catch(error) {
        // catch the error when the chunk cannot be read.
    }
});

readableStream.on('data', function (chunk) {
    console.log(chunk.toString());
});
 
readableStream.on('end', () => {
    console.log('Done');
});