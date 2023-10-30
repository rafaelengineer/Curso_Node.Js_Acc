/**
 * Demonstrando a importancia do callback para funções assíncronas.
 * 
 * No exemplo abaixo, foi utilizado callbacks para obter a ordem correta
 * de execução
 *      person.wakeUp(); // we want to do this first
 *      person.putOnPants(); // and then this
 *      person.putOnShirt(); // then this
 *      person.putOnShoes(); // then this
 *      person.goToSchool();
 * 
 * O resultado será essa ordem:
 *      Colocar sapatos
 *      Acordar
 *      Ir para escola
 *      Colocar camisa
 *      Colocar calças
 */
function Person() {
  this.wakeUp = function (callback) {
    // Simula uma operação assíncrona de 1 segundo
    setTimeout(() => {
      console.log("Acordar");
      callback();
    }, 1000);
  };
  this.putOnPants = function (callback) {
    // Simula uma operação assíncrona de 2 segundos
    setTimeout(() => {
      console.log("Colocar calças");
      callback();
    }, 2000);
  };
  this.putOnShirt = function (callback) {
    // Simula uma operação assíncrona de 1.5 segundos
    setTimeout(() => {
      console.log("Colocar camisa");
      callback();
    }, 1500);
  };
  this.putOnShoes = function (callback) {
    // Simula uma operação assíncrona de 0.8 segundos
    setTimeout(() => {
      console.log("Colocar sapatos");
      callback();
    }, 800);
  };
  this.goToSchool = function () {
    // Simula uma operação assíncrona de 1.2 segundos
    setTimeout(() => {
      console.log("Ir para escola");
    }, 1200);
  };
}

var person = new Person();

person.wakeUp(function () {
  person.putOnPants(function () {
    person.putOnShirt(function () {
      person.putOnShoes(function () {
        person.goToSchool();
      });
    });
  });
});
