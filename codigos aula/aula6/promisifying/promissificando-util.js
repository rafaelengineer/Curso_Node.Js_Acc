const fs = require('fs');
const util = require('util');

// Promisifying fs.readFile
const readFileAsync = util.promisify(fs.readFile);

// Using the promisified function
readFileAsync('./meuTexto.txt')
  .then(data => console.log(data.toString()))
  .catch(err => console.error(err));
