var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "sequelize_teste"
});

con.connect(function(err) {
  if (err) throw err;
  var sql = "DROP TABLE usuario";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table deleted");
  });
});