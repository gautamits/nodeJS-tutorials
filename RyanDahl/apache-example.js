var http = require('http');
var s  = http.createServer(function(req,res){
	console.log("serving to "+req.connection.remoteAddress.slice(7));
	res.writeHead(200,{"content-type":"text/plain"});
	res.write("hello\n");
	/*setTimeout(function(){
		res.end("world\n");
	},2000);*/
	res.end("world\n");
});
s.listen(8000);
console.log("serving at localhost:8000");
//use ab -n 100 -c 100 http://127.0.0.1:8000/ for tests
