const mysql = require('mysql')
const axios = require('axios')

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'node_atividade5'
})

const cepToSearch = '30260070';

const viaCepApiUrl = `https://viacep.com.br/ws/${cepToSearch}/json/`;

function fetchCepData() {
  return axios.get(viaCepApiUrl);
}

fetchCepData()
  .then((response) => {
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

    conn.connect(function(err) {
      if (err) throw err;
      console.log("Connected!");
      //Make SQL statement:
      //var sql = "INSERT INTO node_atividade5.Cep_s (cep, logradouro, complemento, bairro, localidade, uf, ibge, gia, ddd, siafi)
      var sql = "INSERT INTO node_atividade5.Cep_s (cep, logradouro, complemento, bairro, localidade, uf, ibge, gia, ddd, siafi)  VALUES ?";
      var values = [
          [data.cep, data.logradouro, data.complemento, data.bairro, data.localidade, data.uf, data.ibge, data.gia, data.ddd, data.siafi]
      ];
      conn.query(sql, [values], function (err, result) {
        if (err) throw err;
        console.log("Number of records inserted: " + result.affectedRows);
      });
      conn.end();
    });
    
  })
  .catch((error) => {
    console.error('Error:', error);
  });
