function soma() { // Pode passar parametros
    let soma = 0 
    for(i in arguments) { // Array interno de uma função, tem todos os argumentos passados
        soma += arguments[i] // Pegar cada um dos parametros e somar
    }
    return soma
}

console.log(soma())
console.log(soma(1))
console.log(soma(1.1, 2.2, 3.3))
console.log(soma(8, -17, 2, 44, 21))
console.log(soma(5, 6, 12, -9, ' Concatenação'))
console.log(soma(' a', 'b', 'c'))