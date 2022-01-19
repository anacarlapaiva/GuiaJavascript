// Sintaxe mais reduzida
// This associado ao contexto no qual a função foi escrita

let dobro = function (a) {
    return 2 * a
}

// Arrow é função anônima
// Parametro vem na frente da função que se transforma em =>
dobro = (a) => {
    return 2 * a
}

// Retorno implicito
dobro = a => 2 * a
console.log(dobro(Math.PI))

let ola = function () {
    return 'Olá'
}

ola = () => 'Olá'
ola = _ => 'Olá' // Possui um parametro, que pode ser ignorado
console.log(ola())