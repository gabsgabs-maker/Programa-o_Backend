// O programa deve:
// ☐ Criar um array vazio para armazenar as ferramentas.
// ☐ Cadastrar 4 ferramentas usando um laço.
// ☐ Criar um objeto para cada ferramenta com nome, quantidade e minimo.
// ☐ Adicionar cada objeto ao array com push().
// ☐ Percorrer o array após o cadastro.
// ☐ Quando quantidade &lt; minimo, exibir &quot;REPOR&quot;.
// ☐ Caso contrário, exibir &quot;ESTOQUE SUFICIENTE&quot;.
// ☐ Apresentar nome, quantidade, mínimo e situação de cada ferramenta.

const entrada = require('readline-sync');

const ferramentas = [];

for (let i = 0; i < 4; i++) {
    const nome = entrada.question(`Nome da ferramenta ${i + 1}: `);
    const quantidade = entrada.questionInt(`Quantidade em estoque da ferramenta ${i + 1}: `);
    const minimo = entrada.questionInt(`Estoque mínimo da ferramenta ${i + 1}: `);

    const ferramenta = {
        nome,
        quantidade,
        minimo
    };

    ferramentas.push(ferramenta);
}


console.log("\n==RELATORIO DE FERRAMENTAS CADASTRADAS==");
for (let i = 0; i < ferramentas.length; i++) {
    const ferramenta = ferramentas[i];
    const situacao = ferramenta.quantidade < ferramenta.minimo ? "REPOR" : "ESTOQUE SUFICIENTE";
    console.log(`${i + 1} - ${ferramenta.nome}: ${ferramenta.quantidade} (mínimo: ${ferramenta.minimo}) - ${situacao}`);
}