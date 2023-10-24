var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "mydb"
});

con.connect(function(err) {
  if (err) throw err;
  var sql = "SELECT AL.nome as AL, turma.name as TU FROM aluno LEFT JOIN turma ON AL.idAluno = TU.idTurma";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result);
  });
});
