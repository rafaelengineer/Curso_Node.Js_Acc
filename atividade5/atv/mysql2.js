const mysql = require('mysql')
const axios = require('axios')

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'node_atividade5'
})

// conn.connect(err => {
//     if (err) throw new Error('Erro na conexão')
//});


const cepToSearch = '30260070';
const viaCepApiUrl = `https://viacep.com.br/ws/${cepToSearch}/json/`;

const url = `https://viacep.com.br/ws/${cepToSearch}/json/`;

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

  var cep = ' ';
  var logradouro = ' ';
  var complemento = ' ';
  var bairro = ' ';
  var localidade = ' ';
  var uf = ' ';
  var ibge = ' ';
  var gia = ' ';
  var ddd = ' ';
  var siafi = ' ';


axios.get(viaCepApiUrl)
.then((response) => {
    const data = response.data;
    const {
        cep,
        logradouro,
        complemento,
        bairro,
        localidade,
        uf,
        ibge,
        gia,
        ddd,
        siafi,
    } = data;
    
    console.log('CEP:', cep);
    console.log('Logradouro:', logradouro);
    console.log('Complemento:', complemento);
    console.log('Bairro:', bairro);
    console.log('Localidade:', localidade);
    console.log('UF:', uf);
    console.log('IBGE:', ibge);
    console.log('GIA:', gia);
    console.log('DDD:', ddd);
    console.log('SIAFI:', siafi);
})
.catch((error) => {
    console.error('Error:', error);
  });
  
   console.log('Opá_consultou!!', cep);


conn.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  //Make SQL statement:
  //var sql = "INSERT INTO node_atividade5.Cep_s (cep, logradouro, complemento, bairro, localidade, uf, ibge, gia, ddd, siafi)
  var sql = "INSERT INTO node_atividade5.Cep_s (cep, logradouro, complemento, bairro, localidade, uf, ibge, gia, ddd, siafi)  VALUES ?";
  var values = [
      [cep, logradouro, complemento, bairro, localidade, uf, ibge, gia, ddd, siafi]
  ];
  //Execute the SQL statement, with the value array:
  con.query(sql, [values], function (err, result) {
    if (err) throw err;
    console.log("Number of records inserted: " + result.affectedRows);
  });
  con.end();
});


module.exports = conn