// Função para calcular o desconto
function calcularDesconto(preco, desconto) {
  return preco - preco * (desconto / 100);
}

// Lista de produtos com preço original e desconto
const produtos = [
  { nome: "Camisa", preco: 50, desconto: 10 }, // 10% de desconto
  { nome: "Calça", preco: 120, desconto: 20 }, // 20% de desconto
  { nome: "Tênis", preco: 300, desconto: 15 }, // 15% de desconto
  { nome: "Boné", preco: 80, desconto: 5 }, // 5% de desconto
];

// Exibir informações no console
produtos.forEach((produto) => {
  const precoFinal = calcularDesconto(produto.preco, produto.desconto);
  console.log(`Produto: ${produto.nome}`);
  console.log(`Preço Original: R$ ${produto.preco.toFixed(2)}`);
  console.log(`Desconto Aplicado: ${produto.desconto}%`);
  console.log(`Preço Final: R$ ${precoFinal.toFixed(2)}`);
  console.log("-----------------------------");
});
