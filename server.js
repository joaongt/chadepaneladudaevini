const express = require('express');
const exphbs = require('express-handlebars');

const app = express();
const port = 3000;

// Express middleware
app.use(express.json())
app.use(express.static('public'));

app.engine('handlebars', exphbs.engine());
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

app.listen(port, () => {
  console.log(`Servidor iniciado em http://localhost:${port}`);
});
