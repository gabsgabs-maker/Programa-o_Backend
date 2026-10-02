const entrada = require("readline-sync");

const pecasPorCiclo = entrada.questionInt("Quantos produtos sao produzidos por ciclo? ");

console.log("\n=== PRODUÇÃO ACUMULADA ===");

for (let ciclo = 1; ciclo <= 12; ciclo++) {
    const prodAcumulada = pecasPorCiclo * ciclo;
    console.log(`Ciclo ${ciclo}: ${prodAcumulada} peças`);
}