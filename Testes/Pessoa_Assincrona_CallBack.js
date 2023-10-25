function Person() {
    this.wakeUp = function () {
        // Simula uma operação assíncrona de 1 segundo
        setTimeout(() => { console.log("Acordar"); }, 1000);
    };
    this.putOnPants = function () {
        // Simula uma operação assíncrona de 2 segundos
        setTimeout(() => { console.log("Colocar calças"); }, 2000);
    };
    this.putOnShirt = function () {
        // Simula uma operação assíncrona de 1.5 segundos
        setTimeout(() => { console.log("Colocar camisa"); }, 1500);
    };
    this.putOnShoes = function () {
        // Simula uma operação assíncrona de 0.8 segundos
        setTimeout(() => { console.log("Colocar sapatos"); }, 800);
    };
    this.goToSchool = function () {
        // Simula uma operação assíncrona de 1.2 segundos
        setTimeout(() => { console.log("Ir para escola"); }, 1200);
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