var events = require('events');
var eventEmitter = new events.EventEmitter();
//create event handler
var connectHandler = function connected(){
	console.log('connection successful.\n');
	//fire data received event
	eventEmitter.emit('data_received');
}

//bind the connection event with handler
eventEmitter.on('connection',connectHandler);
//bind data received event with the anonymous function
eventEmitter.on('data_received',function(){
	console.log("data received succesfully\n");

});

//fire connection event
eventEmitter.emit('connection');
console.log("program ended");