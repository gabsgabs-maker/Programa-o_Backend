// ☐ Criar o arquivo funcoesOrcamento.js.
// ☐ Criar calcularMaoDeObra(horas), considerando R$ 95,00 por hora.
// ☐ Criar calcularTotal(valorMateriais, horas), somando materiais e mão de obra.
// ☐ Criar verificarDesconto(total), retornando &quot;DESCONTO DE 10%&quot; quando total &gt;= R$ 1000,00 e &quot;SEM DESCONTO&quot; nos demais
// casos.
// ☐ Exportar as funções com module.exports.
// ☐ Criar o arquivo app.js.
// ☐ No app.js, importar readline-sync e o módulo com require().
// ☐ Solicitar nome do cliente, valor dos materiais e horas de serviço.
// ☐ Exibir relatório com cliente, materiais, mão de obra, total e situação do desconto.

const entrada = require("readline-sync");

const {
    calcularMaoDeObra,
    calcularTotal,
    verificarDesconto
} = require("./funcoesOrcamento");

const maquina = entrada.question("Nome da maquina: ");
const valorPecas = entrada.questionFloat("Valor das pecas: R$ ");
const horas = entrada.questionFloat("Horas de servico: ");


const maoDeObra = calcularMaoDeObra(horas);
const total = calcularTotal(valorPecas, horas);
const desconto = verificarDesconto(total);

console.log("\n=== RELATÓRIO DE MANUTENÇÃO ===");
console.log(`Máquina: ${maquina}`);
console.log(`Mão de obra: R$ ${maoDeObra.toFixed(2)}`);
console.log(`Peças: R$ ${valorPecas.toFixed(2)}`);
console.log(`Total: R$ ${total.toFixed(2)}`);
console.log(`Desconto: ${desconto}`);