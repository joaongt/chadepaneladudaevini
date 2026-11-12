(function () {
  const grid = document.getElementById('gift-grid');
  if (!grid) return;

  const cards = Array.from(grid.querySelectorAll('.gift'));
  cards.forEach((c, i) => { c.dataset.order = i; });

  const $search = document.getElementById('f-search');
  const $sort = document.getElementById('f-sort');
  const $price = document.getElementById('f-price');
  const $available = document.getElementById('f-available');
  const $stores = document.getElementById('f-stores');
  const $results = document.getElementById('results');
  const $empty = document.getElementById('empty');
  const $clear = document.getElementById('f-clear');

  const normalize = (s) => s.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();

  // Chips de lojas (com a quantidade de itens de cada uma)
  const storeCount = {};
  cards.forEach((c) => {
    const s = c.dataset.store;
    storeCount[s] = (storeCount[s] || 0) + 1;
  });
  Object.keys(storeCount)
    .sort((a, b) => storeCount[b] - storeCount[a] || a.localeCompare(b))
    .forEach((store) => {
      const b = document.createElement('button');
      b.className = 'chip';
      b.dataset.store = store;
      b.innerHTML = `${store} <small>${storeCount[store]}</small>`;
      $stores.appendChild(b);
    });

  let store = 'all';
  $stores.addEventListener('click', (ev) => {
    const chip = ev.target.closest('.chip');
    if (!chip) return;
    store = chip.dataset.store;
    $stores.querySelectorAll('.chip').forEach((c) => c.classList.toggle('is-active', c === chip));
    apply();
  });

  function apply() {
    const q = normalize($search.value.trim());
    const [min, max] = $price.value === 'all' ? [0, Infinity] : $price.value.split('-').map(Number);
    const onlyAvailable = $available.checked;

    let visible = 0;
    cards.forEach((c) => {
      const d = c.dataset;
      const price = Number(d.price);
      const show =
        (!q || normalize(d.name).includes(q) || normalize(d.store).includes(q)) &&
        (store === 'all' || d.store === store) &&
        price >= min && price < max &&
        (!onlyAvailable || d.bought === '0');
      c.hidden = !show;
      if (show) visible++;
    });

    const sorted = cards.slice().sort((a, b) => {
      const pa = Number(a.dataset.price), pb = Number(b.dataset.price);
      switch ($sort.value) {
        case 'asc': return pa - pb;
        case 'desc': return pb - pa;
        case 'name': return a.dataset.name.localeCompare(b.dataset.name, 'pt-BR');
        default:
          // Disponíveis primeiro, mantendo a ordem original
          return (a.dataset.bought - b.dataset.bought) || (a.dataset.order - b.dataset.order);
      }
    });
    sorted.forEach((c) => grid.appendChild(c));

    $results.textContent = `${visible} ${visible === 1 ? 'presente' : 'presentes'}`;
    $empty.hidden = visible !== 0;
  }

  $search.addEventListener('input', apply);
  $sort.addEventListener('change', apply);
  $price.addEventListener('change', apply);
  $available.addEventListener('change', apply);
  $clear.addEventListener('click', () => {
    $search.value = '';
    $sort.value = 'default';
    $price.value = 'all';
    $available.checked = false;
    store = 'all';
    $stores.querySelectorAll('.chip').forEach((c) => c.classList.toggle('is-active', c.dataset.store === 'all'));
    apply();
  });

  apply();
})();
