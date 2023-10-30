const EventEmitter = require('events');

class CarrinhoDeCompras extends EventEmitter {
    adicionarProduto(produto) {
        console.log(`Produto "${produto}" adicionado ao carrinho de compras.`);
        this.emit('produtoAdicionado', produto); // Emitir o evento 'produtoAdicionado'
    }
}

const meuCarrinho = new CarrinhoDeCompras();

// Registra um ouvinte para o evento 'produtoAdicionado'
meuCarrinho.on('produtoAdicionado', (produto) => {
    console.log(`Notificação: Novo produto adicionado - "${produto}"`);
});

// Adiciona produtos ao carrinho
meuCarrinho.adicionarProduto('Camiseta');
meuCarrinho.adicionarProduto('Tênis');
meuCarrinho.adicionarProduto('Boné');
