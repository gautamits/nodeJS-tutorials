function printstuff(stuff){
	console.log(stuff);
}

var anotherprintstuff = function(stuff){
	console.log(stuff);
}
function mainfunction(anotherfunction,value){
	anotherfunction(value);
}

mainfunction(printstuff,"hello");
mainfunction(anotherprintstuff,"world");