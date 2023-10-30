var eventos = require('events');
var emissorDeEventos = new eventos.EventEmitter();

// Ouvinte #1
var ouvinte1 = function ouvinte1() {
   console.log('Ouvinte 1 executado.');
}

// Ouvinte #2
var ouvinte2 = function ouvinte2() {
   console.log('Ouvinte 2 executado.');
}

// Vincular o evento de conexão com a função do ouvinte1
emissorDeEventos.addListener('conexão', ouvinte1);

// Vincular o evento de conexão com a função do ouvinte2
emissorDeEventos.on('conexão', ouvinte2);

var contagemDeOuvintes = require('events').EventEmitter.listenerCount(emissorDeEventos, 'conexão');
console.log(contagemDeOuvintes + " ouvinte(s) escutando o evento de conexão");

// Disparar o evento de conexão 
emissorDeEventos.emit('conexão');

// Remover a vinculação da função do ouvinte1
emissorDeEventos.removeListener('conexão', ouvinte1);
console.log("Ouvinte1 removido dos eventos.");

// Disparar o evento de conexão 
emissorDeEventos.emit('conexão');

contagemDeOuvintes = require('events').EventEmitter.listenerCount(emissorDeEventos, 'conexão');
console.log(contagemDeOuvintes + " ouvinte(s) escutando o evento de conexão");

console.log("Programa Finalizado.");
