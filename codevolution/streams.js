var fs = require('fs');
var readableStream  = fs.createReadStream('streams.js');
var data='';
readableStream.setEncoding('UTF-8');
//streams are also event emitters
readableStream.on('data',function(chunk){
	data+=chunk;
});
readableStream.on('end',function(){
	console.log(data);
});

var writeableStream = fs.createWriteStream('out.txt');
var writeData = "hello world";
writeableStream.write(writeData,'UTF-8');
writeableStream.end();
writeableStream.on('finish',function(){
	console.log('write completed');
});