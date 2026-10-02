// ☐ Criar a função calcularAproveitamento(util, total) que retorne o percentual.
// ☐ Criar a função classificarAproveitamento(percentual).
// ☐ Classificação: 90% ou mais = &quot;EXCELENTE&quot;; de 75% a 89,99% = &quot;ADEQUADO&quot;; abaixo de 75% = &quot;REVISAR PROCESSO&quot;.
// ☐ Solicitar quantidade total e quantidade útil pelo terminal.
// ☐ Chamar as duas funções.
// ☐ Exibir total, quantidade útil, percentual e classificação.
const entrada = require("readline-sync");

function calcularAproveitamento(util, total) {

    return (util / total) * 100;
}

function classificarEficiencia(percentual) {
    if (percentual >= 90) {
        return "EXELENTE";
    } else if (percentual >= 75 && percentual < 90) {
        return "ADEQUADO";
    } else {
        return "REVISAR PROCESSO";
    }
}

const total = entrada.questionInt("Informe a quantidade total: ");
const util = entrada.questionInt("Informe a quantidade util: ");

const percentual = calcularAproveitamento(util, total);
const classificacao = classificarEficiencia(percentual);

console.log("\n=== APROVEITAMENTOO ===");

console.log(`Total: ${total}`);
console.log(`Quantidade útil: ${util}`);
console.log(`Percentual: ${percentual.toFixed(2)}%`);
console.log(`Classificação: ${classificacao}`);
