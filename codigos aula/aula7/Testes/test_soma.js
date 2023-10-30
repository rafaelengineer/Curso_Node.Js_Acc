const assert = require("assert");

describe("Testes de calculadora", function () {
  it("Deve retornar 4 quando somar 2 + 2", function () {
    assert.equal(soma(2, 2), 4);
  });
});

describe("Funcao soma", function () {});

calculadoraApi/
|-- src/
|   |-- app.js
|-- test/
|   |-- api.test.js
|-- package.json