var cep = '01001000';

const url = `https://viacep.com.br/ws/${cep}/json/`;

(async () => {
    const response = await fetch(url);
    const endereco = await response.json();
    console.log(endereco);
})();