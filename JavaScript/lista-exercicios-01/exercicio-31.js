// Escrever um algoritmo que percorre um vetor de inteiros, conta quantos números negativos há nesse vetor
// e imprime a quantidade no console.

function numerosNegativos(vetorNumeros) {
    let quantidadeNegativos = 0
    for(let i = 0; i < vetorNumeros.length; i++){
        if(vetorNumeros[i] < 0){
            quantidadeNegativos++
        }
    }
    console.log(quantidadeNegativos + ' números negativos')
}


