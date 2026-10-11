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