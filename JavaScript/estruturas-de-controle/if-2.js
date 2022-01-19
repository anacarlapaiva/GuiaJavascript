function teste1(num) {
    if(num > 7)
        console.log(num) // Apenas esta sentença associada ao if, pois if não possui chave
    
    console.log('Final')
}

teste1(6)
teste1(8)

function teste2(num) {
    if(num > 7); { // Não utilizar ; em estruturas de controle
        console.log(num)
    }
}

teste2(6)
teste2(8)