var cep = "30260070";

const url = `https://viacep.com.br/ws/${cep}/json/`;

const response = fetch(url)
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    if (data.erro) {
      throw new Error("CEP não encontrado");
    }
    console.log(data);
  })
  .catch((error) => {
    console.error("Erro ao consumir a API:", error.message);
  });
