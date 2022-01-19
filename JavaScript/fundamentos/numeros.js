const peso1 = 1.0
const peso2 = Number('2.0') // Number: função, number: tipo variável

console.log(peso1, peso2)
console.log(Number.isInteger(peso1)) // Se passado 1.1 seria false 
console.log(Number.isInteger(peso2))

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

console.log(media.toFixed(2))
console.log(media.toString(2)) // Conversão para binário
console.log(typeof media)


