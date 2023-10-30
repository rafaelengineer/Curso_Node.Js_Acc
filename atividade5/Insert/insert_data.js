var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "db_atividade4"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  //Make SQL statement:
  //var sql = "INSERT INTO db_atividade4.produtos (id_nf, id_item, cod_pro, valor_unit, quantidade, desconto) VALUES ?";
  var sql = "INSERT INTO node_atividade5.Cep_s (id_nf, id_item, cod_pro, valor_unit, quantidade, desconto) VALUES ?";
  //Make an array of values:
  var values = [
    [1,1,1,25,10,5],
    [1,2,2,13.5,3,null],
    [1,3,3,15,2,null],
    [1,4,4,10,1,null],
    [1,5,5,30,1,null],
    [2,1,3,15,4,null],
    [2,2,4,10,5,null],
    [2,3,5,30,7,null],
    [3,1,1,25,5,null],
    [3,2,4,10,4,null],
    [3,3,5,30,5,null],
    [3,4,2,13.5,7,null],
    [4,1,5,30,10,15],
    [4,2,4,10,12,5],
    [4,3,1,25,13,5],
    [4,4,2,13.5,15,5],
    [5,1,3,15,3,null],
    [5,2,5,30,6,null],
    [6,1,1,25,22,15],
    [6,2,3,15,25,20],
    [7,1,1,25,10,3],
    [7,2,2,13.5,10,4],
    [7,3,3,15,10,4],
    [7,4,5,30,10,1]
  ];
  //Execute the SQL statement, with the value array:
  con.query(sql, [values], function (err, result) {
    if (err) throw err;
    console.log("Number of records inserted: " + result.affectedRows);
  });
  con.end();
});