function Person() {
    this.wakeUp = function () {
      console.log("Acordar");
    };
    this.putOnPants = function () {
      console.log("Colocar calças");
    };
    this.putOnShirt = function () {
      console.log("Colocar camisa");
    };
    this.putOnShoes = function () {
      console.log("Colocar sapatos");
    };
    this.goToSchool = function () {
      console.log("Ir para escola");
    };
}
  
var person = new Person();

person.wakeUp(); // we want to do this first
person.putOnPants(); // and then this
person.putOnShirt(); // then this
person.putOnShoes(); // then this
person.goToSchool();
