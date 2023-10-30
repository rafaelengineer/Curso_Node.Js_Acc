var events = require('events');
const eventEmitter = new events.EventEmitter();

// listen to the event
eventEmitter.on('MeuEvento', () => {
    console.log('Informação recebida!!');
});

// publish an event
eventEmitter.emit('MeuEvento');