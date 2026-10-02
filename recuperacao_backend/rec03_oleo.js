const entrada = require('readline-sync');

const nivelOleo = entrada.questionFloat("Digite o nivel do oleo em porcentagem: ")

if (nivelOleo >=40 && nivelOleo <= 80){
    console.log(`NÍVEL NORMAL!: ${nivelOleo}%`);
}else{
    console.log(`INSPEÇÃO NECESSÁRIA.: ${nivelOleo}%`);
};