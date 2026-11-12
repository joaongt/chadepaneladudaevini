(function () {
  const casal = window.CASAMENTO || {};
  const brl = (v) => Number(v).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

  /* ---------- Navegação: sombra ao rolar ---------- */
  const nav = document.getElementById('nav');
  const onScroll = () => nav && nav.classList.toggle('is-scrolled', window.scrollY > 24);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---------- Toast ---------- */
  const toast = document.getElementById('toast');
  let toastTimer;
  function showToast(msg) {
    if (!toast) return;
    toast.textContent = msg;
    toast.classList.add('is-visible');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove('is-visible'), 2200);
  }

  /* ---------- Copiar para a área de transferência ---------- */
  async function copyText(text) {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch (e) {
      const ta = document.createElement('textarea');
      ta.value = text;
      ta.setAttribute('readonly', '');
      ta.style.position = 'fixed';
      ta.style.opacity = '0';
      document.body.appendChild(ta);
      ta.select();
      let ok = false;
      try { ok = document.execCommand('copy'); } catch (err) { ok = false; }
      document.body.removeChild(ta);
      return ok;
    }
  }

  document.addEventListener('click', async (ev) => {
    const btn = ev.target.closest('[data-copy]');
    if (!btn) return;
    ev.preventDefault();
    ev.stopPropagation();
    const ok = await copyText(btn.dataset.copy);
    showToast(ok ? 'Copiado: ' + btn.dataset.copy : 'Não foi possível copiar');
    if (ok) {
      btn.classList.add('is-copied');
      const icon = btn.querySelector('i');
      const prev = icon && icon.className;
      if (icon) icon.className = 'bx bx-check';
      setTimeout(() => {
        btn.classList.remove('is-copied');
        if (icon) icon.className = prev;
      }, 1600);
    }
  });

  /* ---------- Modal de presente ---------- */
  const modal = document.getElementById('gift-modal');
  let lastFocus = null;

  function openGift(card) {
    const d = card.dataset;
    lastFocus = document.activeElement;
    modal.querySelector('#modal-img').src = d.image;
    modal.querySelector('#modal-img').alt = d.name;
    modal.querySelector('#modal-title').textContent = d.name;
    modal.querySelector('#modal-store').textContent = d.store;
    modal.querySelector('#modal-price').textContent = brl(d.price);

    const buy = modal.querySelector('#modal-buy');
    buy.href = d.url;
    buy.querySelector('span').textContent = 'Comprar na ' + d.store;

    const wpp = casal.whatsapp || {};
    const msg =
      `Olá, ${wpp.nome || ''}! 💛 Acabei de presentear ${casal.noiva} & ${casal.noivo} com: ` +
      `*${d.name}* (cód. ${d.id}, ${d.store}). Meu nome é: `;
    modal.querySelector('#modal-whats').href =
      `https://wa.me/${wpp.numero}?text=${encodeURIComponent(msg)}`;

    modal.hidden = false;
    requestAnimationFrame(() => modal.classList.add('is-open'));
    document.body.classList.add('no-scroll');
    modal.querySelector('.modal__close').focus();
  }

  function closeGift() {
    modal.classList.remove('is-open');
    document.body.classList.remove('no-scroll');
    setTimeout(() => { modal.hidden = true; }, 200);
    if (lastFocus) lastFocus.focus();
  }

  if (modal) {
    document.addEventListener('click', (ev) => {
      const trigger = ev.target.closest('[data-gift]');
      if (trigger) {
        const card = trigger.closest('.gift');
        if (card) openGift(card);
        return;
      }
      if (ev.target.closest('[data-close]')) closeGift();
    });
    document.addEventListener('keydown', (ev) => {
      if (ev.key === 'Escape' && !modal.hidden) closeGift();
    });
  }

  /* ---------- Contagem regressiva ---------- */
  const cd = document.getElementById('countdown');
  if (cd && casal.data) {
    const target = new Date(casal.data + ':00-03:00').getTime();
    const set = (k, v) => { cd.querySelector(`[data-cd="${k}"]`).textContent = String(v).padStart(2, '0'); };
    const tick = () => {
      const diff = target - Date.now();
      if (diff <= 0) { cd.hidden = true; return false; }
      cd.hidden = false;
      set('d', Math.floor(diff / 864e5));
      set('h', Math.floor(diff / 36e5) % 24);
      set('m', Math.floor(diff / 6e4) % 60);
      set('s', Math.floor(diff / 1e3) % 60);
      return true;
    };
    if (tick()) setInterval(tick, 1000);
  }
})();
