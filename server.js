const express = require('express');
const exphbs = require('express-handlebars');

const app = express();
const port = 3000;

// Express middleware
app.use(express.json());
app.use(express.static('public'));

const handlebars = exphbs.create({
  helpers: {
    formatCurrency: function (value) {
      return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    }
  }
});

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.use(express.urlencoded({ extended: false }));

// Rotas e manipulação de dados serão adicionadas a partir daqui
app.get('/', (req, res) => {
  res.render('pages/index', {
    titulo: "Index",
    estilo: "index.css"
  });
});

// Rotas e manipulação de dados serão adicionadas a partir daqui
app.get('/listshop', (req, res) => {
  res.render('pages/listshop', {
    titulo: "Lista de compras",
    estilo: "listshop.css"
  });
});

// Definindo a rota para a página do PIX
app.get('/pix', (req, res) => {
  // Dados de exemplo da geladeira
  const geladeira = {
    valorTotal: 4000, // Valor total necessário para a geladeira
    valorArrecadado: 0, // Valor já arrecadado
  };

  const chavePix = '01855318652'; // Substitua pela chave PIX dos noivos

  // Renderizando a página do PIX e passando os dados da geladeira
  res.render('pages/pix', { 
    geladeira, 
    chavePix,   
    titulo: "Pix dos Noivos",
    estilo: "pix.css"
  });
});

// Função auxiliar para calcular a largura da barra de progresso
app.locals.calculateProgressWidth = (valorArrecadado, valorTotal) => {
  return (valorArrecadado / valorTotal) * 100;
};

app.listen(port, () => {
  console.log(`Servidor iniciado em http://localhost:${port}`);
});
