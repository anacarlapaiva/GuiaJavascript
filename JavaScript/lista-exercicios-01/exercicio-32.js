// Construir um algoritmo que calcule a média aritmética dos valores de um vetor de inteiros.

function mediaAritmetica(vetorValores) {
    let divisor = 0, soma = 0

    for(let i = 0; i < vetorValores.length; i++){
        soma = soma + vetorValores[i]
        divisor++
    }
    console.log('Média aritmética do vetor: ', soma / divisor)
}

vetor = [-4, 5, -12, -15, 91, 277, 1, 0, 3, 111]
mediaAritmetica(vetor)