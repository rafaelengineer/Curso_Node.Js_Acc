const rect = require('./retangulo-1.js');
const  { readData } = require('./read-data.js');

async function solveRect() {
  const { l, b } = await readData();

  console.log(`Solução para o retângulo com l = ${l} e b = ${b}`);

  if (l < 0 || b < 0) {
    console.log('As dimensões do retângulo devem ser maior que zero: l = ' + l + ', e b+ ' + b);
  } else {
    console.log(`A área do retângulo com dimensões comprimento = ${l} e largura = ${b} é ${rect.area(l, b)}`);
    console.log(`O perímetro do retângulo com dimensões comprimento = ${l} e largura = ${b} é ${rect.perimeter(l, b)}`);
  }
}

solveRect();
