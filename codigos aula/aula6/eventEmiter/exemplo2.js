const EventEmitter = require('events')
const eventEmitter = new EventEmitter()

// Você pode passar argumentos à função passando-os como argumentos adicionais do emit():
eventEmitter.on('start', number => {
    console.log(`started ${number}`)
});

eventEmitter.emit('start', 23);