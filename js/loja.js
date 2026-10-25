const products=[{id:1,name:'Gloss labial brilho rosado',brand:'Linha demonstrativa',cat:'Maquiagem',price:19.9,emoji:'💄',tag:'Queridinho'},{id:2,name:'Blush compacto rosa suave',brand:'Linha demonstrativa',cat:'Maquiagem',price:24.9,emoji:'🩷',tag:'Destaque'},{id:3,name:'Paleta de sombras tons nude',brand:'Linha demonstrativa',cat:'Maquiagem',price:39.9,emoji:'🎨',tag:''},{id:4,name:'Spray limpador de pincéis',brand:'Linha demonstrativa',cat:'Acessórios',price:18.9,emoji:'🧴',tag:'Prático'},{id:5,name:'Sérum hidratante facial',brand:'Linha demonstrativa',cat:'Skincare',price:32.9,emoji:'💧',tag:''},{id:6,name:'Body splash floral',brand:'Linha demonstrativa',cat:'Perfumes',price:45.9,emoji:'🌸',tag:'Favorito'},{id:7,name:'Esponja de maquiagem',brand:'Linha demonstrativa',cat:'Acessórios',price:12.9,emoji:'🧽',tag:''},{id:8,name:'Máscara de cílios volume',brand:'Linha demonstrativa',cat:'Maquiagem',price:22.9,emoji:'🖤',tag:''}];
let current='Todos',query='',cart={};const brl=v=>v.toLocaleString('pt-BR',{style:'currency',currency:'BRL'});function filterCategory(cat){current=cat;render();}function render(){const cats=['Todos','Maquiagem','Skincare','Perfumes','Acessórios'];document.getElementById('filters').innerHTML=cats.map(c=>`<button class="chip ${c===current?'active':''}" onclick="filterCategory('${c}')">${c}</button>`).join('');let found=products.filter(p=>(current==='Todos'||p.cat===current)&&(`${p.name} ${p.cat}`.toLowerCase().includes(query)));document.getElementById('results').textContent=found.length+' produtos';document.getElementById('grid').innerHTML=found.length?found.map(p=>`<article class="product-card"><div class="product-art">${p.tag?`<span class="tag">${p.tag}</span>`:''}<span class="object">${p.emoji}</span></div><h3>${p.name}</h3><small>${p.brand}</small><div class="price">${brl(p.price)}</div><button class="add" onclick="addToCart(${p.id})">Adicionar à sacola +</button></article>`).join(''):'<p class="empty">Nenhum produto encontrado. Tente outra busca.</p>';}document.getElementById('search').addEventListener('input',e=>{query=e.target.value.trim().toLowerCase();render();});function addToCart(id){cart[id]=(cart[id]||0)+1;renderCart();showToast('Produto adicionado à sacola');}function removeFromCart(id){delete cart[id];renderCart();}function changeQty(id,delta){cart[id]+=delta;if(cart[id]<=0)delete cart[id];renderCart();}function renderCart(){const ids=Object.keys(cart);document.getElementById('count').textContent=ids.reduce((a,id)=>a+cart[id],0);document.getElementById('cart-items').innerHTML=ids.length?ids.map(id=>{let p=products.find(p=>p.id==id);return `<div class="cart-item"><div class="cart-emoji">${p.emoji}</div><div class="cart-info"><strong>${p.name}</strong>${brl(p.price)}<div><button aria-label="Diminuir quantidade de ${p.name}" onclick="changeQty(${id},-1)">−</button> &nbsp; ${cart[id]} &nbsp; <button aria-label="Aumentar quantidade de ${p.name}" onclick="changeQty(${id},1)">+</button></div><button onclick="removeFromCart(${id})">Remover</button></div></div>`}).join(''):'<p style="text-align:center;color:var(--muted);padding:65px 10px">Sua sacola está vazia. ♡</p>';document.getElementById('total').textContent=brl(ids.reduce((v,id)=>v+products.find(p=>p.id==id).price*cart[id],0));}let focoAnterior;
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
let toastTimeout;function showToast(msg){const el=document.getElementById('toast');el.textContent=msg;el.classList.add('show');clearTimeout(toastTimeout);toastTimeout=setTimeout(()=>el.classList.remove('show'),2600)}document.addEventListener('keydown',e=>{if(e.key==='Escape')toggleCart(false)});render();renderCart();

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
