// ---------- Menu mobile ----------
const botaoMenu = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");
botaoMenu.addEventListener("click", () => menu.classList.toggle("aberto"));

// ---------- Aviso (toast) ----------
const aviso = document.querySelector(".aviso");
let temporizador;
function mostrarAviso(texto) {
  aviso.textContent = texto;
  aviso.classList.add("visivel");
  clearTimeout(temporizador);
  temporizador = setTimeout(() => aviso.classList.remove("visivel"), 3000);
}

// ---------- Máscaras ----------
const soNumeros = valor => valor.replace(/\D/g, "");

document.querySelector("#telefone").addEventListener("input", e => {
  let n = soNumeros(e.target.value).slice(0, 11);
  if (n.length > 10)      n = n.replace(/^(\d{2})(\d{5})(\d{0,4}).*/, "($1) $2-$3");
  else if (n.length > 6)  n = n.replace(/^(\d{2})(\d{4})(\d{0,4}).*/, "($1) $2-$3");
  else if (n.length > 2)  n = n.replace(/^(\d{2})(\d{0,5})/, "($1) $2");
  else if (n.length > 0)  n = n.replace(/^(\d*)/, "($1");
  e.target.value = n;
});

document.querySelector("#cep").addEventListener("input", e => {
  const n = soNumeros(e.target.value).slice(0, 8);
  e.target.value = n.length > 5 ? n.replace(/^(\d{5})(\d{0,3})/, "$1-$2") : n;
});

// ---------- Data de nascimento: não permite datas futuras ----------
document.querySelector("#nascimento").max = new Date().toISOString().split("T")[0];

// ---------- Envio (apenas demonstração, sem back-end) ----------
const form = document.querySelector("#form-cadastro");
form.addEventListener("submit", e => {
  e.preventDefault();
  if (!form.reportValidity()) return; // mostra a mensagem nativa do navegador

  // Futuramente: enviar os dados para a API/banco aqui.
  // const dados = Object.fromEntries(new FormData(form));
  mostrarAviso("Cadastro enviado! (versão de demonstração)");
  form.reset();
});
