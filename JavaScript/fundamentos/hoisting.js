// A sequência de leitura padrão do código é de cima para baixo
// Hoisting 'iça' elemento para cima
console.log('a = ', a) // Var 'a' existe, porém como undefined pois existe abaixo
var a = 2
console.log('a = ', a)

function teste() {
    console.log('a = ', a) // Efeito é o mesmo
    var a = 2
    console.log('a = ', a)
}

teste()

console.log('b = ', b)
let b = 2               // Içamento não ocorre com o let
console.log('b = ', b)