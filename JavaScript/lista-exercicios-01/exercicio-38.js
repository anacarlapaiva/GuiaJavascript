// Escreva uma função que receba dois parâmetros início e fim. Essa função deve imprimir todos os números
// ímpares que estão entre esses valores. Por padrão os valores devem ser 0 para início e 100 para fim. Atente
// para corrigir a ordem dos parâmetros caso a função receba o valor maior antes do menor.

function imparesIntervalo(inicio = 0, fim = 100) {
    if (fim < inicio) [fim, inicio] = [inicio, fim]

    let impares = []
    for(i = inicio; i <= fim; i++){
        if(i % 3 == 0){
            impares.push(i)
        }
    }
    console.log(impares)
}

