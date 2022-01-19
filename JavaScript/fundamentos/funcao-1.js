// Funçao sem retorno
function imprimirSoma(a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma(2) // NaN, pois segundo valor undefined

// Função com retorno
function soma(a, b = 1) { // Por padrão valor b é 1, caso não seja informado
    return a + b
}

console.log(soma(2, 3))
console.log(soma(2))