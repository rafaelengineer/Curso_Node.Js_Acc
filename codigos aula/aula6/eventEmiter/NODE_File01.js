var events = require('events');
var eventEmitter = new events.EventEmitter();

//Create an event handler:
var myEventHandler = function () {
  console.log('Escutei um grito!');
}

//Assign the eventhandler to an event:
eventEmitter.on('grito', myEventHandler);

//Fire the 'grito' event:
eventEmitter.emit('grito');