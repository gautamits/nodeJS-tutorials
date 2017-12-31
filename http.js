var http = require("http");
http.createServer(function (request, response){
	//send http header
	//HTTP status:200
	//content type:text/plain
	console.log('connection accepted\n');
	//console.log(request.toString())
	response.writeHead(200, {'Content-Type': 'text/plain'});
	//send response
	response.end('Hello world\n');

}).listen(8081);
console.log('Server running at 127.0.0.1:8081');