// Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpares.

function paresEImpares(vetorNumeros) {
    let quantPares = 0
    let quantImpares = 0
    for(let i = 0; i < vetorNumeros.length; i++) {
        if(vetorNumeros[i] % 2 == 0){
            quantPares++
        } else {
            quantImpares++
        }
    }
    console.log(`${quantPares} Pares e ${quantImpares} Impares`)
}

