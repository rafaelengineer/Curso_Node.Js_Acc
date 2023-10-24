const readline = require('readline');

function readData() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise((resolve, reject) => {
    rl.question('Digite o comprimento do retângulo: ', (l) => {
      rl.question('Digite a largura do retângulo: ', (b) => {
        rl.close();
        resolve({ l, b });
      });
    });
  });
}

module.exports = { readData };
