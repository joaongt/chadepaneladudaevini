const express = require('express');
const exphbs = require('express-handlebars');

const casal = require('./data/casal');
const todosPresentes = require('./data/presentes');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('public'));

const handlebars = exphbs.create({
  helpers: {
    formatCurrency: (value) =>
      Number(value).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }),
    // Serializa para uso seguro dentro de <script>
    json: (value) => JSON.stringify(value).replace(/</g, '\\u003c'),
    eq: (a, b) => a === b,
    urlencode: (value) => encodeURIComponent(value)
  }
});

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

// Ignora itens de exemplo/indisponíveis (sem link ou sem foto)
const presentes = () => todosPresentes.filter((p) => p.url && p.image);

const enderecoCompleto = (e) =>
  `${e.rua}, ${e.numero}${e.complemento ? ' - ' + e.complemento : ''} - ${e.bairro}, ${e.cidade} - ${e.uf}, ${e.cep}`;

function contexto(extra) {
  const lista = presentes();
  const comprados = lista.filter((p) => p.status).length;
  return {
    casal,
    enderecoCompleto: enderecoCompleto(casal.endereco),
    whatsappLink: `https://wa.me/${casal.whatsapp.numero}`,
    stats: {
      total: lista.length,
      comprados,
      disponiveis: lista.length - comprados,
      percentual: lista.length ? Math.round((comprados / lista.length) * 100) : 0
    },
    ...extra
  };
}

app.get('/', (req, res) => {
  const lista = presentes();
  res.render('pages/index', contexto({
    titulo: `${casal.noiva} & ${casal.noivo} | Lista de Presentes`,
    pagina: 'home',
    destaques: lista.filter((p) => !p.status).slice(0, 4)
  }));
});

app.get('/presentes', (req, res) => {
  res.render('pages/presentes', contexto({
    titulo: `Lista de Presentes | ${casal.noiva} & ${casal.noivo}`,
    pagina: 'presentes',
    presentes: presentes()
  }));
});

// Link antigo continua funcionando
app.get('/listshop', (req, res) => res.redirect(301, '/presentes'));

app.listen(port, () => {
  console.log(`Servidor iniciado em http://localhost:${port}`);
});
