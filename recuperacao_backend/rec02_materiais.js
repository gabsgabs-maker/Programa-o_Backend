const entrada = require('readline-sync');

const peca = entrada.question("Nome da peca: ");
const quantidade = entrada.questionInt("Quantidade comprada: ");
const precoUnitario = entrada.questionFloat("Preco unitário: R$ ");

const total = quantidade * precoUnitario;

console.log("\n=== RESULTADO DA COMPRA ===");
console.log(`Peça: ${peca}`);
console.log(`Quantidade: ${quantidade}`);
console.log(`Preço unitário: R$ ${precoUnitario.toFixed(2)}`);
console.log(`Valor total: R$ ${total.toFixed(2)}`);