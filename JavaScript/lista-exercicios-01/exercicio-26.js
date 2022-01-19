// Fazer um programa para encontrar todos os pares entre 1 e 100.

function paresEntre1e100() {
    listaPares =[]
    for(let i = 1; i <= 100; i++){
        if(i % 2 == 0){
            listaPares.push(i)
        }
    }
    console.log(listaPares)
}

paresEntre1e100()