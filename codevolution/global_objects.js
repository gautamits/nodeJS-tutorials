console.log(__filename);
console.log(__dirname);
function printstuff(){
	console.log("this is from ");
}
setTimeout(printstuff,5000);
setInterval(printstuff,2000);