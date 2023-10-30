var cep = '01001000';

const url = `https://viacep.com.br/ws/${cep}/json/`;

const response = fetch(url).then((data) => {
    data.json().then((endereco) => {
        console.log(endereco);
    })
});