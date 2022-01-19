// Mapear um array para outro array de mesmo tamanho com dados transformados
// Não causa alteração no array original
const nums = [1, 2, 3, 4, 5]

// For com propósito

// Criando array resultado com elementos do array nums dobrados
let resultado = nums.map(function(elemento) {
    return elemento * 2
})

console.log(resultado)

const soma10 = elemento => elemento + 10
const triplo = elemento => elemento * 3
const paraDinheiro = elemento => `R$ ${parseFloat(elemento).toFixed(2).replace('.', ',')}`

// Utilizar estas 3 funções de forma encadeada

resultado = nums.map(soma10).map(triplo).map(paraDinheiro)
console.log(resultado)