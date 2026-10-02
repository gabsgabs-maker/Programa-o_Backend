// Objetivo: Revisar variáveis, operações matemáticas e saída de dados.
// Uma máquina de embalagem produz uma quantidade fixa de caixas por hora. Crie um programa que calcule quantas caixas serão
// produzidas durante um dia de trabalho.
// O programa deve:
// ☐ Criar uma variável para a quantidade de caixas produzidas por hora.
// ☐ Criar uma variável para a quantidade de horas trabalhadas no dia.
// ☐ Calcular a produção total.
// ☐ Exibir uma frase informando caixas por hora, horas trabalhadas e total produzido.

const caixasPorHora = 75;
const horasTrabalhadas = 8;

const producaoTotal = caixasPorHora * horasTrabalhadas;

console.log("=== CAIXAS PRODUZIDAS ===");
console.log(`Produção por hora: ${caixasPorHora} caixas`);
console.log(`Horas trabalhadas: ${horasTrabalhadas} horas`);
console.log(`Produção total: ${producaoTotal} peças`);