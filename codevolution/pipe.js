var fs = require('fs');
var readableStream = fs.createReadStream('pipe.js');
var writeableStream = fs.createWriteStream('out.txt');
readableStream.pipe(writeableStream);