// Crie uma função que receba dois vetores de igual tamanho e troque seus elementos de modo que o
// primeiro elemento do vetorA passe a ser o primeiro elemento do vetorB e vice versa e assim sucessivamente.
// Faça a troca sem utilizar uma variável auxiliar.
let vetorA = [5, 4, 3, 2, 1]
let vetorB = [11, 12, 13, 14, 15]

function trocaVetores(vetorA, vetorB) {
    for(let i = 0; i < vetorA.length; i++){
        [vetorB[i], vetorA[i]] = [vetorA[i], vetorB[i]]
    }
    console.log('Vetor A: ', vetorA)
    console.log('Vetor B:', vetorB)
}
