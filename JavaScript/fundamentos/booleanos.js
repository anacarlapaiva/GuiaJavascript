let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)


// - ! - Negação
// - !! - Nega a negação, portanto verdadeiro

isAtivo = 1
console.log(!!isAtivo)

console.log('os verdadeiros...')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log('os falsos...')
console.log(!!0)
console.log(!!'') // Se tivesse um espaço em branco bastaria para ser positivo
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log('pra finalizar...')
console.log(!!('' || null || 0 || 'teste'))
console.log(('' || null || 0 || 'teste')) // Retonar o primeiro valor verdadeiro

let nome = ''

console.log(nome || 'Desconhecido') // Se nome falso (vazio), retorna Desconhecido
// Se o primeiro não for verdadeiro retorna o segundo
