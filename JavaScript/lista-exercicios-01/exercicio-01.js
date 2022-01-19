// Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração, multiplicação
// e divisão desses valores.

function operacoesMatematicas(valor1, valor2) {
    console.log('Soma: ', valor1 + valor2)
    console.log('Subtração: ', valor1 - valor2)
    console.log('Multiplicação: ', valor1 * valor2)
    console.log('Divisão: ', valor1 / valor2)
}

operacoesMatematicas(7, 12)

// Arrow function
const resultado = (valor1, valor2) => {
    console.log('Soma: ', valor1 + valor2)
    console.log('Subtração: ', valor1 - valor2)
    console.log('Multiplicação: ', valor1 * valor2)
    console.log('Divisão: ', valor1 / valor2)
}


