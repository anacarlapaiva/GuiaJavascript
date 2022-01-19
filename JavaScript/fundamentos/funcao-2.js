// Armezando função em variavel
const imprimirSoma = function (a, b){ // Recebe função anônima
    console.log(a + b)
}

imprimirSoma(2, 3)

// Armazenando uma função arrow em uma variável -> Forma reduzida
const soma = (a, b) => {
    return a + b
}

console.log(soma(2, 3))

// Retorno implicito
const subtracao = (a, b) => a - b // Função sem {} no caso de ter apenas uma linha
console.log(subtracao(2, 3))

const imprimir2 = a => console.log(a)
imprimir2('Teste')