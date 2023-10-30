var assert = require('assert');

describe('#indexOf()', function() {
  it('deve retornar -1 quando nao existir', function() {
      assert.equal([1,2,3].indexOf(4), -1)
  })
  it('deve retornar -1 quando nao existir', function() {
      assert.equal([1,2,3].indexOf(3), -1)
  })
  it('deve retornar -1 quando nao existir', function() {
      assert.equal([1,2,3].indexOf(4), -1)
  })
})

describe('Perimetro()', function() {
  it('deve retornar 20 para os valores 4 e 5 ', function() {
      assert.equal(perimetro(4,5), 20)
  })
  it('Teste negativo do perimetro', function() {
      assert.equal(perimetro(4,5), 19)
  })
  it('deve retornar -1 quando nao existir', function() {
      assert.equal([1,2,3].indexOf(4), -1)
  })
})