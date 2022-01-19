function getInteiroAleatorioEntre(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = 0

// Estrutura de repetição baseada em verdadeiro ou falso
// Própria para laço de repetições indefinidas

while (opcao != -1) {
    opcao = getInteiroAleatorioEntre(-1, 10)
    console.log(`Valor sorteado foi ${opcao}.`)
}

console.log('Fim')