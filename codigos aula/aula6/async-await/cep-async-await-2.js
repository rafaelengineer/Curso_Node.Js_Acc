var cep = '99999999';

const url = `https://viacep.com.br/ws/${cep}/json/`;

(async () => {
    try {
        const response = await fetch(url);
        const endereco = await response.json();

        // Verifica se a resposta contém o campo "erro"
        if (endereco.erro) {
            throw new Error('CEP não encontrado');
        }
        
        console.log(endereco);
    } catch (error) {
        console.log(`Ocorreu um erro: ${error}`);        
    }
})();