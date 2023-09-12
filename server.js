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
    titulo: "Chá de Panela | Duda & Vini",
    estilo: "index.css",
    header: false
  });
});

// Rotas e manipulação de dados serão adicionadas a partir daqui
app.get('/listshop', (req, res) => {
  res.render('pages/listshop', {
    titulo: "Lista de compras",
    estilo: "listshop.css",
    header: false
  });
});

// Função auxiliar para calcular a largura da barra de progresso
app.locals.calculateProgressWidth = (valorArrecadado, valorTotal) => {
  return (valorArrecadado / valorTotal) * 100;
};

app.listen(port, () => {
  console.log(`Servidor iniciado em http://localhost:${port}`);
});
