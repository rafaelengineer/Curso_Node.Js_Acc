const mysql = require('mysql')

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'node_atividade5'
})

// conn.connect(err => {
//     if (err) throw new Error('Erro na conexão')
//});


conn.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  //Make SQL statement:
  //var sql = "INSERT INTO node_atividade5.Cep_s (cep, logradouro, complemento, bairro, localidade, uf, ibge, gia, ddd, siafi)
  var sql = "INSERT INTO node_atividade5.Cep_s (cep, logradouro, complemento, bairro, localidade, uf, ibge, gia, ddd, siafi)  VALUES ?";
  var values = [
      [data]
  ];
  //Execute the SQL statement, with the value array:
  con.query(sql, [values], function (err, result) {
    if (err) throw err;
    console.log("Number of records inserted: " + result.affectedRows);
  });
  con.end();
});


module.exports = conn