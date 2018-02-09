var http=require('http');
setInterval(function(){
    console.log("fetching goole.com");
    http.get({host:'google.com'},function(res){
        console.log(res.headers);
    });
},2000)
console.log('hello');