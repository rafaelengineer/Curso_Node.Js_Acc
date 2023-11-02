const request = require('supertest');
const app = require('../src/app');
const { expect } = require('chai');

describe('API Tests', () => {
  it('should return 200 OK', (done) => {
    request(app)
      .get('/')
      .expect(200, done);
  });
});

describe('Testando operações', () => {
  
  it('Deve retornar 5 ao subtrair 8 - 3', (done) => {
    request(app)
      .get('/subtracao/8/3')
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body.result).to.equal(5);
        done();
      });
  });

  it('Deve retornar 5 ao somar 2 + 3', (done) => {
    request(app)
      .get('/soma/2/3')
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body.result).to.equal(5);
        done();
      });
  });

  it('Deve retornar 5 ao dividir 15 / 3', (done) => {
    request(app)
      .get('/divisao/15/3') 
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body.result).to.equal(5);
        done();
      });
  });
  
  it('Deve retornar erro ao dividir 15 / 0', (done) => {
    request(app)
      .get('/divisao/15/0') 
      .expect(400) 
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body.error).to.equal('Divisão por zero'); 
        done();
      });
  });
  
  it('Deve retornar erro ao multiplicar 5 * 1', (done) => {
    request(app)
      .get('/divisao/15/3')
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body.result).to.equal(5);
        done();
      });
  });

});
