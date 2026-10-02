// ☐ Criar um array vazio.
// ☐ Usar um laço para solicitar 6 nomes de setores.
// ☐ Adicionar cada nome ao array usando push().
// ☐ Percorrer o array novamente após o cadastro.
// ☐ Exibir no formato &quot;1 - Montagem&quot;, &quot;2 - Qualidade&quot; etc.
// ☐ Usar a propriedade length em pelo menos um dos laços.
const entrada = require('readline-sync');

setores = []

for (let i = 0; i < 6; i++){
    const setor = entrada.question(`Cadastre o setor: ${i + 1}:`)
    setores.push(setor);
}


console.log ("\n==SETORES CADASTRADOS==");
for (let i = 0; i < setores.length; i++) {
    console.log(`${i + 1} - ${setores[i]}`);
}