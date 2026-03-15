let produtos = [
{ nome: 'Camiseta', preco: 50, estoque: 30 },
{ nome: 'Calça', preco: 120, estoque: 20 },
{ nome: 'Tênis', preco: 300, estoque: 15 },
{ nome: 'Boné', preco: 40, estoque: 50 },
{ nome: 'Jaqueta', preco: 250, estoque: 10 },
{ nome: 'Meia', preco: 15, estoque: 100 },
{ nome: 'Cinto', preco: 35, estoque: 25 },
{ nome: 'Relógio', preco: 500, estoque: 8 },
{ nome: 'Mochila', preco: 180, estoque: 18 },
{ nome: 'Óculos', preco: 220, estoque: 12 }
];

A)
produtos[1].preco

B)
produtos[2].nome

C)
produtos.length

D)
for (let i = 0; i < produtos.length; i++) {
console.log(produtos[i].nome);
}

E)
let totalEstoque = 0;
for (let i = 0; i < produtos.length; i++) {
totalEstoque += produtos[i].estoque;
}
console.log(totalEstoque);

F)
let maior = produtos[0];
for (let i = 1; i < produtos.length; i++) {
if (produtos[i].estoque > maior.estoque) {
maior = produtos[i];
}
}
console.log(maior);
