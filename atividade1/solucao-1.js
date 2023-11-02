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

async function fetchCepData() {
  try {
    const response = await axios.get(viaCepApiUrl);
    const data = response.data;

    console.log('CEP:', data.cep);
    console.log('Logradouro:', data.logradouro);
    console.log('Complemento:', data.complemento);
    console.log('Bairro:', data.bairro);
    console.log('Localidade:', data.localidade);
    console.log('UF:', data.uf);
    console.log('IBGE:', data.ibge);
    console.log('GIA:', data.gia);
    console.log('DDD:', data.ddd);
    console.log('SIAFI:', data.siafi);

    // Continue with the rest of your script here
  } catch (error) {
    console.error('Error:', error);
  }
}

// Call the async function to fetch CEP data
fetchCepData();
In this code, we use an async function named fetchCepData. Inside this function, we use await to wait for the Axios request to complete before continuing with the rest of the script. This ensures that the CEP data is available before further processing.

By using async/await, your script will wait for the Axios request to finish, and only after that will it proceed to the next steps.





