console.log("user1 called for database");
setTimeout(callback,5000);

console.log("user2 called for database");
setTimeout(callback,5000);

console.log("user3 called for database");
setTimeout(callback,5000);

function callback(){
	console.log("database access successfully completed");
}