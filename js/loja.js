let current = 'Todos', query = '', cart = {}; const brl = v => v.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }); function filterCategory(cat) { current = cat; render(); } function render() { const cats = ['Todos', 'Acessórios', 'Corpo', 'Fragrância', 'Maquiagem', 'Olhos']; document.getElementById('filters').innerHTML = cats.map(c => `<button class="chip ${c === current ? 'active' : ''}" onclick="filterCategory('${c}')">${c}</button>`).join(''); let found = products.filter(p => (current === 'Todos' || p.cat === current) && (`${p.name} ${p.brand} ${p.cat}`.toLowerCase().includes(query))); document.getElementById('results').textContent = found.length + ' produtos'; document.getElementById('grid').innerHTML = found.length ? found.map(p => `<article class="product-card"><div class="product-art">${p.tag ? `<span class="tag">${p.tag}</span>` : ''}${p.image ? `<img class="product-photo" src="${p.image}" alt="${p.name} — ${p.brand}" loading="lazy" width="400" height="400">` : `<span class="object">${p.emoji}</span>`}</div><h3>${p.name}</h3><small>${p.brand}</small><div class="price">${p.price === null ? "Preço sob consulta" : brl(p.price)}</div>${p.price === null ? `<a class="add" href="https://api.whatsapp.com/send/?phone=15998442821&text=${encodeURIComponent("Olá! Gostaria de consultar o valor de " + p.name + " — " + p.brand)}">Consultar valor ↗</a>` : `<button class="add" onclick="addToCart(${p.id})">Adicionar à sacola +</button>`}</article>`).join('') : '<p class="empty">Nenhum produto encontrado. Tente outra busca.</p>'; } document.getElementById('search').addEventListener('input', e => { query = e.target.value.trim().toLowerCase(); render(); }); function addToCart(id) { cart[id] = (cart[id] || 0) + 1; renderCart(); showToast('Produto adicionado à sacola'); } function removeFromCart(id) { delete cart[id]; renderCart(); } function changeQty(id, delta) { cart[id] += delta; if (cart[id] <= 0) delete cart[id]; renderCart(); } function renderCart() { const ids = Object.keys(cart); document.getElementById('count').textContent = ids.reduce((a, id) => a + cart[id], 0); document.getElementById('cart-items').innerHTML = ids.length ? ids.map(id => { let p = products.find(p => p.id == id); return `<div class="cart-item"><div class="cart-emoji">${p.image ? `<img class="product-photo" src="${p.image}" alt="${p.name}" width="65" height="70">` : p.emoji}</div><div class="cart-info"><strong>${p.name}</strong>${brl(p.price)}<div><button aria-label="Diminuir quantidade de ${p.name}" onclick="changeQty(${id},-1)">−</button> &nbsp; ${cart[id]} &nbsp; <button aria-label="Aumentar quantidade de ${p.name}" onclick="changeQty(${id},1)">+</button></div><button onclick="removeFromCart(${id})">Remover</button></div></div>` }).join('') : '<p style="text-align:center;color:var(--muted);padding:65px 10px">Sua sacola está vazia. ♡</p>'; document.getElementById('total').textContent = brl(ids.reduce((v, id) => v + products.find(p => p.id == id).price * cart[id], 0)); } let focoAnterior;
function toggleCart(open) {
  const drawer = document.getElementById('drawer');
  if (open) focoAnterior = document.activeElement;
  drawer.inert = !open;
  drawer.setAttribute('aria-hidden', String(!open));
  drawer.classList.toggle('open', open);
  document.getElementById('overlay').classList.toggle('open', open);
  document.body.style.overflow = open ? 'hidden' : '';
  if (open) drawer.querySelector('button').focus();
  else if (focoAnterior) focoAnterior.focus();
}
document.getElementById('drawer').addEventListener('keydown', e => {
  if (e.key !== 'Tab') return;
  const buttons = [...e.currentTarget.querySelectorAll('button')];
  const first = buttons[0], last = buttons[buttons.length - 1];
  if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
  else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
});
let toastTimeout; function showToast(msg) { const el = document.getElementById('toast'); el.textContent = msg; el.classList.add('show'); clearTimeout(toastTimeout); toastTimeout = setTimeout(() => el.classList.remove('show'), 2600) } document.addEventListener('keydown', e => { if (e.key === 'Escape') toggleCart(false) }); render(); renderCart();

// ---------- Carrossel de avaliações ----------
const depoimentos = document.querySelector(".depoimentos");
const controlesDepoimentos = document.querySelector(".carrossel-controles");
const posicaoDepoimento = document.querySelector(".carrossel-posicao");
const avaliacoes = [...depoimentos.querySelectorAll(".depoimento")];
let avaliacaoAtual = 0;
const carrosselDepoimentos = document.querySelector(".carrossel-depoimentos");
const movimentoReduzido = window.matchMedia("(prefers-reduced-motion: reduce)");
let temporizadorCarrossel;
let cursorNoCarrossel = false;

function atualizarRotacaoAutomatica() {
  clearInterval(temporizadorCarrossel);
  const pausado = cursorNoCarrossel || carrosselDepoimentos.contains(document.activeElement)
    || document.hidden || movimentoReduzido.matches || avaliacoes.length < 2;
  posicaoDepoimento.setAttribute("aria-live", pausado ? "polite" : "off");
  if (!pausado) {
    temporizadorCarrossel = setInterval(() => navegarAvaliacao(1), 5000);
  }
}

carrosselDepoimentos.addEventListener("mouseenter", () => {
  cursorNoCarrossel = true;
  atualizarRotacaoAutomatica();
});
carrosselDepoimentos.addEventListener("mouseleave", () => {
  cursorNoCarrossel = false;
  atualizarRotacaoAutomatica();
});
carrosselDepoimentos.addEventListener("focusin", atualizarRotacaoAutomatica);
carrosselDepoimentos.addEventListener("focusout", () => {
  setTimeout(atualizarRotacaoAutomatica, 0);
});
document.addEventListener("visibilitychange", atualizarRotacaoAutomatica);
movimentoReduzido.addEventListener("change", atualizarRotacaoAutomatica);

avaliacoes.forEach((avaliacao, indice) => {
  avaliacao.setAttribute("role", "group");
  avaliacao.setAttribute("aria-roledescription", "slide");
  avaliacao.setAttribute("aria-label", `${indice + 1} de ${avaliacoes.length}`);
});
controlesDepoimentos.hidden = avaliacoes.length < 2;

function navegarAvaliacao(direcao) {
  const destino = (avaliacaoAtual + direcao + avaliacoes.length) % avaliacoes.length;
  depoimentos.scrollTo({
    left: destino * depoimentos.clientWidth,
    behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth"
  });
}

controlesDepoimentos.querySelectorAll("button").forEach(botao => {
  botao.addEventListener("click", () => navegarAvaliacao(Number(botao.dataset.direcao)));
});
depoimentos.addEventListener("keydown", evento => {
  if (evento.key === "ArrowLeft" || evento.key === "ArrowRight") {
    evento.preventDefault();
    navegarAvaliacao(evento.key === "ArrowRight" ? 1 : -1);
  }
});
depoimentos.addEventListener("scroll", () => {
  avaliacaoAtual = Math.round(depoimentos.scrollLeft / depoimentos.clientWidth);
  posicaoDepoimento.textContent = `${avaliacaoAtual + 1} de ${avaliacoes.length}`;
}, { passive: true });
window.addEventListener("resize", () => {
  depoimentos.scrollTo({ left: avaliacaoAtual * depoimentos.clientWidth, behavior: "instant" });
});
atualizarRotacaoAutomatica();
