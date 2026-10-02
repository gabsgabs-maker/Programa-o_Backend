const entrada = require("readline-sync");

const nivelDaVibracao = entrada.questionFloat("Digite o nivel de vibracao em mm/s: ");

if (nivelDaVibracao <= 3) {
    console.log("situacao: ESTAVEL");
} else if (nivelDaVibracao <= 6) {
    console.log("situacao: ATENCAO");
} else {
    console.log("situacao: CRITICA");
}
console.log(`Nivel de vibracao: ${nivelDaVibracao} mm/s`);