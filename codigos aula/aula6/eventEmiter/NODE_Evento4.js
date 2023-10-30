var events = require('events');
var sumEvent = new events.EventEmitter();

sumEvent.on('sum', (numbers, callback) => {
    const result = numbers.reduce((n, sum) => sum += n);
    return callback(result);
});

sumEvent.emit('sum', [1, 2, 3], (result) => {
    console.log(result);
});