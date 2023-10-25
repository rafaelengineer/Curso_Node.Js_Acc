const express = require('express');
const soma = require('./soma.js');
const subtracao = require('./subtracao.js');
const multiplicacao = require('./multiplicacao.js');
const divisao = require('./divisao.js');
const app = express();
const port = 3000;

app.use(express.json());

app.post('/soma', (req, res) => {
  const { x, y } = req.body;
  res.json(`${x} + ${y} = ${soma(x, y)}`);
});

app.post('/subtracao', (req, res) => {
  const { x, y } = req.body;
  res.json(`${x} - ${y} = ${subtracao(x, y)}`);
});

app.post('/multiplicacao', (req, res) => {
  const { x, y } = req.body;
  res.json(`${x} * ${y} = ${multiplicacao(x, y)}`);
});

app.post('/divisao', (req, res) => {
  const { x, y } = req.body;
  if (y === 0) {
    res.status(400).json({ error: 'Divisão por zero não é permitida.' });
  } else {
    res.json(`${x} / ${y} = ${divisao(x, y)}`);
  }
});

app.listen(port, () => {
  console.log(`API da calculadora está rodando na porta: http://localhost:${port}`);
});
