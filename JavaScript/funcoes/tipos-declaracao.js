console.log(nomeFuncaoSoma(3, 4))
// Dessa forma posso utilizar função mesmo antes de declará-la
// function declaration
function nomeFuncaoSoma(param1, param2) {
    return param1 + param2
}

// function expression
const sub = function (x, y) {
    return x - y
}
// Posso chamar apenas depois de declarar a função
console.log(sub(3, 4))

// named function expression
const mult = function mult(x, y) {
    return x * y // Consta ao debugar código
}