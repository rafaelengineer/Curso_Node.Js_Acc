const prompt = require('prompt-sync')();
const soma = require('./soma.js');
const subtracao = require('./subtracao.js');
const multiplicacao = require('./multiplicacao.js');
const divisao = require('./divisao.js');
var a = 0;
var b = 0;

function main() {
  console.log('Selecione uma operação:');
  console.log('1. Soma');
  console.log('2. Subtração');
  console.log('3. Multiplicação');
  console.log('4. Divisão');

  const opcao = Number(prompt('Digite a opção desejada: '));

  switch (opcao) {
    case 1:
      a = Number(prompt('Digite o primeiro número: '));
      b = Number(prompt('Digite o segundo número: '));
      console.log(`O resultado da soma de ${a} e ${b} é ${soma(a, b)}`);
      break;
    case 2:
      a = Number(prompt('Digite o primeiro número: '));
      b = Number(prompt('Digite o segundo número: '));
      console.log(`O resultado da subtração de ${a} e ${b} é ${subtracao(a, b)}`);
      break;
    case 3:
      a = Number(prompt('Digite o primeiro número: '));
      b = Number(prompt('Digite o segundo número: '));
      console.log(`O resultado da multiplicação de ${a} e ${b} é ${multiplicacao(a, b)}`);
      break;
    case 4:
      a = Number(prompt('Digite o primeiro número: '));
      b = Number(prompt('Digite o segundo número: '));
      if(b==0){
        console.log('Não é possível divisão por zero.')
        break;
      }
      console.log(`O resultado da divisão de ${a} e ${b} é ${divisao(a, b)}`);
      break;
    default:
      console.log('Opção inválida.');
  }
}

main();
