const notas = [7.7, 6.2, 8.9, 3.6, 7.1, 1.7, 9.0]

// Sem callback
const notasBaixas1 = []
for(let i in notas) {
    if(notas[i] < 7) {
        notasBaixas1.push(notas[i])
    }
}

console.log(notasBaixas1)

// Com callback
// Callback ocorre após um evento
const notasBaixas2 = notas.filter(function (nota) {
    return nota < 7 // Se menor que 7 retorna para o novo array
})
// Filter -> irá filtrar o vetor e verificar se verdaeiro ou falso
// Se verdadeiro, será enviado para notasBaixas
console.log(notasBaixas2)

const notasBaixas3 = notas.filter(nota => nota < 7)
console.log(notasBaixas3)

const notasMenorQue7 = nota => nota < 7
const notasBaixas4 = notas.filter(notasMenorQue7)
console.log(notasBaixas4)
