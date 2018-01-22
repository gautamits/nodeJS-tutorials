console.log(__dirname);
console.log(__filename);
console.log("hello-world");
setTimeout(function(){
  console.log("3 seconds has passed");
},3000);
var t=0;
var timer = setInterval(function(){
  t+=2;
  console.log(t+" seconds has passed");
  if(t>12) clearInterval(timer);
},2000);
