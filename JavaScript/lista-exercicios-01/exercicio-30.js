// Escreva um algoritmo que percorre um vetor de inteiros e defina o maior e menor valor dentro do vetor.

function maiorEMenor(vetorValores) {
    maiorValor = vetorValores[0]
    menorValor = vetorValores[0]
    for(let i = 0; i < vetorValores.length; i++){
        if(vetorValores[i] > maiorValor){
            maiorValor = vetorValores[i]
        } else if(vetorValores[i] < menorValor){
            menorValor = vetorValores[i]
        }
    }
    console.log('Maior: ' + maiorValor + ' Menor: ' + menorValor)
}
