var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "node_atividade5"
});

con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM Cep_s ORDER BY uf", function (err, result) {
    if (err) throw err;
    console.log(result);
  });
});