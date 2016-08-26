var EventEmitter = require('events').EventEmitter;
// addEventListener
var ev = new EventEmitter();
ev.on('test',function(who){
	console.log('test'+who+'1');
})
ev.emit('test','wsq')