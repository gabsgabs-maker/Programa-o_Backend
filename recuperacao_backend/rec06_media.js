// ☐ Criar um acumulador iniciado em zero.
// ☐ Usar um laço para solicitar exatamente 6 tempos.
// ☐ Somar cada valor ao acumulador.
// ☐ Calcular a média ao final.
// ☐ Exibir a soma dos tempos e a média.

const entrada = require("readline-sync");

let producao = 0;

for (let i = 0; i < 6; i++) {
    const tempo = entrada.questionFloat(`Qual foi o tempo do atendimento ${i + 1}: `);
    producao += tempo;
}

const media = producao / 6;

console.log(`Soma: ${producao} segundos`);
console.log(`Média: ${media.toFixed(2)} segundos`);