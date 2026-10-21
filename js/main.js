// ---------- Menu mobile ----------
const botaoMenu = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");
botaoMenu.addEventListener("click", () => menu.classList.toggle("aberto"));
menu.querySelectorAll("a").forEach(link =>
  link.addEventListener("click", () => menu.classList.remove("aberto"))
);

// ---------- Aviso "Em breve" ----------
const aviso = document.querySelector(".aviso");
let temporizador;
function mostrarAviso(texto) {
  aviso.textContent = texto;
  aviso.classList.add("visivel");
  clearTimeout(temporizador);
  temporizador = setTimeout(() => aviso.classList.remove("visivel"), 2200);
}

// ---------- Renderização dos produtos ----------
const formatarPreco = valor =>
  valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

function criarCard(produto) {
  const imagem = produto.imagem
    ? `<img class="produto__imagem" src="${produto.imagem}" alt="${produto.nome}">`
    : `<div class="produto__imagem"></div>`;
  return `
    <article class="produto">
      ${imagem}
      <div class="produto__corpo">
        <span class="produto__categoria">${produto.categoria}</span>
        <h3 class="produto__nome">${produto.nome}</h3>
        <span class="produto__preco">${formatarPreco(produto.preco)}</span>
        <button class="btn btn-comprar">Adicionar ao carrinho</button>
      </div>
    </article>`;
}

const listaProdutos = document.querySelector("#lista-produtos");
listaProdutos.innerHTML = produtos.map(criarCard).join("");

listaProdutos.addEventListener("click", evento => {
  if (evento.target.classList.contains("btn-comprar")) {
    mostrarAviso("Em breve! Carrinho disponível na próxima etapa.");
  }
});

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
