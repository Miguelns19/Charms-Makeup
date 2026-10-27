// Caminhos relativos ao index.html. Mantenha as fotos em img/.
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
    "image": "./img/luisance-paleta.jpeg"
  },
  {
    "id": 2,
    "name": "Loção hidratante",
    "brand": "CeraVe",
    "cat": "Corpo",
    "price": null,
    "emoji": "🧴",
    "tag": "",
    "image": "img/cerave-locao.jpeg"
  },
  {
    "id": 3,
    "name": "Gel facial",
    "brand": "Creamy",
    "cat": "Corpo",
    "price": null,
    "emoji": "💧",
    "tag": "",
    "image": "img/creamy-gel.jpeg"
  },
  {
    "id": 4,
    "name": "Batom Nude",
    "brand": "Luisance",
    "cat": "Maquiagem",
    "price": null,
    "emoji": "💄",
    "tag": "",
    "image": "img/luisance-batom.jpeg"
  },
  {
    "id": 5,
    "name": "Lip Gloss",
    "brand": "Luisance",
    "cat": "Maquiagem",
    "price": null,
    "emoji": "💄",
    "tag": "",
    "image": "img/luisance-gloss.jpeg"
  },
  {
    "id": 6,
    "name": "Magic Gloss",
    "brand": "Luisance",
    "cat": "Maquiagem",
    "price": null,
    "emoji": "💄",
    "tag": "",
    "image": "img/luisance-gloss-magic.jpeg"
  },
  {
    "id": 7,
    "name": "Cílios postiços efeito 3D",
    "brand": "Macrilan",
    "cat": "Olhos",
    "price": null,
    "emoji": "✧",
    "tag": "",
    "image": "img/macrilan-cilios.jpeg"
  },
  {
    "id": 8,
    "name": "Cola para cílios postiços",
    "brand": "Macrilan",
    "cat": "Olhos",
    "price": null,
    "emoji": "✧",
    "tag": "",
    "image": "img/macrilan-cola.jpeg"
  },
  {
    "id": 9,
    "name": "Kit de pincéis",
    "brand": "Macrilan",
    "cat": "Acessórios",
    "price": null,
    "emoji": "🖌️",
    "tag": "",
    "image": "img/macrilan-pinceis.jpeg"
  },
  {
    "id": 10,
    "name": "Primer Rosa Mosqueta",
    "brand": "Max Love",
    "cat": "Maquiagem",
    "price": null,
    "emoji": "💧",
    "tag": "",
    "image": "img/maxlove-primer.jpeg"
  },
  {
    "id": 11,
    "name": "Batom líquido",
    "brand": "Melu",
    "cat": "Maquiagem",
    "price": null,
    "emoji": "💄",
    "tag": "",
    "image": "img/melu-batom.jpeg"
  },
  {
    "id": 12,
    "name": "Batom Ultra Hidratante",
    "brand": "Melu",
    "cat": "Maquiagem",
    "price": null,
    "emoji": "💄",
    "tag": "",
    "image": "img/melu-batom-ultra.jpeg"
  },
  {
    "id": 13,
    "name": "Loção corporal",
    "brand": "Melu",
    "cat": "Corpo",
    "price": null,
    "emoji": "🧴",
    "tag": "",
    "image": "img/melu-locao.jpeg"
  },
  {
    "id": 14,
    "name": "Paleta para sobrancelhas",
    "brand": "Melu",
    "cat": "Olhos",
    "price": null,
    "emoji": "🎨",
    "tag": "",
    "image": "img/melu-paleta.jpeg"
  },
  {
    "id": 15,
    "name": "Hidratante corporal Frutas Vermelhas",
    "brand": "Monange",
    "cat": "Corpo",
    "price": null,
    "emoji": "🧴",
    "tag": "",
    "image": "img/monange-hidra.jpeg"
  },
  {
    "id": 16,
    "name": "Base Fluida HD Una",
    "brand": "Natura",
    "cat": "Maquiagem",
    "price": null,
    "emoji": "💧",
    "tag": "",
    "image": "img/natura-base.jpeg"
  },
  {
    "id": 17,
    "name": "Hidratante Morango",
    "brand": "Porán",
    "cat": "Corpo",
    "price": null,
    "emoji": "🧴",
    "tag": "",
    "image": "img/poran-hidra.jpeg"
  },
  {
    "id": 18,
    "name": "Esponja de maquiagem Midnight",
    "brand": "Ruby Rose",
    "cat": "Acessórios",
    "price": null,
    "emoji": "✧",
    "tag": "",
    "image": "img/rubyrose-esponja.jpeg"
  },
  {
    "id": 19,
    "name": "Gloss labial",
    "brand": "Ruby Rose",
    "cat": "Maquiagem",
    "price": null,
    "emoji": "💄",
    "tag": "",
    "image": "img/rubyrose-gloss.jpeg"
  },
  {
    "id": 20,
    "name": "Paleta de sombras",
    "brand": "Vivai",
    "cat": "Olhos",
    "price": null,
    "emoji": "🎨",
    "tag": "",
    "image": "img/vivai-paleta.jpeg"
  },
  {
    "id": 21,
    "name": "Body Splash Berry Pie",
    "brand": "Melu",
    "cat": "Fragrância",
    "price": null,
    "emoji": "🎨",
    "tag": "",
    "image": "img/melu-body.jpeg"
  },
  {
    "id": 22,
    "name": "Hidratante Morango",
    "brand": "Porán",
    "cat": "Corpo",
    "price": null,
    "emoji": "🎨",
    "tag": "",
    "image": "img/poran-hidra1.jpeg"
  }
];
