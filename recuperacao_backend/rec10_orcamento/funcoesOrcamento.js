function calcularMaoDeObra(horas) {
    return horas * 95;
}

function calcularTotal(valormateriais, horas) {
    const maoDeObra = calcularMaoDeObra(horas);
    return valormateriais + maoDeObra;
}

function verificarDesconto(desconto) {
    if (desconto >= 1000) {
        return "DESCONTO DE 10%";
    } else {
        return "SEM DESCONTO";
    }
}

module.exports = {
    calcularMaoDeObra,
    calcularTotal,
    verificarDesconto
};