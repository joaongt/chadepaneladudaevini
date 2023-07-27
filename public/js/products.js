const products = [
  {
    id: 1,
    name: 'Caixa Organizadora Preta',
    image: '/images/cestapreta.jpg',
    price: 46.99,
    url: 'https://shp.ee/5awwx48',
    mkp: 'Shopee',
    status: false
  },
  {
    id: 2,
    name: 'Cesto Roupa Suja Marrom',
    image: '/images/cestamarrom.jpg',
    price: 88.00,
    url: 'https://shp.ee/r3s88a8',
    mkp: 'Shopee',
    status: false
  },
  {
    id: 3,
    name: 'Almofada branca',
    image: '/images/travesseirobranco.jpg',
    price: 30.15,
    url: 'https://shp.ee/5vm59w8',
    mkp: 'Shopee',
    status: false
  },
  {
    id: 4,
    name: 'Kit 2 Capas de almofadas personalizadas',
    image: '/images/travesseiropersonalizado.jpg',
    price: 39.00,
    url: 'https://shp.ee/tvnrxb8',
    mkp: 'Shopee',
    status: false
  },
  {
    id: 5,
    name: 'Kit Peseira Casal e 2 Capas de Almofadas',
    image: '/images/roupadecama.jpg',
    price: 89.90,
    url: 'https://shp.ee/43ewv58',
    mkp: 'Shopee',
    status: false
  },
  {
    id: 6,
    name: 'Aspirador Vertical 1000W',
    image: '/images/aspirador.jpg',
    price: 185.85,
    url: 'https://www.americanas.com.br/produto/3467628803/aspirador-vertical-1000w-1-2l-electrolux-stk12',
    mkp: 'Americanas',
    status: true
  },
  {
    id: 7,
    name: 'Jogo de Petisqueira Coração',
    image: '/images/petisqueira.jpg',
    price: 38.90,
    url: 'https://shopee.com.br/product/406093328/16008762736?d_id=5afed&utm_content=3UvRAScNK4R6JKb8wHde1vEBhuo5',
    mkp: 'Shopee',
    status: false
  },
  {
    id: 8,
    name: 'Garrafa Termica Nordica',
    image: '/images/garrafa.jpg',
    price: 99.90,
    url: 'https://shopee.com.br/product/405597031/13674322789?d_id=5afed&utm_content=3UvRAScNK4dRH7b3zKSjyQuBuj5q',
    mkp: 'Shopee',
    status: false
  },
  {
    id: 9,
    name: 'Air Fry Philco 4L Preta',
    image: '/images/airfryer.jpg',
    price: 469.90,
    url: 'https://www.kabum.com.br/produto/341342/fritadeira-air-fry-sem-oleo-philco-pfr15pg-gourmet-4l-1500w-127v-preto?gclid=CjwKCAjwzJmlBhBBEiwAEJyLux4BjNMMAWbMW_gaRAOSmyH9cVuMH8bGAwK3BRoY3AWu9d7mrTO5HRoCS00QAvD_BwE',
    mkp: 'Kabum',
    status: true
  },
  {
    id: 10,
    name: 'Liquidificador Electrolux 700w com Copo de Vidro',
    image: '/images/liquidificador.jpg',
    price: 369.00,
    url: 'https://loja.electrolux.com.br/liquidificador-electrolux-700w-com-copo-de-vidro-tecnologia-truflow-experience-ebs30/p',
    mkp: 'Electrolux',
    status: false
  },
  {
    id: 11,
    name: 'Colcha 3 Peças QUEEN Corttex Milão Azul',
    image: '/images/cama.jpg',
    price: 148.78,
    url: 'https://www.todecorando.com.br/colcha-3-pecas-queen-corttex-milao-azul/p',
    mkp: 'Tô Decorando',
    status: false
  },
  {
    id: 12,
    name: 'Kit 2 Banquetas Base Giratória Cromada - Preta',
    image: '/images/banco.jpg',
    price: 499.32,
    url: 'https://www.submarino.com.br/produto/3652007195?pfm_carac=2-banquetas-estofadas-giratoria-preta&pfm_index=11&pfm_page=search&pfm_pos=grid&pfm_type=search_page&offerId=6304cfcdadbc5f39b93be291',
    mkp: 'Submarino',
    status: false
  },
  {
    id: 13,
    name: 'Ferro de Passar a Vapor Electrolux',
    image: '/images/ferro.jpg',
    price: 92.00,
    url: 'https://www.casasbahia.com.br/ferro-de-passar-a-vapor-electrolux-efficient-esi10-com-spray-e-base-antiaderente-azul/p/55058111',
    mkp: 'Casas Bahia',
    status: true
  },
  {
    id: 14,
    name: 'Varal de Parede Recolhível Seca Fácil',
    image: '/images/varal.jpg',
    price: 49.99,
    url: 'https://www.amazon.com.br/Varal-Parede-Recolh%C3%ADvel-Seca-F%C3%A1cil/dp/B076QGDVSL/ref=asc_df_B076QGDVSL/?tag=googleshopp06-20&linkCode=df0&hvadid=379755604079&hvpos=&hvnetw=g&hvrand=9949169672966137105&hvpone=&hvptwo=&hvqmt=&hvdev=m&hvdvcmdl=&hvlocint=&hvlocphy=1001566&hvtargid=pla-811912834025&psc=1',
    mkp: 'Amazon',
    status: false
  },
  {
    id: 15,
    name: 'Kit 6 Potes Herméticos de Vidro',
    image: '/images/potes.jpg',
    price: 109.90,
    url: 'https://shopee.com.br/product/752849300/20400823016?d_id=5afed&utm_content=3UvRAScNMAL5aYctNq5CQVpk5WMu',
    mkp: 'Shopee',
    status: false
  },
  {
    id: 16,
    name: 'Kit 4 Peças Organizador Pia Banheiro',
    image: '/images/lava.jpg',
    price: 27.90,
    url: 'https://shopee.com.br/product/718699235/21525101273?gclid=Cj0KCQjw0tKiBhC6ARIsAAOXutkPKOVNPlRV4HIHS4AZqPbT1o9AkaHvmVZOD1JcmKmhEzfYIR_PCcEaAmZNEALw_wcB',
    mkp: 'Shopee',
    status: false
  },
  {
    id: 17,
    name: 'Indisponível',
    price: 0,
    url: 'https://www.casasbahia.com.br/jogo-de-panelas-8-pecas-ceramic-life-smart-plus-cinza-brinox/p/1537818723',
    mkp: 'Casas Bahia',
    status: true
  },
  {
    id: 18,
    name: 'Panela de Pressão Tramontina',
    image: '/images/pressao.jpg',
    price: 219.00,
    url: 'https://www.tramontina.com.br/panela-de-pressao-tramontina-vancouver-em-aluminio-com-revestimento-interno-e-externo-antiaderente-starflon-max-grafite-20-cm-4-5-l/20582620.html',
    mkp: 'Tramontina',
    status: false
  },
  {
    id: 19,
    name: 'Escova De Limpeza Multiuso Com Cabo De Bambu',
    image: '/images/pente.jpg',
    price: 25.90,
    url: 'https://shopee.com.br/product/284101173/21309269602?d_id=5afed&utm_content=3UvRAScJb167gmxFhA5LnvgeVzPq',
    mkp: 'Shopee',
    status: false
  },
  {
    id: 20,
    name: 'Jarra Medidora De Vidro 500ml',
    image: '/images/jarra.jpg',
    price: 31.99,
    url: 'https://shopee.com.br/product/683285752/16911845327?d_id=5afed&utm_content=3UvRAScJazp7kLgRDDzhJiWyNhju',
    mkp: 'Shopee',
    status: false
  },
  {
    id: 21,
    name: 'Porta Palito De Dente Automático',
    image: '/images/palito.jpg',
    price: 31.99,
    url: 'https://shopee.com.br/product/683285752/20313154386?d_id=5afed&utm_content=3UvRAScJazts7RraH8pECxpHN1YK',
    mkp: 'Shopee',
    status: false
  },
  {
    id: 22,
    name: 'Tigela Mixing Bowl Aço Inox',
    image: '/images/bowl.jpg',
    price: 27.92,
    url: 'https://shopee.com.br/product/361886039/5690239502?d_id=5afed&utm_content=3UvRAScJb1GgpQCoTzGPxuVQKM9Z',
    mkp: 'Shopee',
    status: false
  },
  {
    id: 23,
    name: 'Caixa De Armazenamento De Roupas',
    image: '/images/organiza.jpg',
    price: 18.99,
    url: 'https://shopee.com.br/product/359390309/10585457953?d_id=5afed&utm_content=3UvRAScJb1RMEdiXSyyLJqw2yTro',
    mkp: 'Shopee',
    status: false
  },
  {
    id: 24,
    name: 'Suporte Multiuso Porta Vassoura',
    image: '/images/vass.jpg',
    price: 36.90,
    url: 'https://shopee.com.br/product/304032598/17922777583?d_id=5afed&utm_content=3UvRAScJb1VgSkUPSUpoUt6suaD5',
    mkp: 'Shopee',
    status: false
  },
  {
    id: 25,
    name: 'Ventilador de Mesa 30cm Mondial Preto',
    image: '/images/ventilador.jpg',
    price: 109.90,
    url: 'https://m.casasbahia.com.br/ventilador-de-mesa-30cm-mondial-super-power-vsp-30-b-6-pas-3-velocidades-preto-55029985.html',
    mkp: 'Casas Bahia',
    status: false
  },
  {
    id: 26,
    name: 'Rack para TV até 70 Polegadas 220cm 3 Gavetas',
    image: '/images/rack.jpg',
    price: 399.90,
    url: 'https://www.madeiramadeira.com.br/rack-para-tv-ate-70-polegadas-220cm-3-gavetas-retro-manchester-yescasa-795198.html?origem=pla-795198',
    mkp: 'madeiramadeira',
    status: false
  },
  {
    id: 27,
    name: 'Cj 6 Pratos Raso em Porcelana Oxford',
    image: '/images/panin.jpg',
    price: 178.49,
    url: 'https://shopee.com.br/product/660511511/22495634628?d_id=5afed&utm_content=3UvRAScPZn65gcew19T6MF3Dwy6F',
    mkp: 'Shopee',
    status: false
  },
  {
    id: 28,
    name: 'Kit 3 Peneiras Coador em Aço Inox',
    image: '/images/peneira.jpg',
    price: 13.99,
    url: 'https://shopee.com.br/product/807581166/15992338010?d_id=5afed&utm_content=3UvRAScPZnJFajkbhcYQt4iukJpX',
    mkp: 'Shopee',
    status: false
  },
  {
    id: 29,
    name: '30 Sacos Saquinho Zip Lock Hermético 18x23 Abre E Fecha',
    image: '/images/saquinho.png',
    price: 37.50,
    url: 'https://shopee.com.br/product/283773653/13555035189?d_id=5afed&utm_content=3UvRAScPZnRjnXdECFUXXss8DdgB',
    mkp: 'Shopee',
    status: false
  },
  {
    id: 30,
    name: 'Mop Spray com Dispenser de 400 ml, (Borrifa, Limpa e Seca), Verde',
    image: '/images/mop.jpg',
    price: 110.57,
    url: 'https://www.amazon.com.br/Mop-Spray-Flash-Limp-Verde/dp/B07CHRZX7X/ref=asc_df_B07CHRZX7X/?tag=googleshopp06-20&linkCode=df0&hvadid=379787518793&hvpos=&hvnetw=g&hvrand=3999800868748910479&hvpone=&hvptwo=&hvqmt=&hvdev=m&hvdvcmdl=&hvlocint=&hvlocphy=1001566&hvtargid=pla-811008721560&psc=1',
    mkp: 'Amazon',
    status: false
  },
  {
    id: 31,
    name: 'Espremedor de Frutas Electrolux Preto',
    image: '/images/expr.jpg',
    price: 155.10,
    url: 'https://www.magazineluiza.com.br/espremedor-de-frutas-electrolux-ecp10-preto-e-prata-30w-800ml/p/236783900/ep/cent/',
    mkp: 'Magazine Luiza',
    status: false
  },
  {
    id: 32,
    name: 'Porta Condimentos Base Giratório Inox 12 Potes',
    image: '/images/port.jpg',
    price: 76.99,
    url: 'https://www.magazineluiza.com.br/porta-condimentos-base-giratorio-inox-12-potes-temperos-dubai/p/dc6f8b67g1/ud/port/',
    mkp: 'Magazine Luiza',
    status: false
  },
  {
    id: 33,
    name: 'TRAVESSA PORCELANA C/ ALÇA BASIC BRANCO',
    image: '/images/trav.jpg',
    price: 42.90,
    url: 'https://shopee.com.br/product/384207446/18098430652?d_id=5afed&utm_content=3UvRAScPZoTdEQfAY55NVLaHkEK1',
    mkp: 'Shopee',
    status: false
  },
  {
    id: 34,
    name: 'Kit 3 Formas com Fundo Removível Antiaderente',
    image: '/images/po.jpg',
    price: 35.94,
    url: 'htthttps://shopee.com.br/product/560526528/12385045313?d_id=5afed&utm_content=3UvRAScPZoa3o7BAnSECmUJooXnf',
    mkp: 'Shopee',
    status: false
  },
  {
    id: 35,
    name: 'Conjunto 6 Taças Diamante Transparente Lyor 265ml',
    image: '/images/taca.jpg',
    price: 48.87,
    url: 'https://shopee.com.br/product/904100548/23006703637?d_id=5afed&utm_content=3UvRAScPZogNwtk3YKKae3My2sDR',
    mkp: 'Shopee',
    status: false
  },
  {
    id: 36,
    name: 'Chuveiro Lorenzetti Acqua Duo Preto e Cromo 5500w 110v',
    image: '/images/chuv.jpg',
    price: 502.11,
    url: 'https://www.magazineluiza.com.br/chuveiro-lorenzetti-acqua-duo-preto-e-cromo-5500w-110v/p/jjk39582a9/cj/cjcv/',
    mkp: 'Magazine Luiza',
    status: false
  },
  {
    id: 37,
    name: 'Mesa De Passar Extra Forte C/Passa Mangas Prata - Utilaço',
    image: '/images/pass.jpg',
    price: 177.90,
    url: 'https://www.amazon.com.br/PASSAR-EXTRA-FORTE-PASSA-MANGAS/dp/B09BWYSNPY/ref=asc_df_B09BWYSNPY/?tag=googleshopp06-20&linkCode=df0&hvadid=379736754157&hvpos=&hvnetw=g&hvrand=16044077227179969590&hvpone=&hvptwo=&hvqmt=&hvdev=m&hvdvcmdl=&hvlocint=&hvlocphy=1001566&hvtargid=pla-1456287705521&psc=1',
    mkp: 'Amazon',
    status: false
  },
  {
    id: 38,
    name: 'Travesseiro Nasa Metalasse',
    image: '/images/travv.jpg',
    price: 45.99,
    url: 'https://shopee.com.br/Travesseiro-Nasa-Metalasse-9-cm-100-Poli%C3%A9ster-Baixo-i.407252023.12903263490',
    mkp: 'Shopee',
    status: false
  },
  {
    id: 39,
    name: 'Kit 5 Toalha de Banho Preta',
    image: '/images/toall.jpg',
    price: 69.90,
    url: 'https://shopee.com.br/Kit-5-Toalha-de-Banho-Preta-100-Algod%C3%A3o-Atacado-i.586394639.20444909362',
    mkp: 'Shopee',
    status: false
  },
  {
    id: 40,
    name: 'Lixeira Grande 30L Preta',
    image: '/images/lixo.jpg',
    price: 70.13,
    url: 'https://shopee.com.br/product/677688213/23903248027?gbraid=0AAAAACoEtRlTl-kE8mRthi4icY7Fr2Y2y&gclid=EAIaIQobChMIg-eC55zk_wIV4-BcCh3-twmoEAQYGiABEgLfqPD_BwE',
    mkp: 'Shopee',
    status: false
  },
  {
    id: 41,
    name: 'Escorredor De Pratos Louça Em Bambu',
    image: '/images/prat.jpg',
    price: 48.97,
    url: 'https://shopee.com.br/Escorredor-De-Pratos-Lou%C3%A7a-Em-Bambu-Natural-Madeira-Cozinha-i.946786498.20173082340',
    mkp: 'Shopee',
    status: false
  },
  {
    id: 42,
    name: 'Escorredor Lavador De Alimentos Em Aço Inox',
    image: '/images/esco.jpg',
    price: 19.70,
    url: 'https://shopee.com.br/Escorredor-Lavador-De-Arroz-Macarr%C3%A3o-Alimentos-Em-A%C3%A7o-Inox-i.946786498.18475455605',
    mkp: 'Shopee',
    status: false
  },
  {
    id: 43,
    name: 'Kit Colcha Matelassê Dupla Face Platinum Thais',
    image: '/images/cam.jpg',
    price: 429.90,
    url: 'https://santistadecora.com.br/pr/kit-colcha-matelasse-dupla-face-platinum-thais/SA200KCQZ1THAIS',
    mkp: 'santistadecora',
    status: false
  },
  {
    id: 44,
    name: 'Toalha 100% Algodão Prata Mike',
    image: '/images/banho.jpg',
    price: 14.90,
    url: 'https://santistadecora.com.br/pr/toalha-100-algodao-prata-mike/SANPRTROZMI8211',
    mkp: 'santistadecora',
    status: false
  },
  {
    id: 45,
    name: 'Coberdrom Canefleece Queen Canelado/Plush Aveludado - Cinza',
    image: '/images/edre.jpg',
    price: 199.90,
    url: 'https://decoramaiscasa.bubbstorelive.com.br/coberdrom-canefleece-queen-caneladoplush-aveludado-cinza/p',
    mkp: 'Decora Mais Casa',
    status: true
  },
  {
    id: 46,
    name: 'Cobre Leito Chic Queen Xale/Peseira C/ Pedraria 08 Peças - Cinza',
    image: '/images/edree.jpg',
    price: 314.90,
    url: 'https://www.decoramaiscasa.com.br/cobre-leito-chic-queen-xalepeseira-c-pedraria-08-pecas-cinza/p',
    mkp: 'Decora Mais Casa',
    status: false
  },
  {
    id: 47,
    name: 'Robô Aspirador De Pó Electrolux Home Power',
    image: '/images/robo.jpg',
    price: 645.99,
    url: 'https://www.magazineluiza.com.br/robo-aspirador-de-po-electrolux-home-power-experience-erb10/p/cc5a7b78e9/ep/eprb/',
    mkp: 'Magazine Luiza',
    status: false
  },
  {
    id: 48,
    name: 'Jogo de Panelas New York Casambiente 8 peças',
    image: '/images/panelinhas.jpg',
    price: 497.11,
    url: 'https://www.magazineluiza.com.br/jogo-de-panelas-new-york-casambiente-8-pecas-com-revestimento-antiaderente-ceramico/p/baa5883k0j/ud/cjpn/',
    mkp: 'Magazine Luiza',
    status: false
  },
  {
    id: 49,
    name: 'Caldeirão Panela Hotel Industrial N24 de Alumínio',
    image: '/images/cald.jpg',
    price: 65.01,
    url: 'https://shopee.com.br/Caldeir%C3%A3o-Panela-Hotel-Industrial-N24-de-Alum%C3%ADnio-i.418199465.20627946483',
    mkp: 'Shopee',
    status: false
  },
  {
    id: 50,
    name: 'Balcão Buffet 3 Portas e 1 Gaveta Duna Mavaular',
    image: '/images/balc.jpg',
    price: 637.55,
    url: 'https://www.magazineluiza.com.br/balcao-buffet-3-portas-e-1-gaveta-duna-mavaular/p/aja52h2303/mo/otmo/',
    mkp: 'Magazine Luiza',
    status: false
  },
  {
    id: 51,
    name: 'Kit 10 Pratos Redondos Fundos Refeição Churrasco',
    image: '/images/prats.jpg',
    price: 24.70,
    url: 'https://shopee.com.br/KIT-10-PRATOS-REDONDOS-FUNDOS-REFEI%C3%87%C3%83O-CHURRASCO-FESTA-PETALA-PLASTICO-i.670564893.22919932652',
    mkp: 'Shopee',
    status: false
  },
  {
    id: 52,
    name: 'Tabua de Vidro para Carnes Temperado Super Resistente',
    image: '/images/tabu.jpg',
    price: 27.97,
    url: 'https://shopee.com.br/Tabua-de-Vidro-para-Carnes-Temperado-Inquebr%C3%A1vel-Super-Resistente-e-Super-Higi%C3%AAnicas-i.201676730.19545342736',
    mkp: 'Shopee',
    status: false
  },
  {
    id: 53,
    name: 'Sanduicheira e Grill Britânia BGR15PI Antiaderente 750W',
    image: '/images/sand.jpg',
    price: 99.90,
    url: 'https://britania.com.br/sanduicheira-e-grill-britania-bgr15pi-revestimento-em-ceramica-66701167/p',
    mkp: 'Britânia',
    status: false
  },
  {
    id: 54,
    name: 'Mini Processador de Alimentos Britânia 2P',
    image: '/images/mini.jpg',
    price: 99.90,
    url: 'https://britania.com.br/mini-processador-de-alimentos-britania-2pbritania/p',
    mkp: 'Britânia',
    status: false
  },
  {
    id: 55,
    name: 'Batedeira Philco Paris Inox Duo Mixer Turbo 350W - Preta',
    image: '/images/battt.jpg',
    price: 129.90,
    url: 'https://www.casasbahia.com.br/batedeira-philco-paris-inox-duo-mixer-turbo-2-com-4-velocidades-e-350w-preta/p/55010954',
    mkp: 'Casas Bahia',
    status: false
  },
  {
    id: 56,
    name: 'Conjunto de Assadeiras Retangulares Tramontina - 3 Peças',
    image: '/images/ass.jpg',
    price: 172.00,
    url: 'https://www.casasbahia.com.br/conjunto-de-assadeiras-retangulares-tramontina-brasil-com-revestimento-antiaderente-starflon-t1-grafite-3-pecas/p/55003378',
    mkp: 'Casas Bahia',
    status: false
  },
];

const productContainer = document.getElementById('product-container');
const Div = document.querySelector('.instruction-div');

// Função para criar o elemento de produto
function createProductElement(product) {
  const li = document.createElement('li');
  li.className = 'product-item';

  const heart = document.createElement('i');
  heart.className = 'bx bxs-heart';
  li.appendChild(heart);


  const image = document.createElement('img');
  image.src = product.image;
  image.alt = product.name;
  image.className = 'product-image';
  li.appendChild(image);

  const pop = document.createElement('div');
  pop.className = 'collum';
  li.appendChild(pop);

  const button = document.createElement('button');
  button.textContent = 'Presentear';
  button.className = 'product-button';
  li.appendChild(button);

  const productName = document.createElement('p');
  productName.textContent = product.name;
  productName.className = 'product-name';
  pop.appendChild(productName);

  const productPrice = document.createElement('p');
  productPrice.textContent = `${product.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`;
  productPrice.className = 'product-price';
  pop.appendChild(productPrice);

  const productMkp = document.createElement('span');
  productMkp.textContent = product.mkp;
  productMkp.className = 'product-mkp';
  pop.appendChild(productMkp);

  // Verifica se o produto foi favoritado
  let isFavorite = localStorage.getItem(`favorite-${product.id}`) === 'true';
  if (isFavorite) {
    heart.classList.add('red-heart');
  }

  // Adiciona o evento de clique ao ícone de coração
  heart.addEventListener('click', function () {
    if (!isFavorite) {
      // O coração estava desmarcado, agora estamos marcando
      heart.classList.add('red-heart');
      localStorage.setItem(`favorite-${product.id}`, 'true');
      isFavorite = true;
    } else {
      // O coração estava marcado, agora estamos desmarcando
      heart.classList.remove('red-heart');
      localStorage.removeItem(`favorite-${product.id}`);
      isFavorite = false;
    }
  });

  button.addEventListener('click', () => {
    const divAviso = document.createElement('div');
    divAviso.className = 'center';
    divAviso.innerHTML = `
      <div class="instruction-div">
      <i class='bx bx-x'></i>
          <h2>O que devo fazer após efetuar a compra?</h2>
          <p>
              1. Você enviará uma mensagem no whatsapp <a href="https://api.whatsapp.com/send?phone=31989878715" target="_blank">(31) 98987-8715</a> de nome João. Na mensagem coloque apenas o nome ou o site
              do produto que você comprou.<br>
              2. Exemplo: Olá, estou enviando essa mensagem para avisar que eu adiquiri o produto Caixa Organizadora Preta.
          </p>
          <h2>Qual é o endereço dos noivos?</h2>
          <p>Rua João Camilo de Oliveira Torres, 830. Bairro Tupi - Cep: 31846-310
              <button id="copyCepInput" onclick="copyCepToClipboard()"><i class='bx bx-copy'></i></button>
          </p><br><br>
          <center><p>Clique no botão "OK" para ser redirecionado a página do produto.</p></center>
          <center><button id="okk">OK</button></center>
      </div>

      <script>
      const Div = document.querySelector('.instruction-div');

      </script>
    })
  `;

    document.body.appendChild(divAviso);

    const x = divAviso.querySelector('.bx-x');
    x.addEventListener('click', () => {
      divAviso.style.display = 'none';
    });

    const okk = divAviso.querySelector('#okk');
    okk.addEventListener('click', () => {
      divAviso.style.display = 'none';
      window.open(product.url, '_blank');
    });
  });



  if (product.status) {
    const statusOverlay = document.createElement('div');
    statusOverlay.className = 'status-overlay';
    button.appendChild(statusOverlay);

    const statusText = document.createElement('span');
    statusText.textContent = 'JÁ ADQUIRIDO';
    statusText.className = 'status-text';
    product.url = ""; // Removendo a URL do produto
    button.disabled = true; // Desabilitando o botão
    // Altera o estilo do ponteiro quando passa sobre o botão
    button.style.cursor = 'inherit';

    statusOverlay.appendChild(statusText);
  }

  return li;
}

function copyCepToClipboard() {
  // Seleciona o texto da chave PIX
  const cepInput = document.createElement('input');
  cepInput.value = "R. João Camilo de Oliveira Tôrres, 830 - Tupi, Belo Horizonte - MG, 31846-310";
  document.body.appendChild(cepInput);
  cepInput.select();
  document.execCommand('copy');
  document.body.removeChild(cepInput);

  // Atualiza o texto do botão para indicar que foi copiado
  const copyButton = document.getElementById('copyCepInput');
  copyButton.innerHTML = '<i class="bx bxs-copy"></i>';
  copyButton.disabled = true;
}


// Example usage:
filterByMarketplace(products);

const prevPageButton = document.getElementById('prev-page-button');
const nextPageButton = document.getElementById('next-page-button');
const pageNumbersContainer = document.getElementById('page-numbers-container');
const productsPerPage = 9;
let currentPage = 1;
let filteredProducts = products; // Initialize with all products

// Function to update the pagination buttons and page numbers
function updatePagination() {
  // Clear existing page numbers
  pageNumbersContainer.innerHTML = '';

  // Calculate total number of pages
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  // Create and append page number buttons
  for (let i = 1; i <= totalPages; i++) {
    const pageNumberButton = document.createElement('button');
    pageNumberButton.textContent = i;
    pageNumberButton.classList.add('page-number');
    pageNumberButton.addEventListener('click', () => {
      currentPage = i;
      displayFilteredProducts();
      updatePagination();
    });
    pageNumbersContainer.appendChild(pageNumberButton);
  }

  // Disable or enable previous and next buttons based on current page
  prevPageButton.disabled = currentPage === 1;
  nextPageButton.disabled = currentPage === totalPages;
}

// Function to display filtered products
function displayFilteredProducts() {
  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const currentProducts = filteredProducts.slice(startIndex, endIndex);
  const productContainer = document.getElementById('product-container');
  productContainer.innerHTML = ''; // Clear the existing products

  currentProducts.forEach(product => {
    const productElement = createProductElement(product);
    productContainer.appendChild(productElement);
  });
}

// Event listener for previous page button
prevPageButton.addEventListener('click', () => {
  if (currentPage > 1) {
    currentPage--;
    displayFilteredProducts();
    updatePagination();
  }
});

// Event listener for next page button
nextPageButton.addEventListener('click', () => {
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  if (currentPage < totalPages) {
    currentPage++;
    displayFilteredProducts();
    updatePagination();
  }
});


// Function to filter products by price range
function filterByPrice(sortOrder) {

  if (sortOrder === 'lowToHigh') {
    filteredProducts = products.slice().sort((a, b) => a.price - b.price);
  } else if (sortOrder === 'highToLow') {
    filteredProducts = products.slice().sort((a, b) => b.price - a.price);
  } else {
    filteredProducts = products.slice();
  }

  currentPage = 1; // Reset current page to 1
  displayFilteredProducts(filteredProducts); // Call the function to display filtered products with pagination
  updatePagination(); // Call the function to update the pagination
}

const filterPriceSelect = document.getElementById('filter-price');

filterPriceSelect.addEventListener('change', () => {
  const selectedPriceOption = filterPriceSelect.value;
  filterByPrice(selectedPriceOption);
});



// Initial display of products
displayFilteredProducts();
updatePagination();

const filterMkp = document.getElementById('filter-mkp');

// Event listener for marketplace filter change
filterMkp.addEventListener('change', () => {
  const selectedMkp = filterMkp.value;
  filterByMkp(selectedMkp);
});

// Function to filter products by marketplace
function filterByMkp(mkp) {
  if (mkp === 'all') {
    filteredProducts = products; // Show all products
  } else {
    filteredProducts = products.filter(product => product.mkp === mkp);
  }

  currentPage = 1; // Reset current page to 1
  displayFilteredProducts();
  updatePagination();
}

function filterByMarketplace(products) {
  // Extract unique marketplaces from the products array
  const marketplaces = [...new Set(products.map(product => product.mkp))];

  const divFilter = document.querySelector('.filters');

  // Create HTML select element
  const selectElement = document.createElement('select');
  selectElement.id = 'filter-mkp';
  divFilter.appendChild(selectElement);

  // Create default option
  const defaultOption = document.createElement('option');
  defaultOption.value = '';
  defaultOption.disabled = true;
  defaultOption.selected = true;
  defaultOption.textContent = 'Selecione um marketplace';
  selectElement.appendChild(defaultOption);

  const allOption = document.createElement('option');
  allOption.value = 'all';
  allOption.textContent = 'Todos';
  selectElement.appendChild(allOption);

  // Create options for each marketplace
  marketplaces.forEach((marketplace) => {
    const option = document.createElement('option');
    option.value = marketplace;
    option.textContent = marketplace;
    selectElement.appendChild(option);
  });
}