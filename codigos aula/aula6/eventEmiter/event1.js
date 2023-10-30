const EventEmitter = require('events');

// Classe para o Controle de Estoque
class ControleEstoque extends EventEmitter {
  adicionarItem(item) {
    // Adiciona o item ao estoque
    console.log(`Novo item adicionado ao estoque: ${item}`);
    
    // Emite um evento 'itemAdicionado' com o nome do item
    this.emit('itemAdicionado', item);
  }
}

// Instância do Controle de Estoque
const controleEstoque = new ControleEstoque();

// Ouvinte para o evento 'itemAdicionado'
controleEstoque.on('itemAdicionado', (item) => {
  console.log(`Sistema de Contabilidade: Novo item adicionado ao estoque - ${item}`);
});

// Simulação de adição de item ao estoque
controleEstoque.adicionarItem('Produto A');
controleEstoque.adicionarItem('Produto B');
