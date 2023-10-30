const http = require('http');

const servidor = http.createServer((req, res) => {
  // Obtém o método da solicitação (GET, POST, etc.)
  const metodo = req.method;
  
  // Obtém o URL da solicitação
  const url = req.url;

  // Lida com diferentes rotas com base no URL
  if (metodo === 'GET' && url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Página inicial');
  } else if (metodo === 'GET' && url === '/sobre') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Página Sobre nós');
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Página não encontrada');
  }
});

servidor.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
