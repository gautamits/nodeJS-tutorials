var fs = require('fs');
fs.readFile('fs_module.js',function(error,data){
	if(error){
		console.log(error);
	}
	else{
		console.log("Async data is",data.toString());
	}
});

var data = fs.readFileSync('fs_module.js');
console.log("Sync data is ",data.toString());
console.log("end");