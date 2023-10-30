
function funcSync() {
    console.log('Entrou em funcSync');
    return "Antes de tudo, olá mundo!";
}

/**
 * funcAsync: retorna uma Promise que será resolvida com o valor "Olá, mundo!"
 * 
 * A palavra-chave async antes de uma função, automaticamente torna 
 * o retorno de uma função uma Promise. Mesmo que você retorne um 
 * valor diretamente na função assíncrona, ele será automaticamente 
 * envolvido em uma Promise.
 */
async function funcAsync() {
    console.log('Entrou em "funcAsync".');
    return "Primeiro olá mundo!";
}

function outraFuncAsync() {
    console.log('Entrou em "outraFuncAsync".');
    return Promise.resolve("Segundo olá mundo!")
}

function novaFuncAsync() {
    console.log('Entrou em "novaFuncAsync".');
    return new Promise((resolve, reject) => {
        resolve("Terceiro olá mundo!")
    })
}

console.log('\nChamando funções para dentro das variáveis')
const texto0 = funcSync();          // "Antes de tudo, olá mundo!"
const texto1 = funcAsync();         // Promise { 'Primeiro olá mundo!' }
const texto2 = outraFuncAsync();    // Promise { 'Segundo olá mundo!' }
const texto3 = novaFuncAsync();     // Promise { 'Terceiro olá mundo!' }

console.log(texto1);

// console.log('\nImprimindo os valores das variáveis');
// console.log( texto0 );
// texto1.then( (valor) => { console.log(valor) });
// texto2.then( (valor) => { console.log(valor) });
// texto3.then( (valor) => { console.log(valor) });