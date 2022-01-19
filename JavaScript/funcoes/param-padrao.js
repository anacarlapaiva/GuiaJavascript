// Estrategia 1 para gerar valor padrao
function soma1(a, b, c) {
    a = a || 1
    b = b || 1 // Trazer valor padrao caso variavél seja vazia ou 0
    c = c || 1
    return a + b + c
}

console.log(soma1(), soma1(3), soma1(1, 2, 3), soma1(0, 0, 0))
// Zero como falso
function soma2(a, b, c) {
    a = a != undefined ? a : 1 // Se a for diferente de undefined pega a, senão assume 1
    b = 1 in arguments ? b : 1 // Dentro do indice 1 existe valor? se sim pegue b, senão assume 1
    c = isNaN(c) ? 1 : c 
    return a + b + c
}

console.log(soma2(), soma2(3), soma2(1, 2, 3), soma2(0, 0, 0))

// Valor padrão do ES2015
function soma3(a = 1, b = 1, c = 1){
    return a + b + c
}

console.log(soma3(), soma3(3), soma3(1, 2, 3), soma3(0, 0, 0))