var square = function(n){
  console.log(n*n);
}
var cube = function(n){
  console.log(n*n*n);
}
function callFunction(func,n){
  func(n);
}
callFunction(square,2);
callFunction(cube,3);
