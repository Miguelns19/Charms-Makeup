// Catálogo compartilhado pela vitrine e pelas páginas de produto.
// Preencha price com o valor numérico quando os preços forem informados.
const products = [
  {
    "id": 1,
    "name": "Paleta de sombras",
    "brand": "Luisance",
    "cat": "Olhos",
    "price": null,
    "emoji": "🎨",
    "tag": "",
    "image": "./img/luisance-paleta.jpeg",
    "description": "Paleta de sombras Luisance para compor diferentes combinações na maquiagem dos olhos. Consulte as cores disponíveis com a loja."
  },
  {
    "id": 2,
    "name": "Loção hidratante",
    "brand": "CeraVe",
    "cat": "Corpo",
    "price": null,
    "emoji": "🧴",
    "tag": "",
    "image": "img/cerave-locao.jpeg",
    "description": "Loção hidratante CeraVe para os cuidados diários com a pele. Consulte a versão e o volume disponíveis."
  },
  {
    "id": 3,
    "name": "Gel facial",
    "brand": "Creamy",
    "cat": "Corpo",
    "price": null,
    "emoji": "💧",
    "tag": "",
    "image": "img/creamy-gel.jpeg",
    "description": "Gel facial Creamy para incluir na sua rotina de cuidados com a pele. Consulte a versão disponível e as orientações da embalagem."
  },
  {
    "id": 4,
    "name": "Batom Nude",
    "brand": "Luisance",
    "cat": "Maquiagem",
    "price": null,
    "emoji": "💄",
    "tag": "",
    "image": "img/luisance-batom.jpeg",
    "description": "Batom da linha Nude da Luisance para compor a maquiagem dos lábios. Consulte as tonalidades disponíveis."
  },
  {
    "id": 5,
    "name": "Lip Gloss",
    "brand": "Luisance",
    "cat": "Maquiagem",
    "price": null,
    "emoji": "💄",
    "tag": "",
    "image": "img/luisance-gloss.jpeg",
    "description": "Gloss labial Luisance para finalizar a maquiagem dos lábios com brilho. Consulte as cores disponíveis."
  },
  {
    "id": 6,
    "name": "Magic Gloss",
    "brand": "Luisance",
    "cat": "Maquiagem",
    "price": null,
    "emoji": "💄",
    "tag": "",
    "image": "img/luisance-gloss-magic.jpeg",
    "description": "Magic Gloss da Luisance para a maquiagem dos lábios. Consulte a tonalidade e a versão disponíveis."
  },
  {
    "id": 7,
    "name": "Cílios postiços efeito 3D",
    "brand": "Macrilan",
    "cat": "Olhos",
    "price": null,
    "emoji": "✧",
    "tag": "",
    "image": "img/macrilan-cilios.jpeg",
    "description": "Cílios postiços Macrilan com efeito 3D para complementar a maquiagem dos olhos. Consulte o modelo disponível."
  },
  {
    "id": 8,
    "name": "Cola para cílios postiços",
    "brand": "Macrilan",
    "cat": "Olhos",
    "price": null,
    "emoji": "✧",
    "tag": "",
    "image": "img/macrilan-cola.jpeg",
    "description": "Cola Macrilan para aplicação de cílios postiços. Consulte a versão disponível e siga as instruções de aplicação da embalagem."
  },
  {
    "id": 9,
    "name": "Kit de pincéis",
    "brand": "Macrilan",
    "cat": "Acessórios",
    "price": null,
    "emoji": "🖌️",
    "tag": "",
    "image": "img/macrilan-pinceis.jpeg",
    "description": "Kit de pincéis Macrilan para auxiliar na aplicação da maquiagem. Consulte a composição do kit disponível."
  },
  {
    "id": 10,
    "name": "Primer Rosa Mosqueta",
    "brand": "Max Love",
    "cat": "Maquiagem",
    "price": null,
    "emoji": "💧",
    "tag": "",
    "image": "img/maxlove-primer.jpeg",
    "description": "Primer Rosa Mosqueta da Max Love para a etapa de preparação da maquiagem. Consulte os detalhes da versão disponível."
  },
  {
    "id": 11,
    "name": "Batom líquido",
    "brand": "Melu",
    "cat": "Maquiagem",
    "price": null,
    "emoji": "💄",
    "tag": "",
    "image": "img/melu-batom.jpeg",
    "description": "Batom líquido Melu para a maquiagem dos lábios. Consulte as tonalidades disponíveis."
  },
  {
    "id": 12,
    "name": "Batom Ultra Hidratante",
    "brand": "Melu",
    "cat": "Maquiagem",
    "price": null,
    "emoji": "💄",
    "tag": "",
    "image": "img/melu-batom-ultra.jpeg",
    "description": "Batom Ultra Hidratante Melu para compor a maquiagem dos lábios. Consulte as cores disponíveis."
  },
  {
    "id": 13,
    "name": "Loção corporal",
    "brand": "Melu",
    "cat": "Corpo",
    "price": null,
    "emoji": "🧴",
    "tag": "",
    "image": "img/melu-locao.jpeg",
    "description": "Loção corporal Melu para a rotina de cuidados com o corpo. Consulte a fragrância e o volume disponíveis."
  },
  {
    "id": 14,
    "name": "Paleta para sobrancelhas",
    "brand": "Melu",
    "cat": "Olhos",
    "price": null,
    "emoji": "🎨",
    "tag": "",
    "image": "img/melu-paleta.jpeg",
    "description": "Paleta Melu para a maquiagem das sobrancelhas. Consulte as tonalidades e a versão disponíveis."
  },
  {
    "id": 15,
    "name": "Hidratante corporal Frutas Vermelhas",
    "brand": "Monange",
    "cat": "Corpo",
    "price": null,
    "emoji": "🧴",
    "tag": "",
    "image": "img/monange-hidra.jpeg",
    "description": "Hidratante corporal Monange na versão Frutas Vermelhas para os cuidados com a pele do corpo. Consulte o volume disponível."
  },
  {
    "id": 16,
    "name": "Base Fluida HD Una",
    "brand": "Natura",
    "cat": "Maquiagem",
    "price": null,
    "emoji": "💧",
    "tag": "",
    "image": "img/natura-base.jpeg",
    "description": "Base Fluida HD da linha Una, da Natura, para a maquiagem do rosto. Consulte as tonalidades disponíveis para escolher a sua."
  },
  {
    "id": 17,
    "name": "Hidratante Morango",
    "brand": "Porán",
    "cat": "Corpo",
    "price": null,
    "emoji": "🧴",
    "tag": "",
    "image": "img/poran-hidra.jpeg",
    "description": "Hidratante Porán na versão Morango para os cuidados com a pele. Consulte o volume e a apresentação disponíveis."
  },
  {
    "id": 18,
    "name": "Esponja de maquiagem Midnight",
    "brand": "Ruby Rose",
    "cat": "Acessórios",
    "price": null,
    "emoji": "✧",
    "tag": "",
    "image": "img/rubyrose-esponja.jpeg",
    "description": "Esponja de maquiagem Ruby Rose da linha Midnight para auxiliar na aplicação de produtos na pele. Consulte o modelo disponível."
  },
  {
    "id": 19,
    "name": "Gloss labial",
    "brand": "Ruby Rose",
    "cat": "Maquiagem",
    "price": null,
    "emoji": "💄",
    "tag": "",
    "image": "img/rubyrose-gloss.jpeg",
    "description": "Gloss labial Ruby Rose para finalizar a maquiagem dos lábios. Consulte as cores e a versão disponíveis."
  },
  {
    "id": 20,
    "name": "Paleta de sombras",
    "brand": "Vivai",
    "cat": "Olhos",
    "price": null,
    "emoji": "🎨",
    "tag": "",
    "image": "img/vivai-paleta.jpeg",
    "description": "Paleta de sombras Vivai para criar combinações na maquiagem dos olhos. Consulte as tonalidades disponíveis."
  },
  {
    "id": 21,
    "name": "Body Splash Berry Pie",
    "brand": "Melu",
    "cat": "Fragrância",
    "price": null,
    "emoji": "🎨",
    "tag": "",
    "image": "img/melu-body.jpeg",
    "description": "Body Splash Melu na versão Berry Pie para sua rotina de perfumação. Consulte o volume disponível."
  },
  {
    "id": 22,
    "name": "Hidratante Morango",
    "brand": "Porán",
    "cat": "Corpo",
    "price": null,
    "emoji": "🎨",
    "tag": "",
    "image": "img/poran-hidra1.jpeg",
    "description": "Hidratante Porán na versão Morango, em outra apresentação do catálogo. Consulte com a loja o volume e a diferença entre as versões."
  }
];
