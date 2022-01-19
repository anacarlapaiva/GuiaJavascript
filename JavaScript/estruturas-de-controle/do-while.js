function getInteiroAleatorioEntre(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = 0 // Mesmo que opcao seja -1 irá executar

do {
    opcao = getInteiroAleatorioEntre(-1, 10)
    console.log(`Valor sorteado foi ${opcao}.`)
} while (opcao != -1) 

console.log('Fim')