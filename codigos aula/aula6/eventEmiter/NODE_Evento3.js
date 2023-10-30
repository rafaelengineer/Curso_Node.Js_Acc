var events = require('events');

class Coracao extends events.EventEmitter {
    bater() {
        setInterval(() => {
            console.log('Tum-tum');
            this.emit('bater');
            console.log('Tum-tum');
        }, 1000)
    }
};

const coracao = new Coracao();
coracao.on('bater', () => {
    console.log('Ouvindo o coração batendo');
});

coracao.bater();