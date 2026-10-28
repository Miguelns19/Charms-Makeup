// Esta página usa o mesmo catálogo da vitrine, identificado por ?id=.
const detalhe = document.getElementById('product-detail');
const idInformado = new URLSearchParams(window.location.search).get('id');
const produto = products.find(item => String(item.id) === idInformado);
const escapar = valor => String(valor).replace(/[&<>"']/g, caractere => ({
  '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
})[caractere]);
const preco = item => typeof item.price === 'number' && Number.isFinite(item.price)
  ? item.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
  : 'Preço sob consulta';

function foto(item, classe = '') {
  return item.image
    ? `<img class="${classe}" src="${escapar(item.image)}" alt="${escapar(item.name)} — ${escapar(item.brand)}" width="600" height="600">`
    : `<span class="detail-placeholder" aria-hidden="true">${escapar(item.emoji || '✧')}</span>`;
}

if (!produto) {
  document.title = 'Produto não encontrado | Charms Makeup';
  document.getElementById('breadcrumb-name').textContent = 'Produto não encontrado';
  detalhe.innerHTML = `<section class="product-not-found"><span class="eyebrow">Vamos tentar de novo?</span>
    <h1>Produto não encontrado</h1>
    <p>Este link não corresponde a um produto do nosso catálogo. Explore a seleção para encontrar seu próximo favorito.</p>
    <a class="cta" href="index.html#produtos">Explorar produtos</a></section>`;
} else {
  document.title = `${produto.name} — ${produto.brand} | Charms Makeup`;
  document.getElementById('breadcrumb-name').textContent = `${produto.name} — ${produto.brand}`;
  const mensagem = `Olá! Gostaria de saber mais sobre ${produto.name} — ${produto.brand} (referência ${produto.id}). Pode me informar o valor, as opções e a disponibilidade?`;
  detalhe.innerHTML = `<article class="product-detail">
    <div class="detail-image">${foto(produto, 'detail-photo')}</div>
    <div class="detail-info">
      <span class="eyebrow">${escapar(produto.cat)}</span>
      <p class="detail-brand">${escapar(produto.brand)}</p>
      <h1>${escapar(produto.name)}</h1>
      <p class="detail-description">${escapar(produto.description || `${produto.name} da marca ${produto.brand}. Consulte as opções disponíveis com a loja.`)}</p>
      <p class="detail-price">${preco(produto)}</p>
      <p class="detail-availability">Consulte a disponibilidade e as opções antes de comprar.</p>
      <a class="cta detail-contact" href="https://api.whatsapp.com/send/?phone=15998442821&text=${encodeURIComponent(mensagem)}">Consultar pelo WhatsApp <span aria-hidden="true">↗</span></a>
      <p class="detail-help">Atendimento para tirar suas dúvidas sobre cores, versões, pagamento e entrega.</p>
      <dl class="detail-facts">
        <div><dt>Marca</dt><dd>${escapar(produto.brand)}</dd></div>
        <div><dt>Categoria</dt><dd>${escapar(produto.cat)}</dd></div>
        <div><dt>Referência no catálogo</dt><dd>${produto.id}</dd></div>
      </dl>
      <details class="detail-extra" open><summary>Sobre este produto</summary>
        <p>${escapar(produto.description || produto.name)}</p>
        <p>Confirme com a loja a cor, a versão, o volume e os itens inclusos. A aparência pode variar conforme a tela e a opção escolhida.</p>
      </details>
      <details class="detail-extra"><summary>Cuidados e informações de uso</summary>
        <p>Consulte as instruções, a composição e as precauções na embalagem antes de usar. Em caso de dúvidas sobre o produto, fale com a nossa equipe.</p>
      </details>
      <details class="detail-extra"><summary>Pagamento e entrega</summary>
        <p>As condições de pagamento e as opções de entrega ou retirada são confirmadas no atendimento pelo WhatsApp.</p>
      </details>
    </div>
  </article>`;

  // Se uma foto estiver indisponível, mantenha um espaço visual sem ícone quebrado.
  detalhe.querySelector('img')?.addEventListener('error', evento => {
    const alternativa = document.createElement('span');
    alternativa.className = 'detail-placeholder';
    alternativa.textContent = produto.emoji || '✧';
    alternativa.setAttribute('role', 'img');
    alternativa.setAttribute('aria-label', 'Foto indisponível');
    evento.currentTarget.replaceWith(alternativa);
  });

  const relacionados = products.filter(item => item.cat === produto.cat && item.id !== produto.id).slice(0, 4);
  document.getElementById('related-section').hidden = relacionados.length === 0;
  document.getElementById('related-grid').innerHTML = relacionados.map(item => `<article class="product-card">
    <a class="product-details-link" href="produto.html?id=${item.id}">
      <div class="product-art">${foto(item, 'product-photo')}</div>
      <h3>${escapar(item.name)}</h3><small>${escapar(item.brand)}</small>
    </a><p class="price">${preco(item)}</p>
    <a class="add" href="produto.html?id=${item.id}">Ver detalhes</a>
  </article>`).join('');
}
