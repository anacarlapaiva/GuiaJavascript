// Faça uma função que receba como parâmetro um vetor de notas e mostre os conceitos de cada uma de
// modo que de 0,0 a 4,9 seja atribuído o conceito D, de 5,0 a 6,9 seja atribuído o conceito C, de 7,0 a 8,9 o
// conceito B e de 9,0 a 10,0 o conceito A.

let notas = [5.1, 4.9, 7.1, 8.9, 9]

function atribuicaoNota(vetorNotas) {
    for(let i = 0; i < vetorNotas.length; i++) {
        if(vetorNotas[i] >= 0 && vetorNotas[i] < 5){
            console.log(`Nota ${i+1}, conceito D`)
        } else if(vetorNotas[i] >= 5 && vetorNotas[i] < 7){
            console.log(`Nota ${i+1}, conceito C`)
        } else if(vetorNotas[i] >= 7 && vetorNotas[i] < 9){
            console.log(`Nota ${i+1}, conceito B`)
        } else if(vetorNotas[i] >= 9 && vetorNotas[i] <= 10){
            console.log(`Nota ${i+1}, conceito A`)
        }
    }
}

atribuicaoNota(notas)