// Crie duas funções que recebem dois parâmetros, um vetor com apenas valores numéricos e um número
// inteiro. Faça com que a primeira função retorne outro vetor que será resultado da multiplicação de cada
// elemento pelo número passado como parâmetro. A segunda função fará o mesmo da primeira se e somente se
// o valor do elemento for maior que 5.

function multVetor(vetorNumerico, numero) {
    let resultadoMult = []
    for(let i = 0; i < vetorNumerico.length; i++){
        resultadoMult.push(vetorNumerico[i]*numero)
    }
    return resultadoMult
}

function multVetorMaiorQue5(vetorNumerico, numero) {
    let resultadoMult = []
    for(let i = 0; i < vetorNumerico.length; i++){
        if(vetorNumerico[i] > 5){
            resultadoMult.push(vetorNumerico[i]*numero)
        }
    }
    return resultadoMult
}

