var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
  fs.readFile('HTML_Marquee.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
}).listen(8080);

console.log("http://localhost:8080")