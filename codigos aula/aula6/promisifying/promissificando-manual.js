const fs = require('fs');

// Promisifying 
const getFile = (fileName) => {
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, (err, data) => {
      if (err) {
        reject (err)  // chamar `reject` vai fazer com  que a promise falhe com ou sem o erro passado como argumento
        return        // e não queremos ir mais longe
      }
      resolve(data)
    })
  })
}

// Using the function
getFile('./meuTexto.txt')
    .then(data => console.log(data.toString()))
    .catch(err => console.error(err));