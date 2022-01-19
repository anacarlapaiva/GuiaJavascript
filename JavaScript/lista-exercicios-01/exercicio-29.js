// Utilizando a estrutura de repetição for, faça uma função que percorra um vetor e conte quantos números
// deste vetor estão no intervalo [10,20] (repare que o intervalo é fechado, ou seja, inclui o 10 e o 20) e quantos
// deles estão fora do intervalo, escrevendo estas informações.

function numerosNoIntervalo(vetorNumeros) {
    let dentroIntervalo = 0
    let foraIntervalo = 0
    for(let i = 0; i < vetorNumeros.length; i++){
        if(vetorNumeros[i] >= 10 && vetorNumeros[i] <= 20){
            dentroIntervalo++
        } else {
            foraIntervalo++
        }
    }
    console.log(`${dentroIntervalo} números dentro do intervalo e ${foraIntervalo} números fora do intervalo`)
}
